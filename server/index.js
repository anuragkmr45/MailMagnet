import express from "express";
import cors from "cors";
import routes from "./routes/route.js";
import Connection from "./database/db.js"

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes)


const PORT = process.env.PORT;

Connection();

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
});