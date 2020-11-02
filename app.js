const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 9000;
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// roting
app.use('/student', require('./rotes/rote'))

app.listen(port, () => {
    console.log("it work")


})