const Autor = require("../models/autoresModel");



module.exports = {
    getAutor: async function(req, res) {
        const autoresList = await Autor.find()

        res.json(autoresList);
    },

    addAutor: async function(req, res) {


        const autoresToAdd = new Autor();


        autoresToAdd.nombre = req.body.nombre;
        autoresToAdd.apellidos = req.body.apellidos;
        autoresToAdd.libros = req.body.libros

        await autoresToAdd.save();
        res.send("Autor añadido");

    },

    updateAutor: async function(req, res) {

        const update = await Autor.findByIdAndUpdate({ _id: req.body.id }, { nombre: req.body.nombre, apellidos: req.body.apellidos, libros: req.body.libros });


        res.json({
            message: 'Autor actualizado',
            info: update
        });


    },

    deleteAutor: async function(req, res) {
        try {
            const deleteAutor = await Autor.findByIdAndDelete({
                    _id: req.body.id,
                }

            );

            res.json({
                message: 'Autor eliminado',
                info: deleteAutor
            });

        } catch (error) {
            res.send(error);
        }
    },

};