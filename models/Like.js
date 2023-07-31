const { Schema, model } = require('mongoose');

const likeSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User' },
    post: { type: Schema.ObjectId, ref: 'Post' },
    created_at: { type: Date, default: Date.now },
});


module.exports = model('Like', likeSchema);