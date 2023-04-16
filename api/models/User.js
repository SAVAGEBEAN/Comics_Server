const mongoose = require('mongoose');

//User model with just username and a password
const UserSchema = mongoose.Schema({
    Username:{
        type : String,
        required : true
    },
    Password : {
        type : 'String',
        required : true
    }
});

module.exports = mongoose.model('User',UserSchema)