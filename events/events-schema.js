import mongoose from 'mongoose'; 

const eventSchema = mongoose.Schema({
    username: String,
    title: String,
    time: String,
    image: String,
    event: String,
}, {collection: 'events'}
);
export default eventSchema;