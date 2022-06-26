"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'autores', required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number }
});
const users = mongoose_1.default.model('users', userSchema);
exports.default = users;
