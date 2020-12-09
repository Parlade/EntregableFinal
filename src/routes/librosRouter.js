const express = require("express");
const librosController = require("../controllers/librosController");

const router = express.Router();

router.get("/show", librosController.getLibro);
router.post("/add", librosController.addLibro);
router.put("/update", librosController.updateLibro);
router.delete("/delete", librosController.deleteLibro);

module.exports = router;