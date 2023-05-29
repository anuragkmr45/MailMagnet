import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const CLUSTERNAME = process.env.DB_CLUSTERNAME
const DBNAME = process.env.DB_NAME;

const Connection = () => {
    const DB_URI = `mongodb+srv://anurag45kmr:mhq9IYY1w1zNNvET@cluster0.2ptoiam.mongodb.net/emails?retryWrites=true&w=majority`;

    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;