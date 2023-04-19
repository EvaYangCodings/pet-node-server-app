import mongoose from 'mongoose';

const postsSchema = mongoose.Schema({
    userId: String,
    username: String,
    handle: String,
    avatar: String,
    time: String,
    image: String,
    post: String,
    // location: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    reposts: Number,
    collects: Number,
    collected: Boolean,
    comments: [{
        text: String,
        userId: String,
        userName: String,
        time: String
    }]
}, {collection: 'posts'});
export default postsSchema;