
# 🍽️ Meal Planner App

A comprehensive meal planning application that helps you organize recipes, manage your pantry, and get personalized meal recommendations.

## Features

- 🔐 User authentication and profiles
- 📝 Recipe management and organization
- 🥫 Pantry inventory tracking
- 🤖 AI-powered meal recommendations
- 📊 Nutritional information tracking
- 📱 Responsive design

## Tech Stack

### Backend
- Node.js with Express
- SQLite database
- JWT authentication
- RESTful API design

### Frontend
- React with functional components
- Tailwind CSS for styling
- Context API for state management
- Responsive design

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
2. Install server dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration.

5. Start the development server:
   ```bash
   npm run dev
   ```

This will start:
- Backend server on port 3001
- Frontend client on port 3000

## Project Structure

```
meal-planner-app/
├── server/              # Backend files
│   ├── config/         # Database configuration
│   ├── models/         # Data models
│   ├── routes/         # API routes
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   └── database/       # Database files
├── client/             # Frontend React app
│   ├── public/         # Static files
│   └── src/           # React source code
├── server.js          # Main server file
├── package.json       # Server dependencies
└── README.md          # This file
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Recipes
- `GET /api/recipes` - Get all recipes
- `POST /api/recipes` - Create new recipe
- `GET /api/recipes/:id` - Get specific recipe
- `PUT /api/recipes/:id` - Update recipe
- `DELETE /api/recipes/:id` - Delete recipe

### Pantry
- `GET /api/pantry` - Get pantry items
- `POST /api/pantry` - Add pantry item
- `PUT /api/pantry/:id` - Update pantry item
- `DELETE /api/pantry/:id` - Remove pantry item

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
