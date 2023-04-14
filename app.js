import express from "express"
import cors from "cors"
import UsersController from "./users/users-controller.js";
import EventController from "./events/tuits-controller.js";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://dogLand:dogLand@cluster1.8uzug5v.mongodb.net/dogLand?retryWrites=true&w=majority');

const app = express()
app.use(cors());
app.use(express.json())

UsersController(app)
EventController(app)

app.listen(process.env.PORT || 4000);