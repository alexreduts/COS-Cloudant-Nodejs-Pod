const express = require('express')
const app = express()
const { CloudantV1 } = require('@ibm-cloud/cloudant')
const port = 8080

const productsDoc: CloudantV1.Document = {
  _id: 'small-appliances:1000042',
  type: 'product',
  productid: '1000042',
  brand: 'Salter',
  name: 'Digital Kitchen Scales',
  description: 'Slim Colourful Design Electronic Cooking Appliance for Home / Kitchen, Weigh up to 5kg + Aquatronic for Liquids ml + fl. oz. 15Yr Guarantee - Green',
  price: 14.99,
  image: 'assets/img/0gmsnghhew.jpg'
};

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
      console.log(`Cloudant Readout`)
      console.log(response.result)
    })
    .catch(error => {
      console.log(`Error Message:\n ${error.message}`)
    })

  cloudantDemo.postDocument({
      db: 'cloudant-demo-db',
      document: productsDoc
    }).then(response => {
      console.log(`Document should have been added ${response.result}`);
    });

  res.send(`Welcome have a look at the pod log`)
})