import mongoose from "mongoose";
import detailSchema from "./details-schema.js";

const detailsModel = mongoose.model("details", detailSchema);

export default detailsModel;