const express = require('express');
const CommentController = require('../controllers/CommentController');

const router = express.Router();

router.get('/listar', CommentController.listar);
router.get('/listar/:id', CommentController.listarPorID);
router.get('/listar/post/:id', CommentController.listarPorPost);
router.post('/register', CommentController.register);
router.put('/actualizar/:id', CommentController.actualizar);
router.delete('/eliminar/:id', CommentController.eliminar);

module.exports = router;