"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_js_1 = __importDefault(require("./userRoutes.js"));
const taskRoutes_js_1 = __importDefault(require("./taskRoutes.js"));
const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ name: "REST API - PB React" });
    });
    app.use(express_1.default.json(), userRoutes_js_1.default, taskRoutes_js_1.default);
};
exports.default = routes;
