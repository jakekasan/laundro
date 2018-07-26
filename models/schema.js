const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectID;

const ItemOfClothing = new Schema({
    id: ObjectID,
    name: String,
    description: String,
    color: String,
    dataAdded: Date,
    tags: [String]
});

module.exports = ItemOfClothing;