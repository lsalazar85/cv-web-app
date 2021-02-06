const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res,next) => {
    res.send(
        '<form action="/user" method="POST"><input type="text" name="username"><button type="submit" type="submit">Create User</button></form>'
    )
})

app.post('/user', (req,res,next) => {
    res.send(`<h1>User: ${req.body.username}</h1>`);
})

app.listen(5000)