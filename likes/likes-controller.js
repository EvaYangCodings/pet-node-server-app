import * as likesDao from "./likes-dao.js";

const LikesController = (app) => {
    const userLikesDetail = async(req, res) => {
        const userId = req.params.uid;
        const detailId = req.params.id;
        const like = await likesDao.userLikesDetail(userId, detailId);
        res.json(like)
    }
    app.post("/api/users/:uid/likes/details/:did", userLikesDetail())
}

export default LikesController;