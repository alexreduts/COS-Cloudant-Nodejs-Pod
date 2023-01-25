const express = require('express')
const app = express()
const { CloudantV1 } = require('@ibm-cloud/cloudant')
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

app.get('/cloudant', (req, res) => {
  const cloudantDemo = CloudantV1.newInstance({
    serviceName: 'CLOUDANT_DEMO'
  });
  
  cloudantDemo.getServerInformation()
    .then(response => {
      console.log(`Cloudant Readout ${response.result}`)
    })
    .catch(error => {
      console.log(`Error Message:\n ${error.message}`)
    })

  res.send(`Welcome have a look at the pod log`)
})