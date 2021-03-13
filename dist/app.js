"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const app = express_1.default();
app.set('port', process.env.PORT || 5555);
//Middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.json());
//Routes
app.use('/api', index_routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
