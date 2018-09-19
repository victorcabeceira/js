const door = 3123

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./database');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (req, res, next) => {
  // res.send({ nome: 'Laptop', preco: 1234.56 }) // Convert automatically to JSON
  res.send(db.getProducts()) // Convert automatically to JSON
})

app.get('/products/:id', (req, res, next) => {
  res.send(db.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
  const product = db.saveProduct({
    name: req.body.name,
    price: req.body.price
  })
  res.send(product) // JSON
})

app.put('/products/:id', (req, res, next) => {
  const product = db.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  })
  res.send(product) // JSON
})

app.delete('/products/:id', (req, res, next) => {
  const product = db.deleteProduct(req.params.id)
  res.send(product) // JSON
})

app.listen(door, () => {
  console.log(`Server executing on door: ${door}`)
})