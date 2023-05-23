import express  from "express";
import cors from 'cors';
import bodyParser from "body-parser";

// import Connection from "./database/db.js";
import Routes from './routes/route.js';
import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const DB_CONN = process.env.DB.replace('<password>',process.env.DB_PASSWORD);

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use('/',Routes);

const PORT = 8000;

// Connection();

mongoose.connect(DB_CONN, { useNewUrlParser: true }).then( () => {
    console.log("Connection Successful")
    app.listen(PORT, () => console.log(`You server is running succesfully on PORT ${PORT}`))
}).catch((error) => { console.log("Connection Unsuccessful") });