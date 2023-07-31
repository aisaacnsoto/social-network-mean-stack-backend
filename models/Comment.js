const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    author: { type: Schema.ObjectId, ref: 'User' },
    post: { type: Schema.ObjectId, ref: 'Post' },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});


module.exports = model('Comment', commentSchema);