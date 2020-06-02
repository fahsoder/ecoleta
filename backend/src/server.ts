import express from 'express'

const app = express()

app.get('/home', (request, response) => {
    response.json({name: 'Hello world!!'})
})

app.listen(5000)