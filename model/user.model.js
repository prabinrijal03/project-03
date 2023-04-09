const mongoose = require('mongoose');
const db = require('../config/db');
const { buffer } = require('stream/consumers');

const imageSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
    contentType: String
});
const imageModel = db.model('image', imageSchema);
module.exports = imageModel;