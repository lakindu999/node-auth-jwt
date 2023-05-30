const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


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
 
//fire a fucntion before doc save to DB
userSchema.pre('save', async function (next){
   const salt =  await bcrypt.genSalt();
   this.password = await bcrypt.hash(this.password, salt);
    next();
}); 

const User = mongoose.model('user',userSchema);

module.exports = User;