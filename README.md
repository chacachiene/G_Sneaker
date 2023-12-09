# G_Sneaker
This mini-project is deployed at: https://go-sneaker-k1a2.onrender.com
This document provides instructions on how to set up and run the project locally, as well as a link to a demo on Heroku.

Table of Contents

  Local Setup: #local-setup
    Prerequisites: #prerequisites
    Installation: #installation
    Running the Application: #running-the-application


Local Setup
Prerequisites
  Node.js v16.13.0 or higher
  npm v8.11.0 or higher
  MongoDB 5.0.3 or higher
Installation
Clone the repository:
  git clone [https://github.com/chacachiene/g_sneaker.git](https://github.com/chacachiene/G_Sneaker.git)


Navigate to the server project directory:
  cd server
Install the dependencies:
npm install
Create an .env file in the root directory and add your environment variables:
MONGODB_URI=[your-mongodb-uri]
PORT=[your-desired-port]

Running the Application
In one terminal window, run the command:
  npm run dev

Navigate to the client project directory:
  cd client
Install the dependencies:
  npm install
Running the Application
In one terminal window, run the command:
  npm start 
Create an .env file in the root directory and add your environment variables:
REACT_APP_API_URL = "https://go-sneaker-api.onrender.com/api/v1"
Open http://localhost:3000 in your browser to access the application.
If you want to know more about React-app, check the README file in client folder.
