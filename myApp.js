let express = require('express');
require('dotenv').config();

//Use body-parser to Parse POST Requests
const bodyParser = require('body-parser')
let app = express();
console.log ("Hello World");


// Root-level logger middleware

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});


/*

This was just for the previous challenge
app.get("/", function(req, res) {
  res.send("Hello Express")
} );

*/



// Mount a static file
app.use('/public', express.static(__dirname + "/public"));



// Serve the html file
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
});


// Serve an object
app.get("/json", (req, res) => {
 const style = process.env.MESSAGE_STYLE;

 if (style === "uppercase") {
   res.json({message: "Hello json".toUpperCase()});
 } else {
   res.json({message: "Hello json"})
 }
});



// Chain Middleware to Create a Time Server


app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
  }, function(req, res) {
  res.send({time: req.time})
});



// Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => {
  words = req.params.word;
  console.log(words)
  res.json({echo: words})
});

                                                                                                                      
// Get Query Parameter Input from the Client

// First mount a middle ware to handle the req.body
app.use(bodyParser.urlencoded({extended: false}));

/*
Here data is passed to server from the url
app.get("/name", (req, res) => {
  const request = req.query;
  res.json({"name": `${request.first} ${request.last}`})
})
*/

// But here data from request body(html form)
// Get Data from POST Requests

app.post("/name", (req, res) => {
  const bodyy = req.body
  res.json({name: `${bodyy.first} ${bodyy.last}` })
});























 module.exports = app;
