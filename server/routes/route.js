"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const email_controller_js_1 = require("../controller/email-controller.js");
const routes = express_1.default.Router();
routes.post('/save', email_controller_js_1.saveSendEmail);
routes.post('/save-draft', email_controller_js_1.saveSendEmail);
routes.post('/starred', email_controller_js_1.toggleStarredEmail);
routes.post('/bin', email_controller_js_1.moveEmailToBin);
routes.get('/emails/:type', email_controller_js_1.getEmails);
routes.delete('/delete', email_controller_js_1.deleteEmail);
exports.default = routes;
