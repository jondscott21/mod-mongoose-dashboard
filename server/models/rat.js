const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let RatSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'Please give the rat a name']

    },
    age: {
        type: Number,
        min: [1, 'make a rat that is already born'],
        max: [20, 'That rat is already dead from old age'],
        required: [true, 'A rat needs an age'],
    },
    fur: {
        type: String,
        required: [true, 'Please select a color for your rat']
    }
});
mongoose.model('Rat', RatSchema); // We are setting this Schema in our Models as 'Rat'
let Rat = mongoose.model('Rat'); // We are retrieving this Schema from our Models, named 'Rat'