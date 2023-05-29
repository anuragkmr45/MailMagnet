import express from "express";
import * as cors from 'cors';
import routes from "./routes/route.js";
import Connection from "./database/db.js"

const app: express.Express = express();

app.use(cors.default());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes)

const PORT: string | undefined = process.env.PORT;

Connection();

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
});
