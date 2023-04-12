import likesModel from "./likes-model.js";

export const userLikesDetail = async (userId, detailId) => {
    return likesModel.create({userId, detailId});
}
