// Need to create a node project

// Import Express package as a variable

const express = require('express');

// Create a variable called app that is equal to express()
const app = express();

// Middleware to interpret json
// Middleware uses the app.use()
// Does something when it calls upon the next()
// next() invokes the subsequent middleware which it is passed on
// Whenever a request is made ALL the middleware is fired
app.use(express.json());
app.use(cors());

// Custom
app.use((req, res, next) => {
    console.log("First Piece of middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Second Piece of Middleware");
    next();
})

// GET method ----------------------------------------------------------------------------------
app.get('/get', (req, res) => res.status(200).send(req.params));


// URL param
app.get('/getSuperheroes/:name', (req, res) => {
    //console.log(req);
    console.log(req.params);
    console.log(req.params.name);
    console.log(res.statusCode);
    console.log(req.hostname + ":" + server.address().port + req.url);
    res.status(200).send(req.params.name);
});

// Query parameters
// In URL, if followed by question mark will search
// e.g. /getSupervillains?name=Loki
app.get('/getSupervillains', (req, res) => {
    console.log(req.query)
    res.status(200).send(req.params)
});




// POST method ----------------------------------------------------------------------------------
app.post('/create', (req, res) => res.send("Post function"));

// Body request
app.post('/newSuperPerson', (req, res) => {
    const body = req.body;
    console.log(body.name);
    res.status(201).send(body)
});

// PUT method ------------------------------------------------------------------------------------
app.put('/replace', (req, res) => console.log("Put function"));

app.put('/replace/:id', (req, res) => {
    const body = req.body;
    console.log(req.params);
    console.log(body)
    res.status(202).send(body);
});

// Query params
app.patch('/update/:id', (req, res) => {
    const id = req.params.id;
    console.log(`id: ${id}`);
    const name = req.params.name;
    console.log(`Name: ${name}`);
    const age = req.params.age;
    console.log(`Age: ${age}`);
    res.status(202).send(req.body);
})

//DELETE method --------------------------------------------------------------------------------------
app.delete('/delete/:id', (req, res) => {
    res.status(204).send(req.params.id);
    console.log(req.params.id);

});


app.get('/hello', (req, res) => {
    res.status(200).send(`Server has started on port ${server.address().port}`);
});

app.get('/error', (req, res) => {
    res.status(502).send("Why are you here?");
});

// Make a variable called server listening to a port (5015)
// localhost:5015
const server = app.listen(5015, () => {
    console.log(`Hello world`)
})