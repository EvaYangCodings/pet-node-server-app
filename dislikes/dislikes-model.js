import mongoose from "mongoose";
import dislikesSchema from "./dislikes-schema.js";

const dislikesModel = mongoose.model("dislikes", dislikesSchema);

export default dislikesModel;