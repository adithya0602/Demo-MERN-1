require("dotenv").config()
const express = require('express');
const router = require('./router/auth-router');
const connectDb = require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware");


const app = express();
app.use(express.json());
app.use('/api/auth',router);
app.use(errorMiddleware);

connectDb().then(()=>{
app.listen(4000,()=>{
    console.log("listening to the port 4000....");
});
});