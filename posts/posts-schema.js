import mongoose from 'mongoose';

const schema = mongoose.Schema({
    username: String,
    handle: String,
    avatar: String,
    time: String,
    image: String,
    post: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    reposts: Number,
    collects: Number,
    collected: Boolean
}, {collection: 'posts'});
export default schema;