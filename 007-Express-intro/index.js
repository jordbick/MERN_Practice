// Need to create a node project

// Import Express package as a variable

const express = require('express');

// Create a variable called app that is equal to express()
const app = express();


// GET method
app.get('/get', (req, res) => res.send("Get function"));

// POST method
app.post('/create', (req, res) => res.send("Post function"));

// PUT method
app.put('/update', (req, res) => console.log("Put function"));

//DELETE method
app.delete('/delete/:id', (req, res) => res.send(req.params.id));


app.get('/hello', (req, res) => {
    res.status(200).send(`Server has started on port ${server.address().port}`);
});

// Make a variable called server listening to a port (5015)
const server = app.listen(5015, () => {
    console.log(`Hello world`)
})