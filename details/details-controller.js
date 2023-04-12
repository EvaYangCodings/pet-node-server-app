import * as dao from "./details-dao.js";

const DetailsController = (app) => {
    const createDetail = async(req, res) => {
        const detail = req.body;
        const newDetail = await dao.createDetail(detail);
        res.json(newDetail);
    }
    app.post("/api/details", createDetail);
}

export default DetailsController;

