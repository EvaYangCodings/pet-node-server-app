import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {
        type: String,
        required: true,
        default: "Personal User",
        enum: ["Personal User", "Service Provider", "Admin"]
    },
    avatar: {type: String},
    banner: {type: String},
    bio: {type: String},
    birthdate: {type: String},
    joinedDate: {type: String},
    location: {type: String},
}, {collection: 'users'});

usersSchema.pre("save", function (next) {
    this.userName = `${this.firstName} ${this.lastName}`;
    next();
});

export default usersSchema;
