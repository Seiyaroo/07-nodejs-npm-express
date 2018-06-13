'use strict';

//TODO: Finish out the server code according to the instructions in the lab README
// Load the express dependency
const express = require('express');

// Instantiate the express dependency
const app = express();

// Set a port
const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request.

// POST middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('/kilovolt', (request, response) => {
  console.log('We got a kilovolt request!')
  response.sendFile('public/', {root: '.'})
});

// Listener on a post
app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
})



// Tell express to listen for the port activation
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));