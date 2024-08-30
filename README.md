
---

# YourHR - Job Search Service

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
4. [Project Structure](#project-structure)
5. [Usage](#usage)
6. [API Documentation](#api-documentation)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)
11. [Acknowledgements](#acknowledgements)

---

## Introduction
YourHR is a job search service web application developed using the MERN stack. It allows job seekers to fill out a signup form with their personal information and upload their resumes. The application provides a user-friendly interface and stores user data securely in a MongoDB database.

## Features
- User registration and authentication
- Resume upload functionality
- Responsive design for a seamless user experience
- Secure storage of user information and resumes
- Admin panel for managing user data

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (version 14.x or higher)
- MongoDB
- Git

### Installation
Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/AvadhootSmart/Av_YourHR_FS.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Av_YourHR_FS
   ```
3. Install the dependencies for both the client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

### Running the Application
To start the development server:

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```
2. In a separate terminal, start the frontend:
   ```bash
   cd client
   npm start
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure
Here's an overview of the project's structure:

```
/Av_YourHR_FS
  /client
    /public - Static assets like images and icons
    /src
      /components - React components
      /pages - Application pages
      /utils - Utility functions
      App.js - Main application component
      index.js - Entry point for React
  /server
    /config - Database configuration
    /controllers - Business logic for routes
    /models - Mongoose schemas
    /routes - API routes
    /uploads - Directory for storing uploaded resumes
    server.js - Main server file
  .env - Environment variables (ensure this is created with appropriate variables)
  README.md - Project documentation
  package.json - Project dependencies and scripts
```

## Usage
Once the application is running, users can sign up by filling out a form with their personal information and uploading their resumes. The data is securely stored, and users can manage their profiles via the provided interface.

## API Documentation
The backend server provides several API endpoints to handle user data and resume uploads:

- **POST /api/users/signup**: Create a new user account
  - **Request Body**: `{ name, email, password }`
  - **Response**: User object with a success message
- **POST /api/resumes/upload**: Upload a resume
  - **Request Body**: FormData containing the resume file
  - **Response**: Confirmation of the upload

## Testing
The project currently doesn't include specific testing scripts. However, you can add testing frameworks like Jest or Mocha for both backend and frontend testing.

## Deployment
To deploy the application, follow these steps:

1. Build the React frontend:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the backend and frontend on a cloud service like Heroku, Vercel, or AWS.

## Contributing
Contributions are welcome! Please fork the repository, create a new branch for your changes, and submit a pull request. Ensure your code follows the project's coding standards.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Database Credentials

1.Download and install MongoDB Compass.
2.Open MongoDB Compass and paste the connection string into the New Connection field.
3.Click Connect.

Connection String:
mongodb+srv://read-only-user:thisisthepasswordforreadonlyuser@cluster0.sxsvl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


## Acknowledgements
- [MERN Stack](https://mern.io/)
- [Tailwind CSS](https://tailwindcss.com/)

---
