// Import required modules
require('dotenv').config()
const express = require('express');

// Create an instance of Express
const app = express();
const port = process.env.PORT;

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.status(201).send('Hello, Duniya!'); // Respond with "Hello, World!"
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
