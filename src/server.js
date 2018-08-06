const {getData, insertData} = require('./query')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 1234;

// parse application/x-www-form-urlencoded, extended is false, you can not post "nested object"
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.use(
  function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    res.status(200)
    return next();
  }
)

//TODO - GET DATABASE PUT TO WORK :D

app.get( '/', (req,res) => {
console.log('home hit')
  
  res.send(JSON.stringify("Hello World"))
})

// app.get( '/get', (req,res) => {
//   // let data;
//   console.log('/get hit')
//   getData(res)
// .then( data => res.send( JSON.stringify({response:data})) ) 
// .catch( err => console.log('promise err', err))
// // res.send(JSON.stringify("Hellsfwrfwfo World")
// })

app.post('/save', (req,res) => {
  console.log('\save hit')

  console.log(req.body)
 
  insertData(req.body.name, req.body.id)
.then(data => res.send( JSON.stringify({response:data})) )
.catch(err => console.log('post data error', err) )
})

app.listen(port, () => console.log('App live and listening on port 1234!'))