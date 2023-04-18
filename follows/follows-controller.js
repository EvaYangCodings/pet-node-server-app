import * as followsDao from "./follows-dao.js";
import {findFollowsByFollowerAndFollowed} from "./follows-dao.js";

const FollowsController = (app) => {
    const userFollowsUser = async (req, res) => {
        const follower = req.params.follower;
        const followed = req.params.followed;
        // Comment out this check, as we already checked in front end, only when not followed, we will call this
        // let follow = await followsDao.findFollowsByFollowerAndFollowed(follower, followed)
        // if (follow) {
        //     res.sendStatus(400);
        //     console.log("already followed this user!");
        //     return;
        // }
        const follow = await followsDao.userFollowsUser(follower, followed);
        res.json(follow);
    }

    const checkFollowedOrNot = async (req, res) => {
        const follower = req.params.follower;
        const followed = req.params.followed;
        const follow = await followsDao.findFollowsByFollowerAndFollowed(follower, followed)
        res.json(follow)
    }

    const unfollowUser = async (req, res) => {
        const follower = req.params.follower;
        const followed = req.params.followed;
        const status = await followsDao.unfollowUser(follower, followed);
        res.json(status);
    }

    const findFollowsByFollowedId = async (req, res) => {
        const followed = req.params.followed;
        const follows = await followsDao.findFollowsByFollowedId(followed);
        res.json(follows);
    }

    const findFollowsByFollowerId = async (req, res) => {
        const follower = req.params.follower;
        const follows = await followsDao.findFollowsByFollowerId(follower);
        res.json(follows);
    }

    app.post("/api/users/:follower/follows/:followed", userFollowsUser)
    app.delete("/api/users/:follower/follows/:followed", unfollowUser)
    app.get("/api/users/:followed/followers", findFollowsByFollowedId)
    app.get("/api/users/:follower/followees", findFollowsByFollowerId)
    app.get("/api/users/check/:follower/:followed", checkFollowedOrNot)
}

export default FollowsController;