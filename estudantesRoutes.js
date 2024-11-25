const express = require('express');
const router = express.Router();
const estudantesController = require('../controllers/estudantesController');

// GET: Listar todos os estudantes
router.get('/', estudantesController.getEstudantes);

// POST: Criar um novo estudante
router.post('/', estudantesController.criarEstudante);

// PUT: Atualizar um estudante
router.put('/:id', estudantesController.atualizarEstudante);

// DELETE: Deletar um estudante
router.delete('/:id', estudantesController.deletarEstudante);

module.exports = router;
