# Gaming Platform

## Overview
This project is a full-stack gaming platform built using the MERN (MongoDB, Express, React, Node.js) stack. It includes features such as user authentication, a blog section, a beta page for games, a leaderboard, FAQ and About Us pages, language support, and a comment section.

## Features
- **User Authentication**: Secure login and registration for users.
- **Blog Section**: Users can read and comment on blog posts.
- **Beta Page for Games**: A dedicated page for testing new games.
- **Leaderboard**: Displays top players and their scores.
- **FAQ Page**: Answers to frequently asked questions.
- **About Us Page**: Information about the platform and its creators.
- **Language Support**: Users can switch between different languages.
- **Comment Section**: Users can leave comments on blogs and games.

## Project Structure
```
gaming-platform
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   ├── server.js
│   └── package.json
├── frontend
│   ├── public
│   └── src
├── README.md
└── .gitignore
```

## Installation

### Backend
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the backend directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```
   node server.js
   ```

### Frontend
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Usage
- Access the application in your browser at `http://localhost:3000`.
- Use the authentication features to create an account or log in.
- Explore the blog section, participate in discussions, and check out the leaderboard.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.

The website URL
https://genbeta-data.github.io/GenBeta-Data/
