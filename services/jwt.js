//importar dependencias
const jwt = require("jwt-simple");
const moment = require("moment");
const dotenv = require('dotenv');
dotenv.config();

//clave secreta
const secret = process.env.JSON_SECRET;

//crear una funcion para generar tokens
const createToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        surname: user.name,
        nick: user.nick,
        email: user.email,
        role: user.role,
        imagen: user.image,
        iat: moment().unix(),
        exp: moment().add(30, "days").unix()
    }

    //devolver jwt token codificado
    return jwt.encode(payload, secret);
}

module.exports = {
    secret,
    createToken
}