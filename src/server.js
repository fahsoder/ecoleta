const express = require('express');

const app = express();

app.get('/users', (request, response) => {
    console.log('Dale')
    response.json('Hello world 2!')
})

app.listen(3001);