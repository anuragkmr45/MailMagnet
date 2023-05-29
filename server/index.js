"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_js_1 = __importDefault(require("./routes/route.js"));
const db_js_1 = __importDefault(require("./database/db.js"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/', route_js_1.default);
const PORT = process.env.PORT;
(0, db_js_1.default)();
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
