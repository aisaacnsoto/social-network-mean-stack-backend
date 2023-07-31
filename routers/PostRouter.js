const express = require('express');
const PostController = require('../controllers/PostController');
const LikeController = require('../controllers/LikeController');
const AuthMiddleware = require('../middlewares/auth');

const router = express.Router();

//POSTS
router.get('/listar', PostController.listar);
router.get('/listar/:id', PostController.listarPorID);
router.get('/search/:query', PostController.buscar);
router.get('/listar/autor/:id', PostController.listarTodoPorAutor);
router.post('/register', [AuthMiddleware.auth], PostController.register);
router.put('/actualizar/:id', PostController.actualizar);
router.delete('/eliminar/:id', PostController.eliminar);

//LIKES
router.post('/like', LikeController.like);
router.post('/dislike', LikeController.dislike);
router.get('/isliked/:post/:user', LikeController.isLiked);

module.exports = router;