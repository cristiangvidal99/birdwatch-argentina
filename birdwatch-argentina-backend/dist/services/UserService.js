"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
const models_1 = require("../models");
async function getAllUsers() {
    return models_1.User.findAll({ order: [['id', 'ASC']] });
}
async function getUserById(id) {
    const user = await models_1.User.findByPk(id);
    if (!user) {
        const error = new Error('Usuario no encontrado');
        error.status = 404;
        throw error;
    }
    return user;
}
//# sourceMappingURL=UserService.js.map