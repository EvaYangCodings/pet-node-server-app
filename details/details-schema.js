import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema({
    imageId: String,
    likes: Number,
    dislikes: Number,
}, {collection: "details"})

export default detailsSchema;