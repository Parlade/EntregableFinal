const express = require("express");
const autoresController = require("../controllers/autoresController");

const router = express.Router();

router.get("/show", autoresController.getAutor);
router.post("/add", autoresController.addAutor);
router.put("/update", autoresController.updateAutor);
router.delete("/delete", autoresController.deleteAutor);

module.exports = router;