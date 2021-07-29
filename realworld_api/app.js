const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

app.listen(PORT, () => {
    console.log('PORT ==== ');
})