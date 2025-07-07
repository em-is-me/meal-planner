
const express = require('express');
const database = require('../config/database');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all pantry items for user
router.get('/', auth, (req, res) => {
  const db = database.getDb();
  
  db.all(
    'SELECT * FROM pantry_items WHERE user_id = ? ORDER BY expiry_date ASC',
    [req.user.userId],
    (err, items) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }
      res.json({ items });
    }
  );
});

// Get single pantry item
router.get('/:id', auth, (req, res) => {
  const db = database.getDb();
  
  db.get(
    'SELECT * FROM pantry_items WHERE id = ? AND user_id = ?',
    [req.params.id, req.user.userId],
    (err, item) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json({ item });
    }
  );
});

// Add pantry item
router.post('/', auth, (req, res) => {
  const { name, category, quantity, unit, expiry_date, location, notes } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Item name is required' });
  }

  const db = database.getDb();
  
  db.run(
    'INSERT INTO pantry_items (user_id, name, category, quantity, unit, expiry_date, location, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [req.user.userId, name, category, quantity, unit, expiry_date, location, notes],
    function(err) {
      if (err) {
        return res.status(500).json({ message: 'Error adding item' });
      }
      res.status(201).json({
        message: 'Item added successfully',
        item: { 
          id: this.lastID, 
          name, 
          category, 
          quantity, 
          unit, 
          expiry_date, 
          location, 
          notes 
        }
      });
    }
  );
});

// Update pantry item
router.put('/:id', auth, (req, res) => {
  const { name, category, quantity, unit, expiry_date, location, notes } = req.body;

  const db = database.getDb();
  
  db.run(
    `UPDATE pantry_items SET name = ?, category = ?, quantity = ?, unit = ?, expiry_date = ?, location = ?, notes = ?, updated_at = CURRENT_TIMESTAMP
     WHERE id = ? AND user_id = ?`,
    [name, category, quantity, unit, expiry_date, location, notes, req.params.id, req.user.userId],
    function(err) {
      if (err) {
        return res.status(500).json({ message: 'Error updating item' });
      }
      if (this.changes === 0) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json({ message: 'Item updated successfully' });
    }
  );
});

// Delete pantry item
router.delete('/:id', auth, (req, res) => {
  const db = database.getDb();
  
  db.run(
    'DELETE FROM pantry_items WHERE id = ? AND user_id = ?',
    [req.params.id, req.user.userId],
    function(err) {
      if (err) {
        return res.status(500).json({ message: 'Error deleting item' });
      }
      if (this.changes === 0) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json({ message: 'Item deleted successfully' });
    }
  );
});

module.exports = router;
