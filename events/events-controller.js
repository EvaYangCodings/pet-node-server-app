import * as tuitsDao from "./events-dao.js";

const createEvent = async(req, res) => {
    const newEvent = req.body;
    const insertedEvent = await tuitsDao.createEvent(newEvent);
    res.json(insertedEvent);
}
const findEvent  = async(req, res) => {
    const event = await tuitsDao.findEvent()
    res.json(event)
}
const updateEvent = async(req, res) => {
    const eventIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateEvent(eventIdToUpdate, updates);
    res.json(status);
}

const deleteEvent = async(req, res) => {
    const eventIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteEvent(eventIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/events', createEvent);
    app.get('/api/events', findEvent);
    app.put('/api/events/:tid', updateEvent);
    app.delete('/api/events/:tid', deleteEvent);
}