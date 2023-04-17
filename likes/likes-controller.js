import * as likesDao from "./likes-dao.js";
import {findLikedOrNotByUser} from "./likes-dao.js";
const LikesController = (app) => {
    const userLikesDetail = async(req, res) => {
        console.log("userLikesDetail got called");
        const userId = req.params.uid;
        const detailId = req.params.did;
        const foundLikes = await likesDao.findLikedOrNotByUser(userId, detailId);
        console.log("foundLikes is:", foundLikes);
        // console.log("detailId got in likes-controller:", detailId);
        if (foundLikes.length > 0) {
            console.log("already liked");
        } else {
            const like = await likesDao.userLikesDetail(userId, detailId);
            res.json(like)
        }
    }
    const findLikesByUserId = async (req, res) => {
        const userId = req.params.uid;
        const likes = await likesDao.findLikesByUserId(userId);
        res.json(likes);
    }

    const findLikedOrNotByUser =  async (req, res) => {
        const userId = req.params.uid;
        const detailId = req.params.did;
        const liked = await likesDao.findLikedOrNotByUser(userId, detailId);
        res.json(liked)
    }

    const userRevertLikesDetail = async(req, res) => {
        const userId = req.params.uid;
        const detailId = req.params.did;
        const foundLikes = await likesDao.findLikedOrNotByUser(userId, detailId);
        console.log("foundLikes is:", foundLikes);
        if (foundLikes.length > 0) {
            console.log("found liked");
            const likes = await likesDao.userRevertLikesDetail(userId, detailId);
            res.json(likes)
        } else {
            console.log("Not liked yet!")
        }
    }
    app.post("/api/users/:uid/likes/details/:did", userLikesDetail);
    app.get("/api/users/:uid/likes", findLikesByUserId);
    app.get("/api/users/:uid/likes/details/check/:did", findLikedOrNotByUser);
    app.delete("/api/users/:uid/likes/details/:did", userRevertLikesDetail);
}

export default LikesController;