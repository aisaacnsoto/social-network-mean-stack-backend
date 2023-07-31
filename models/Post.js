const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    author: { type: Schema.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});


module.exports = model('Post', postSchema);