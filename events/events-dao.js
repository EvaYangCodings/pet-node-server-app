import eventsModel from './events-model.js';

export const findEvent = () => eventsModel.find();
export const createEvent = (tuit) => eventsModel.create(tuit);
export const deleteEvent = (tid) => eventsModel.deleteOne({_id: tid});
export const updateEvent = (tid, tuit) => eventsModel.updateOne({_id: tid}, {$set: tuit})