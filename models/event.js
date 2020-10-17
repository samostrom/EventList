const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: String,
    date: Date,
    picture: String,
    location: String,
    description: String,
    attending: String,
    host: {type: Schema.Types.ObjectId, ref:'Profile'},
    people: [{type: Schema.Types.ObjectId, ref:'Profile'}]
})

module.exports = mongoose.model('Event', eventSchema)