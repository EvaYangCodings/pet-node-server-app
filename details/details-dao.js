import detailsModel from "./details-model.js";

export const createDetail = async (imageId) => {
    const newDetail = detailsModel.create(imageId);
    return newDetail;
}

export const findDetailByImageId = async (imageId) => {
    const detail = await detailsModel.findOne({ imageId });
    console.log("detail in findDetailByImageId is:", detail);
    return detail;
};