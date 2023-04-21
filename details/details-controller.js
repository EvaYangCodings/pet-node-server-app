import * as dao from "./details-dao.js";
import {response} from "express";

const DetailsController = (app) => {
    const createDetail = async (req, res) => {
        const imageId = req.params.iid;
        const foundDetail = await dao.findDetailByImageId(imageId);
        if (foundDetail !== null) {
            console.log("found it in the db!")
        } else {
            const newObj = {
                imageId: imageId
            }
            await dao.createDetail(newObj);
            console.log("Not found it in the db, create a new detail!")
            return response.data;
        }
    }
    app.post("/dogs/search/detail/:iid", createDetail);
}

export default DetailsController;

