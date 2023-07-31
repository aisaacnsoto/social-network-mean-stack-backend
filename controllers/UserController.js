const UsersModel = require('../models/User');
const bcrypt = require("bcrypt");

const jwt = require("../services/jwt");

const register = async (req, res) => {
    try {
        let params = req.body;
        params.password = await bcrypt.hash(params.password, 10);

        let producto = await UsersModel.create(params);

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {
    try {
        let params = req.body;
        let user = await UsersModel.findOne({email: params.email});

        if (!user) {
            res.send({status:'error', message: 'Usuario no existe'});
        }

        let pwd = bcrypt.compareSync(params.password, user.password);

        if (!pwd) {
            res.send({status: 'error', message: 'No te has identificado correctamente.'});
        }

        //devolver token
        const token = jwt.createToken(user);
        res.send({status: 'success', token, user: {_id: user._id, name: user.name, surname: user.surname}});

    } catch (error) {
        
    }
}

const actualizar = async (req, res) => {
    try {
        let id = req.params.id;
        let params = req.body;
        let producto = await UsersModel.findByIdAndUpdate(id, params, {new: true});

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const eliminar = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await UsersModel.findByIdAndDelete(id, {new: true});

        res.send(producto);
    } catch (error) {
        console.log(error);
    }
};

const listar = async (req, res) => {
    try {
        let productos = await UsersModel.find();

        res.send(productos);
    } catch (error) {
        console.log(error);
    }
};

const listarPorID = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await UsersModel.findById(id);

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
    login
};