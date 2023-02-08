const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: String,
    location: String,
    likes: Number,
    description: String,
    PostImage : String,
    date: String
})

module.exports = mongoose.model('Post', PostSchema)