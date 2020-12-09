const Libro = require("../models/librosModel");



module.exports = {
    getLibro: async function(req, res) {
        const libroList = await Libro.find()

        res.json(libroList);
    },

    addLibro: async function(req, res) {

        const libroToAdd = new Libro();

        libroToAdd.titulo = req.body.titulo;
        libroToAdd.autor = req.body.autor;

        await libroToAdd.save();
        res.send("libro añadido");

    },

    updateLibro: async function(req, res) {

        const update = await Libro.findByIdAndUpdate({ _id: req.body.id }, { titulo: req.body.titulo, autor: req.body.autor });


        res.json({
            message: 'Libro actualizado',
            info: update
        });


    },

    deleteLibro: async function(req, res) {
        try {
            const deleteLibro = await Libro.findByIdAndDelete({
                    _id: req.body.id,
                }

            );

            res.json({
                message: 'Libro eliminado',
                info: deleteLibro
            });

        } catch (error) {
            res.send(error);
        }
    },

};