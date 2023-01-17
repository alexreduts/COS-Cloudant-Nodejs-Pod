const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/port', (req, res) => {
  res.send(`Currently used port is ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
