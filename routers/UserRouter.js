const express = require('express');
const UserController = require('../controllers/UserController');
const FollowController = require('../controllers/FollowController');

const router = express.Router();

//User
router.post('/login', UserController.login);
router.get('/listar', UserController.listar);
router.get('/listar/:id', UserController.listarPorID);
router.post('/register', UserController.register);
router.put('/actualizar/:id', UserController.actualizar);
router.delete('/eliminar/:id', UserController.eliminar);

//Follow
router.post('/follow', FollowController.follow);
router.post('/unfollow', FollowController.unfollow);
router.get('/:id/following', FollowController.listarFollowing);
router.get('/:id/followers', FollowController.listarFollowers);
router.get('/:follower/follows/:following', FollowController.listarPorID);

module.exports = router;