# G_Sneaker
This mini-project is deployed at: https://go-sneaker-k1a2.onrender.com

This document provides instructions on how to set up and run the project locally.

## Table of Contents
```
    Prerequisites: #prerequisites
    Installation: #installation
    Running the Application: #running-the-application
```
### Prerequisites
```
  Node.js v16.13.0 or higher
  npm v8.11.0 or higher
  MongoDB 5.0.3 or higher
```
### Installation
1. Clone the repository:
```bash
  git clone [https://github.com/chacachiene/g_sneaker.git](https://github.com/chacachiene/G_Sneaker.git)
```

2. Navigate to the server project directory:
```bash
  cd server
```
- Install the dependencies:
```bash
npm install
```
- Create an .env file in the root directory and add your environment variables:
```javascript
    MONGODB_URI=[your-mongodb-uri]
    PORT=[your-desired-port]
```
- Running the Application
In one terminal window, run the command:
```bash
  npm run dev
```

3. Navigate to the client project directory:
```bash
  cd client
```
3.1. Install the dependencies:
```bash
  npm install
```
3.2. Create an .env file in the root directory and add your environment variables:
``` javascript
REACT_APP_API_URL = "https://go-sneaker-api.onrender.com/api/v1"
```
3.3. Running the Application
In one terminal window, run the command:
  ```bash
  npm start 
```
Open http://localhost:3000 in your browser to access the application.

If you want to know more about React-app, check the README file in client folder.
