import mongoose from 'mongoose'; 

const schema = mongoose.Schema({
    username: String,
    title: String,
    image: String,
    tuit: String,
}, {collection: 'events'}
);
export default schema;