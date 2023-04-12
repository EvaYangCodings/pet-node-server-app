import detailsModel from "./details-model.js";

export const createDetail = async (detail) => {
    return detailsModel.create(detail);
}