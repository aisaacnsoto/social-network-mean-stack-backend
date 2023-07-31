const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    description: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: String },
});


module.exports = model('User', userSchema);