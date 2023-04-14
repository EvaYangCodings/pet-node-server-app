import * as dislikesDao from "./dislikes-dao.js";
import {findDislikedOrNotByUser} from "./dislikes-dao.js";

const DislikesController = (app) => {
    const userDislikesDetail = async(req, res) => {
        const userId = req.params.uid;
        const detailId = req.params.did;
        const foundDislikes = await likesDao.findDislikedOrNotByUser(userId, detailId);
        console.log("foundDislikes is:", foundDislikes);
        // console.log("detailId got in likes-controller:", detailId);
        if (foundDislikes.length > 0) {
            console.log("already liked");
        } else {
            const disLike = await dislikesDao.userDislikesDetail(userId, detailId);
            res.json(disLike)
        }
    }
    const findDislikesByUserId = async (req, res) => {
        const userId = req.params.uid;
        const dislikes = await dislikesDao.findDislikesByUserId(userId);
        res.json(dislikes);
    }

    const findDislikedOrNotByUser =  async (req, res) => {
        const userId = req.params.uid;
        const detailId = req.params.did;
        const disliked = await dislikesDao.findDislikedOrNotByUser(userId, detailId);
        res.json(disliked)

    }
    app.post("/api/users/:uid/dislikes/details/:did", userDislikesDetail);
    app.get("/api/users/:uid/dislikes", findDislikesByUserId);
    app.get("/api/users/:uid/dislikes/details/check/:did", findDislikedOrNotByUser);
}

export default DislikesController;