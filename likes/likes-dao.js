import likesModel from "./likes-model.js";

export const userLikesDetail = async (userId, detailId) => {
    return likesModel.create({userId, detailId});
}

// find all details liked by a user
export const findLikesByUserId = async (userId) => {
    return likesModel.find({userId});
}

// find whether an detail is liked by a user
export const findLikedOrNotByUser = async (userId, detailId) => {
    return likesModel.find({userId: userId, detailId: detailId});
}

export const userRevertLikesDetail = async (userId, detailId) => {
    return likesModel.deleteOne({userId, detailId});
}

