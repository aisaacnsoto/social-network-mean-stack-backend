const { Schema, model } = require('mongoose');

const followSchema = new Schema({
    follower: { type: Schema.ObjectId, ref: 'User' },
    following: { type: Schema.ObjectId, ref: 'User' },
    created_at: { type: Date, default: Date.now },
});


module.exports = model('Follow', followSchema);