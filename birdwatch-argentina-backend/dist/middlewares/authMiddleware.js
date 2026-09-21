"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../utils/jwt");
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        const error = new Error('Token de autenticacion requerido');
        error.status = 401;
        return next(error);
    }
    const token = authHeader.slice('Bearer '.length);
    try {
        const decoded = (0, jwt_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        const authError = error;
        authError.status = 401;
        authError.message = 'Token invalido o expirado';
        next(authError);
    }
}
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map