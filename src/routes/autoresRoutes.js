import AutoresController from "../controllers/autoresController.js";
import express from "express";

const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/:id", AutoresController.listarAutoresPorId)
    .post("/autores", AutoresController.cadastrarAutor)
    .put("/autores/:id", AutoresController.atualizarAutor)
    .delete("/autores/:id", AutoresController.excluirAutor)
    


export default router;