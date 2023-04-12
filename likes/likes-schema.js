import mongoose from "mongoose";
const likesSchema = new mongoose.Schema(
    {
        userId: String,
        detailId: String
    }, {collection: "likes"}
);

export default likesSchema;