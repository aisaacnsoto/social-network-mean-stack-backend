const PostModel = require('../models/Post');

const register = async (req, res) => {
    try {
        let params = req.body;

        let producto = await PostModel.create(params);

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const actualizar = async (req, res) => {
    try {
        let id = req.params.id;
        let params = req.body;
        let producto = await PostModel.findByIdAndUpdate(id, params, { new: true });

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const eliminar = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await PostModel.findByIdAndDelete(id, { new: true });

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const listar = async (req, res) => {
    try {
        let productos = await PostModel.find().populate('author', '_id name surname').sort({ created_at: 'desc' });
        res.send(productos);
    } catch (error) {
        console.log(error);
    }
};

const listarPorID = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await PostModel.findById(id).populate('author');

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const listarTodoPorAutor = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await PostModel.find({ author: id }).populate('author', '_id name surname').sort({ created_at: 'desc' });

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const buscar = async (req, res) => {
    try {
        let query = req.params.query;
        let result = await PostModel.find({
            $or: [
                { content: { $regex: query, $options: 'i' } },
            ]
        }).populate('author', '_id name surname').sort({ created_at: 'desc' }).exec();

        res.send(result);
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
    listarTodoPorAutor,
    buscar
};