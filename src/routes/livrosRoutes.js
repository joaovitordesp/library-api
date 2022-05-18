import LivrosController from "../controllers/livrosController.js";
import express from "express";

const router = express.Router();

router
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/busca", LivrosController.listarLivrosPorEditora)
    .get("/livros/:id", LivrosController.listarLivrosPorId)
    .post("/livros", LivrosController.cadastrarLivro)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id", LivrosController.excluirLivro)
    


export default router;