const mongoose = require('mongoose');
let rats = require('../controlllers/rats');
module.exports = function (app) {
    app.get('/', function(req, res) {
        rats.show(req, res)
    });
    app.get('/rats/new', function (req, res) {
        console.log('make a rat');
        res.render('make_rat');
    });
    app.get('/rats/:id', function (req, res) {
        rats.showOne(req, res)
    });
    app.get('/rats/edit/:id', function (req, res) {
        rats.findRatToUpdate(req, res);
    });
    app.post('/add_rat', function(req, res) {
        rats.addRat(req, res);
    });
    app.post('/rats/update/:id', function (req, res) {
        rats.updateRat(req, res);
    });
    app.post('/rats/destroy/:id', function (req, res) {
        rats.destroyRat(req, res);
    });
};