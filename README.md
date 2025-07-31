# transformer_cycle_hub

A modern React-based web application for promoting sustainable waste management and recycling practices. Transform your waste into valuable resources while earning rewards and contributing to a greener planet.

![Transformer Cycle Hub](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-7.5.0-green)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Environment Setup](#-environment-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

Transformer Cycle Hub is a comprehensive waste management platform that connects users with recycling centers, provides educational content, and rewards sustainable practices. The application features a modern React frontend with TypeScript and a robust Node.js backend with MongoDB.

### Key Objectives

- Promote sustainable waste management practices
- Connect users with local recycling centers
- Provide educational content and tutorials
- Reward users for sustainable actions
- Modern, responsive user interface

## Features

### Core Features

- **User Authentication**: Secure login/signup with JWT tokens
- **Interactive Map**: Find nearby recycling centers with Google Maps integration
- **Waste Pickup**: Schedule waste collection services
- **Educational Content**: Tutorials and guides for sustainable practices
- **Rewards System**: Earn points for recycling activities
- **User Dashboard**: Track your recycling progress and rewards
- **Admin Panel**: Manage users, centers, and content

### User Experience

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Real-time Updates**: Live notifications and status updates
- **Accessibility**: WCAG compliant design

### Technical Features

- **TypeScript**: Type-safe development
- **React Router**: Client-side routing
- **Socket.IO**: Real-time communication
- **MongoDB**: Scalable data storage
- **JWT Authentication**: Secure user sessions
- **Email Integration**: Automated notifications

## Tech Stack

### Frontend

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **React Icons** - Beautiful icon library
- **Framer Motion** - Smooth animations
- **Axios** - HTTP client
- **Socket.IO Client** - Real-time features

### Backend

- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email service
- **Socket.IO** - Real-time communication

### Development Tools

- **Create React App** - Project scaffolding
- **ESLint** - Code quality
- **Nodemon** - Development server
- **Helmet** - Security middleware

## Project Structure

transformer-cycle-hub-react/
├── public/                 # Static files
│   ├── images/            # Project images
│   ├── index.html         # Main HTML file
│   └── manifest.json      # PWA manifest
├── src/                   # React source code
│   ├── components/        # Reusable components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   └── CommunityMap.tsx # Interactive map
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── About.tsx     # About page
│   │   ├── Pickup.tsx    # Waste pickup
│   │   ├── Tutorials.tsx # Educational content
│   │   ├── Rewards.tsx   # Rewards system
│   │   ├── Contact.tsx   # Contact form
│   │   ├── Login.tsx     # Authentication
│   │   ├── Dashboard.tsx # User dashboard
│   │   └── AdminDashboard.tsx # Admin panel
│   ├── services/         # API services
│   ├── types/           # TypeScript types
│   ├── App.tsx          # Main app component
│   └── index.tsx        # App entry point
├── backend/              # Node.js backend
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── server.js        # Server entry point
├── package.json         # Frontend dependencies
└── README.md           # This file

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (v7.5 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/transformer-cycle-hub-react.git
   cd transformer-cycle-hub-react
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**

   - **Backend**: In the `backend` directory, copy `.env.example` to a new file named `.env`.
   - **Frontend**: In the root directory, create a `.env` file.

   See the **Environment Setup** section below for details on the required variables.

5. **Configure environment variables**

   ```env
   # Backend .env
   PORT=3005
   MONGODB_URI=mongodb://localhost:27017/transformer-cycle-hub
   JWT_SECRET=your-secret-key
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CORS_ORIGIN=http://localhost:3000
   ```

6. **Start the development servers**

   **Terminal 1 - Backend:**

   ```bash
   cd backend
   npm run dev
   ```

   **Terminal 2 - Frontend:**

   ```bash
   npm start
   ```

7. **Access the application**
   - Frontend: <http://localhost:3000>
   - Backend API: <http://localhost:3005>
   - Health Check: <http://localhost:3005/api/health>

## API Documentation

For a detailed list of all endpoints, please see the `backend/README.md` file.

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### User Management
- `GET /api/users` - Get all users

### Pickup Services
- `GET /api/pickups` - Get all pickups
- `POST /api/pickups` - Create pickup request

## 🔧 Environment Setup

### Backend (`backend/.env`)

```env
# Server Configuration
PORT=3005
NODE_ENV=development

# MongoDB Database
MONGODB_URI=mongodb://localhost:27017/transformer-cycle-hub

# Authentication
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
# CORS
CORS_ORIGIN=http://localhost:3000

# Google Maps API
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

#### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:3005/api
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### Database Setup

1. **Install MongoDB**
   - Download from [MongoDB Official Site](https://www.mongodb.com/try/download/community)
   - Or use MongoDB Atlas (cloud service)

2. **Create Database**

   ```bash
   mongosh
   use transformer-cycle-hub
   ```

3. **Initialize Collections**
   The application will automatically create collections when first used.

## Deployment

This project is optimized for deployment on **Vercel**. You should deploy the frontend and backend as two separate projects from the same repository.

### 1. Deploying the Backend

1.  Create a new project on Vercel and link it to your GitHub repository.
2.  When configuring the project, set the **Root Directory** to `backend`.
3.  Vercel will automatically detect it as a Node.js project.
4.  Go to **Settings -> Environment Variables** and add the production variables for the backend:
    - `MONGODB_URI`: Your production MongoDB Atlas connection string.
    - `JWT_SECRET`: A new, strong, randomly generated secret key.
    - `CORS_ORIGIN`: **Leave this blank for now.** You will add it after deploying the frontend.
    - `NODE_ENV`: `production`
    - `EMAIL_USER`, `EMAIL_PASS`, etc. for your email service.
5.  Deploy the project. Once deployed, note the public URL (e.g., `https://your-backend-app.vercel.app`).

### 2. Deploying the Frontend

1.  Create another new project on Vercel from the same repository.
2.  Set the **Root Directory** to `./` (the root of the repository).
3.  Vercel will detect it as a Create React App project.
4.  Go to **Settings -> Environment Variables** and add the required variables:
    - `REACT_APP_API_URL`: The full URL of your **deployed backend API** (e.g., `https://your-backend-app.vercel.app/api`).
    - `REACT_APP_GOOGLE_MAPS_API_KEY`: Your Google Maps API key.
5.  Deploy the project. Note its public URL (e.g., `https://your-frontend-app.vercel.app`).

### 3. Final Configuration (Crucial Step)

1.  Go back to your **backend project's settings** on Vercel.
2.  Navigate to **Environment Variables**.
3.  Edit the `CORS_ORIGIN` variable and set its value to your **frontend's public URL** (e.g., `https://your-frontend-app.vercel.app`).
4.  Trigger a new deployment for the backend project to apply the new environment variable.

After the backend redeploys, your application should be fully functional, and sign-up/login will work correctly.

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
4. **Test your changes**

   ```bash
   npm test
   ```

5. **Commit your changes**

   ```bash
   git commit -m "Add: your feature description"
   ```

6. **Push to your branch**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React team for the amazing framework
- MongoDB for the database solution
- Google Maps for mapping services
- All contributors and supporters

## Support

If you have any questions or need help:

- Email: <support@transformercyclehub.com>
- Issues: [GitHub Issues](https://github.com/yourusername/transformer-cycle-hub-react/issues)
- Documentation: [Wiki](https://github.com/yourusername/transformer-cycle-hub-react/wiki)

---

*Transform your waste, transform the world!*
