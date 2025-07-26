import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDb from "./config/db.js";

dotenv.config();

//database config
connectDb();

const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'));

//rest api
app.get('/', (req,res) => {
    res.send("Hello World.");
})

const PORT = process.env.PORT ;

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});