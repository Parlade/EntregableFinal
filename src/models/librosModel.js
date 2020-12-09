const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LibroSchema = new Schema({


    titulo: String,
    autor: String,


});




module.exports = mongoose.model("Libro", LibroSchema);