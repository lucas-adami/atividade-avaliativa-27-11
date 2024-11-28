const express = require("express");
const {
  getTodasAsTarefas,
  getTarefaById,
  createTarefa,
  atualizaTarefa,
  deleteTarefa,
} = require("../controllers/controllers");

const router = express.Router();

// Rotas do CRUD
router.get("/", getTodasAsTarefas);
router.get("/:id", getTarefaById);
router.post("/", createTarefa);
router.put("/:id", atualizaTarefa);
router.delete("/:id", deleteTarefa);

module.exports = router;
