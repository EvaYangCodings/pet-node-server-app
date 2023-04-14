import dislikesModel from "./dislikes-model.js";

export const userDislikesDetail = async (userId, detailId) => {
    return dislikesModel.create({userId, detailId});
}

// find all details liked by a user
export const findDislikesByUserId = async (userId) => {
    return dislikesModel.find({userId});
}

// find whether an detail is liked by a user
export const findDislikedOrNotByUser = async (userId, detailId) => {
    return dislikesModel.find({userId: userId, detailId: detailId});
}
