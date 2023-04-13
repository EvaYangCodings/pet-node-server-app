import likesModel from "./likes-model.js";

export const userLikesDetail = async (userId, detailId) => {
    return likesModel.create({userId, detailId});
}

// find all details liked by a user
export const findLikesByUserId = async (userId) => {
    return likesModel.find({userId});
}
