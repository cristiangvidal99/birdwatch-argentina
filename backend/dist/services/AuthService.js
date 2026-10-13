"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.generateToken = generateToken;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../models");
const jwt_1 = require("../utils/jwt");
async function register({ name, email, password }) {
    if (!name || !email || !password) {
        const error = new Error('name, email y password son obligatorios');
        error.status = 400;
        throw error;
    }
    if (password.length < 6) {
        const error = new Error('La contrasena debe tener al menos 6 caracteres');
        error.status = 400;
        throw error;
    }
    const existingUser = await models_1.User.findOne({ where: { email } });
    if (existingUser) {
        const error = new Error('El email ya esta registrado');
        error.status = 409;
        throw error;
    }
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const user = await models_1.User.create({
        name,
        email,
        password: hashedPassword,
    });
    const token = generateToken(user);
    return { user, token };
}
async function login({ email, password }) {
    if (!email || !password) {
        const error = new Error('email y password son obligatorios');
        error.status = 400;
        throw error;
    }
    const user = await models_1.User.scope('withPassword').findOne({ where: { email } });
    if (!user) {
        const error = new Error('Credenciales invalidas');
        error.status = 401;
        throw error;
    }
    const isValidPassword = await bcryptjs_1.default.compare(password, user.password);
    if (!isValidPassword) {
        const error = new Error('Credenciales invalidas');
        error.status = 401;
        throw error;
    }
    const token = generateToken(user);
    return { user: user.toJSON(), token };
}
function generateToken(user) {
    return (0, jwt_1.signToken)({
        userId: user.id,
        email: user.email,
    });
}
//# sourceMappingURL=AuthService.js.map