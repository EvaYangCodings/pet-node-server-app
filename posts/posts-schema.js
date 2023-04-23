import mongoose from 'mongoose';

const postsSchema = mongoose.Schema({
    userId: String,
    time: String,
    image: String,
    post: String,
    likes: Number,
    liked: Boolean,
    comments: [{
        text: String,
        userId: String,
        userName: String,
        time: String
    }],
}, {collection: 'posts'});
export default postsSchema;