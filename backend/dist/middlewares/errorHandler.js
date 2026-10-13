"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
exports.notFoundHandler = notFoundHandler;
const http_errors_1 = __importDefault(require("http-errors"));
function notFoundHandler(req, res, next) {
    next((0, http_errors_1.default)(404));
}
const errorHandler = (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    let status = err.status || 500;
    let message = err.message;
    if (err.name === 'SequelizeValidationError') {
        status = 400;
        message = err.errors?.map((item) => item.message).join(', ') ?? message;
    }
    if (err.name === 'SequelizeUniqueConstraintError') {
        status = 409;
        message = 'El registro ya existe';
    }
    const wantsJson = req.path.startsWith('/auth') ||
        req.path.startsWith('/users') ||
        req.accepts('json') === 'json';
    if (wantsJson) {
        return res.status(status).json({
            error: {
                message,
                status,
            },
        });
    }
    res.status(status);
    res.render('error');
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map