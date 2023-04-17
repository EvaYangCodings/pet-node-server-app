import followsModel from "./follows-model.js";

export const userFollowsUser = async (follower, followed) => {
    return followsModel.create({follower, followed});
}

export const unfollowUser = async (follower, followed) => {
    return followsModel.deleteOne({follower, followed});
}

export const findFollowsByFollowerAndFollowed = async (follower, followed) => {
    return followsModel.findOne({follower, followed});
}

export const findFollowsByFollowerId = async (follower) => {
    return followsModel.find({follower});
}

export const findFollowsByFollowedId = async (followed) => {
    return followsModel.find({followed});
}

