const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AutorSchema = new Schema({


    nombre: String,
    apellidos: String,
    libros: String


});




module.exports = mongoose.model("Autor", AutorSchema);