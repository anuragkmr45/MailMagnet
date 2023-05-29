"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const CLUSTERNAME = process.env.DB_CLUSTERNAME;
const DBNAME = process.env.DB_NAME;
const Connection = () => {
    const DB_URI = `mongodb+srv://anurag45kmr:mhq9IYY1w1zNNvET@cluster0.2ptoiam.mongodb.net/emails?retryWrites=true&w=majority`;
    try {
        mongoose_1.default.connect(DB_URI, { useNewUrlParser: true });
        mongoose_1.default.set('strictQuery', false);
        console.log('Database connected sucessfully');
    }
    catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
};
exports.default = Connection;
