"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveEmailToBin = exports.deleteEmail = exports.toggleStarredEmail = exports.getEmails = exports.saveSendEmail = void 0;
const email_js_1 = __importDefault(require("../model/email.js"));
const saveSendEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = yield new email_js_1.default(req.body);
        email.save();
        res.status(200).json("email saved successfully");
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.saveSendEmail = saveSendEmail;
const getEmails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let emails;
        if (req.params.type === 'startted') {
            emails = yield email_js_1.default.find({
                startted: true,
                bin: false
            });
        }
        else if (req.params.type === 'bin') {
            emails = yield email_js_1.default.find({
                bin: true
            });
        }
        else if (req.params.type === 'allmail') {
            emails = yield email_js_1.default.find({});
        }
        else if (req.params.type === 'inbox') {
            emails = [];
        }
        else {
            emails = yield email_js_1.default.find({
                type: req.params.type
            });
        }
        res.status(200).json(emails);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.getEmails = getEmails;
const toggleStarredEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield email_js_1.default.updateOne({
            _id: req.body.id
        }, {
            $set: {
                starred: req.body.value
            }
        });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.toggleStarredEmail = toggleStarredEmail;
const deleteEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield email_js_1.default.deleteMany({ _id: { $in: req.body } });
        res.status(200).json('email deleted successfully');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.deleteEmail = deleteEmail;
const moveEmailToBin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield email_js_1.default.updateMany({
            _id: {
                $in: request.body
            }
        }, {
            $set: {
                bin: true,
                starred: false,
                type: ''
            }
        });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.moveEmailToBin = moveEmailToBin;
