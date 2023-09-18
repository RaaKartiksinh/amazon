const express = require("express")
const cookieParser = require('cookie-parser');
const app = express()
const Connectdb = require('./dbconnection.js')
const productRouter = require("./Product/ProductRout.js")
const cors = require('cors')
const userRouter = require("./User/UserRout.js")
require('dotenv').config();

app.use(express.json());
Connectdb();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    // withCredentials: true,
}));
app.use(cookieParser());

// Routs 
app.use('/product', productRouter);
app.use('/user', userRouter);

app.get("/", (req, res) => {
    return res.status(200).send({ Message: "Success" });
});



const port = 5000
app.listen(5000, (req, res) => {
    console.log(` Server started \n       http://localhost:${port}`)
});