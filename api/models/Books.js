const mongoose = require('mongoose');

//A single document book schema which contains all the details
const BookSchema = mongoose.Schema({
    BookName : {
        type : String,
        required : true,
        min:4,
        max:128
    },
    AuthorName : {
        type : String,
        required : true,
        min : 3,
        max : 32
    },
    PublishedYear : {
        type: Number,
        min:1000,
        max:2050
    },
    Price : {
        type : Number,
        required : true
    },
    Discount : {
        type : Number,
        min : 0,
        max : 100,
        default : 0
    },
    Quantity : {
        type : Number,
        default : 0
    },
    NumberOfPages : {
        type : Number,
        required : true
    },
    BookCondition : {
        type : String,
        required : true
    },
    EntryDate : {
        type : Date,
        default : Date.now()
    }
});

module.exports = mongoose.model('Books',BookSchema)