import * as likesDao from "./likes-dao.js";

const LikesController = (app) => {
    const userLikesDetail = async(req, res) => {
        const userId = req.params.uid;
        const detailId = req.params.id;
        const like = await likesDao.userLikesDetail(userId, detailId);
        res.json(like)
    }
    const findLikesByUserId = async (req, res) => {
        const userId = req.params.uid;
        const likes = await likesDao.findLikesByUserId(userId);
        res.json(likes);
    }
    app.post("/api/users/:uid/likes/details/:did", userLikesDetail);
    app.get("/api/users/:uid/likes", findLikesByUserId);
}



export default LikesController;