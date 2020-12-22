const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('DOSCG')

//   res.send('Hello Team')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
