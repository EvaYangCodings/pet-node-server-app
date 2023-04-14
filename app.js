import express from "express"
import cors from "cors"
import UsersController from "./users/users-controller.js";
import EventController from "./events/tuits-controller.js";


import DetailsController from "./details/details-controller.js";
import LikesController from "./likes/likes-controller.js";
import mongoose from "mongoose";
import PostsController from "./posts/posts-controller.js";
import session from "express-session";
mongoose.connect('mongodb+srv://dogLand:dogLand@cluster1.8uzug5v.mongodb.net/dogLand?retryWrites=true&w=majority');

const app = express()

app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.use(express.json())
UsersController(app)
DetailsController(app)
LikesController(app)
PostsController(app)
EventController(app)

app.listen(process.env.PORT || 4000);