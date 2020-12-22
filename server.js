const express = require('express')
const app = express()
const scgs = require('./db')
//Google 
const {google} = require('googleapis');
const bodyParser = require('body-parser')


//bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/scgs', (req, res) => {
    res.json(scgs)
})

//find X, Y, Z  ส่งค่าเป็น id , 1,2,3 
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

// Learn Never Use
app.get('/about', function (req, res) {
    res.send('about learn')
})

// API Created  โดย Post เข้าไป 
app.post('/scgs', (req, res) => {
    scgs.push(req.body)
   
    // status Code 201 Created
    res.status(201).json(req.body)
  })


// API สำหรับอัพเดตข้อมูล
  app.put('/scgs/:id', (req, res) => {
    const updateIndex = scgs.findIndex(scg => scg.id === req.params.id)
    res.json(Object.assign(scgs[updateIndex], req.body))
  })



  
// // Each API may support multiple version. With this sample, we're getting
// // v3 of the blogger API, and using an API key to authenticate.
// const blogger = google.blogger({
//   version: 'v3',
//   auth: 'AIzaSyAK3RgqSLy1toc4lkh2JVFQ5ipuRB106vU&;callback=initMap'
// });

// const params = {
//   blogId: '3213900'
// };

// // get the blog details
// blogger.blogs.get(params, (err, res) => {
//   if (err) {
//     console.error(err);
//     throw err;
//   }
//   console.log(`The blog url is ${res.data.url}`);
// });
