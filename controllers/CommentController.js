const CommentModel = require('../models/Comment');

const register = async (req, res) => {
    try {
        let params = req.body;
        let producto = await CommentModel.create(params);

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const actualizar = async (req, res) => {
    try {
        let id = req.params.id;
        let params = req.body;
        let producto = await CommentModel.findByIdAndUpdate(id, params, {new: true});

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const eliminar = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await CommentModel.findByIdAndDelete(id, {new: true});

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const listar = async (req, res) => {
    try {
        let productos = await CommentModel.find();

        res.send(productos);
    } catch (error) {
        console.log(error);
    }
};

const listarPorID = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await CommentModel.findById(id);

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const listarPorPost = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await CommentModel.find({post: id}).populate('author', '_id name surname').sort({created_at: 'desc'});

        res.send(producto);
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    register,
    actualizar,
    eliminar,
    listar,
    listarPorID,
    listarPorPost
};