const express = require('express');
var rout = express.Router();
const USER = require('../mongos/db');
rout.get('/table', (req, res) => {
    USER.find((err, dates) => {

        if (err)
            console.log('it is err')
        else {
            res.render('index2.ejs', { dates: dates });

        }
    })
});
rout.get("/", (req, res) => {
    res.render('index.ejs');

})
rout.post('/', (req, res) => {
    var user = new USER({
        firstName: req.body.firs,
        age: req.body.age,
        dep: req.body.dep,
        sta: req.body.sta,
        mat: req.body.mat


    })
    user.save((err, ok) => {
        if (err)
            console.log('it is err');
        else {
            console.log(ok);
            res.redirect('/student/table');
        }

    });

})
module.exports = rout;