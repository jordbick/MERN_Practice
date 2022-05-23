// Importing express module
const express = require('express');

// Create variable called app, equal to our object function
const app = express();

// Create a path that will listen for /hello and console log "hello"
// app - express backend
// .get - GET request, to retrieve data
app.get('/hello', (req, res) => {
    // return is optional
    return console.log("Hello");
});

// POST request
app.post('/post', (req, res) => {
    return console.log("Post request made!");
});

app.get('/name/:name', (req, res) => {
    const name = req.params.name;
    res.status(202).send(name);
})


const port = 5015;
const server = app.listen(port, () => {
    console.log(`Server started on port ${server.address().port}`)
})