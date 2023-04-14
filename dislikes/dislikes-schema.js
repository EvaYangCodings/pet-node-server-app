import mongoose from "mongoose";
const dislikesSchema = new mongoose.Schema(
    {
        userId: String,
        detailId: String
    }, {collection: "dislikes"}
);

export default dislikesSchema;