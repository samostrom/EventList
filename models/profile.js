const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    picture: String,
    name: String,
    bio:  String,
    friends: [{type: Schema.Types.ObjectId, ref:'Profile'}],
    owner: {type: Schema.Types.ObjectId, ref:'User'},
})

module.exports = mongoose.model('Profile', profileSchema)