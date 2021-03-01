const express = require('express');
const cors = require('cors');
const mongoose= require('mongoose');
require('dotenv').config();

const app = express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const connectDB = require('./db.js');
connectDB();
require('colors');

const exerciseRouter = require('./routes/exercises');
const userRouter= require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
