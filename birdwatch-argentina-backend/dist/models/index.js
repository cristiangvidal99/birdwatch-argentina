"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.sequelize = void 0;
const connection_1 = require("../db/connection");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return connection_1.sequelize; } });
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
//# sourceMappingURL=index.js.map