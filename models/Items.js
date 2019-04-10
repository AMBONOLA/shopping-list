const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const ItemsSchema = new Schema({ //new schema object that takes in an object literal
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Items = mongoose.model('item', ItemsSchema);