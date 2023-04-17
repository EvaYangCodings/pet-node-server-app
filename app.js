import express from "express"
import cors from "cors"
import UsersController from "./users/users-controller.js";
import EventController from "./events/tuits-controller.js";
import DetailsController from "./details/details-controller.js";
import LikesController from "./likes/likes-controller.js";
import mongoose from "mongoose";
import PostsController from "./posts/posts-controller.js";
import session from "express-session";
import DislikesController from "./dislikes/dislikes-controller.js";
mongoose.connect('mongodb+srv://dogLand:dogLand@cluster1.8uzug5v.mongodb.net/dogLand?retryWrites=true&w=majority');

const app = express()
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true, // Add this line
        cookie: { secure: false },//locally should be faulse, should be true on aws, heroku or render
    })
);
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000", //this applies to local development, for aws or render js, here should be where the react app is hosted, such as netlify.
    })
);
app.use(express.json())
UsersController(app)
DetailsController(app)
LikesController(app)
DislikesController(app)
PostsController(app)
EventController(app)

app.listen(process.env.PORT || 4000);