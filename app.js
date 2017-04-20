'use strict'

const express = require('express');
const bodyParser = require('body-parser');
let app = express();

let routes = require('./routes/')
// <Include the router index file>


app.set('view engine', 'pug');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/v1/', routes);
// <Setup y our routes middleware>
// <catch any undefined routes with a 404 middleware>

app.use((req, res, next)=> {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})



app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  })
})


// <Handle any errors that occur in the routing with error handlers defined at the bottom of our
// middleware stack>
const port = process.env.PORT || 3000;

app.listen(port, ()=> {
  console.log('I am listening on port ', port);
})


module.exports = app;
