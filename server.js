const express = require('express')
const app = express()
const scgs = require('./db')

app.get('/scgs', (req, res) => {
    res.json(scgs)
})

//find X, Y, Z 
app.get('/scgs/:id', (req, res) => {
    res.json(scgs.find(scgs => scgs.id === req.params.id))
})
  
//called “DOSCG
app.get('/', (req, res) => {
  res.send('DOSCG')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})

