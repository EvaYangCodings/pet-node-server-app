import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, required: true, default: "Personal User", enum: ["Personal User", "Service Provider", "Admin"] },
}, {collection : 'users'});

export default usersSchema;