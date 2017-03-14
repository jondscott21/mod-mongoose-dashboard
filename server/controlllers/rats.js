const mongoose = require('mongoose');
let Rat = mongoose.model('Rat');
module.exports = {
    show: function (req, res) {
        Rat.find({}, function (err, rats) {
            if (!err) {
                console.log('got rats!');
                res.render('index', {rats: rats})

            }
            else {
                console.log("couldn't retrieve rats");
                res.render('index')
            }
        });
    },
    showOne: function (req, res) {
        Rat.findOne({_id: req.params.id}, function (err, rats) {
            if (!err){
                console.log('your rat');
                res.render('rats', {rats:rats})
            }
            else {
                console.log('no rats');

                res.render('rats',{rats: false});
            }
        });
    },
    findRatToUpdate: function(req, res){
        let rats = Rat.findOne({_id: req.params.id}, function (err, rats) {
            if (!err) {
                console.log('update a rat');
                res.render('update_rat', {rats: rats});
            }
            else {
                res.render('update_rat')
            }
        });
    },
    addRat: function (req, res) {
        console.log("POST DATA", req.body);
        let rat = new Rat({name: req.body.name, age: req.body.age, fur: req.body.fur});
        rat.save(function (err) {
            if (err) {
                console.log('Something went wrong');
                res.render('make_rat', {errors: rat.errors});
            }
            else {
                console.log('Added a rat!');
                res.redirect('/');
            }
        });
    },
    updateRat: function (req, res) {
        Rat.update({}, {name:req.body.name, age:req.body.age, fur:req.body.fur}, {runValidators: true},function (err, rats) {
            if (!err){
                console.log('rat updated');
                res.redirect('/');
            }
            else {
                console.log('rat not updated');
                console.log(Rat.errors);
                res.render('update_rat', {errors: rat.errors, rats: false});
            }
        });
    },
    destroyRat: function (req, res) {
        console.log('got to delete');
        Rat.remove({_id: req.params.id}, function (err, rats) {
            if (!err){
                console.log('deleted a rat');
                res.redirect('/');
            }
            else {
                console.log('rat stayed alive');
                res.redirect('/')
            }
        });
    }
};