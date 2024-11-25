const express = require('express');
const router = express.Router();
const professoresController = require('../controllers/professoresController');

// GET: Listar todos os professores
router.get('/', professoresController.getProfessores);

// POST: Criar um novo professor
router.post('/', professoresController.criarProfessor);

// PUT: Atualizar um professor
router.put('/:id', professoresController.atualizarProfessor);

// DELETE: Deletar um professor
router.delete('/:id', professoresController.deletarProfessor);

module.exports = router;
