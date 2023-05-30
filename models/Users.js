const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({

    email:{
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true, 
        validate:[isEmail, 'Please eneter a valid email']
    },
    password:{
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6 , 'minimum password length is 6 characters']
    },
    
});

const User = mongoose.model('user',userSchema);

module.exports = User;