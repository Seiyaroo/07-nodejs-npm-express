'use strict';

//DONE: Finish out the server code according to the instructions in the lab README
// Load the express dependency
const express = require('express');

// Instantiate the express dependency
const app = express();

// Set a port
const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request.

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

// routes
app.get('/kilovolt', (request, response) => {
  // console.log('We got a kilovolt request!');
  response.sendFile('./public/', {root: '.'});
});

app.get('/newblog', (request, response) => {
  // console.log('You got something to say!'); 
  response.sendFile('./public/new.html', { root: '.'}); 
}); 
// Listener on a post
app.post('/articles', (req, res) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(req.body);
  res.status(201).json(req.body);
});

// 404 response !!!! 
app.use((req, res, next) => {
  console.log(`Oh No, it's 404! Could not find file ${req.originalUrl}`);
  res.status(404).send(`<h1> Nick &amp; Chris are Cool!</h1><h2>You are a 404 fool! </h2><p>I pity the fool looking for </p> <code>  ${req.originalUrl} </code>`); 
}); 
// Tell express to listen for the port activation
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));