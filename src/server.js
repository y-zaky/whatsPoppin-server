const {getData, postData} = require('./query')

const express = require('express')
const app = express()

const port = process.env.PORT || 1234;


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

// app.get( '/', (req,res) => {
// console.log('da')
  
//   res.send(JSON.stringify("Hello World"))
// })

app.get( '/get', (req,res) => {
  // console.log(req)
  // console.log('req',req.params)

  getData((err, res) => {
    if (err) {
      console.log('ERROR', err);
        
        res.status(500).send('<h1>Sorry, there was a problem getting the users</h1>');
        
    } else {
        let output = JSON.stringify(res);
        console.log('congrats here is output', output)
        res.send(output);
    }
});
// res.send(JSON.stringify("Hellsfwrfwfo World"))
})

app.listen(port, () => console.log('App live and listening on port 1234!'))