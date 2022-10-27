const fs = require ("fs/promises");
const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");
const sql = require ("sql");
const _ = require ("lodash");
const dotenv = require("dotenv");


dotenv.config();

const app = express();
app.use(cors());


app.get(" /api/test ", (req,res) =>{
    console.log("Test is successfull"); 
});

app.listen(3000, () => console.log("API Server is running..."));