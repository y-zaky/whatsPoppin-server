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

app.get( '/', (req,res) => {
  // console.log(req)
  
  res.send(JSON.stringify("Hello World"))
})

app.listen(port, () => console.log('App live and listening on port 1234!'))