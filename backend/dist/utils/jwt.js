"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = signToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../config/env"));
function signToken(payload) {
    const options = {
        expiresIn: env_1.default.jwt.expiresIn,
    };
    return jsonwebtoken_1.default.sign(payload, env_1.default.jwt.secret, options);
}
function verifyToken(token) {
    const decoded = jsonwebtoken_1.default.verify(token, env_1.default.jwt.secret);
    if (typeof decoded === 'string' || typeof decoded.userId !== 'number' || typeof decoded.email !== 'string') {
        throw new Error('Token invalido');
    }
    return decoded;
}
//# sourceMappingURL=jwt.js.map