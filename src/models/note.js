const mongoose = require("mongoose");

const noteschema = new mongoose.Schema({
    title: String,
    description: String
}, {
    timestamps: true
});

const notes = mongoose.model('Note', noteschema);

module.exports=notes;