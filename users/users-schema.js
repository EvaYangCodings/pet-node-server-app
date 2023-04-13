import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, required: true, default: "Personal User", enum: ["Personal User", "Service Provider", "Admin"] },
}, {collection : 'users'});

usersSchema.pre("save", function(next) {
    this.userName = `${this.firstName} ${this.lastName}`;
    next();
});

export default usersSchema;
