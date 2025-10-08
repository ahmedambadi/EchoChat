const mongoose = require('mongoose');
const schema = mongoose.schema; 
const userSchema = new schema({
    
    ID: {type: Number, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},

});

const User = mongoose.model('User', userSchema);
module.exports = User;