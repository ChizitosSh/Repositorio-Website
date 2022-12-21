// Con express.js
const express = require('express')
const app = express()
const port = 2908

app.get('/', (req, res) => {
    res.send('5 + 5 = 10')
})

app.listen(port, () => {
    console.log(`El servidor esta encendido en https://localhost:${port}/`)
})
