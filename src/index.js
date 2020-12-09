require('dotenv').config();
const mongoose = require("mongoose");


mongoose.connect(`mongodb+srv://Saturno:${process.env.MATLASPASS}@cluster0.nylnc.mongodb.net/EntregableNodeMongo?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }

);

const cors = require("cors")

// console.log(process.env.MATLASPASS);

const express = require("express");

const autoresRouter = require("./routes/autoresRouter");
const librosRouter = require("./routes/librosRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/autores", autoresRouter);
app.use("/libros", librosRouter);


app.get("/", (req, res) => {
    res.status(200).send("<h2>Estas accediendo a una ruta incompleta</h2>");

});

app.listen(process.env.PORT, () => console.log("Aplicacion funcionando en el puerto 3005"));