const fs = require ("fs/promises");
const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");
const sql = require ("sql");
const _ = require ("lodash");

const app = express();

app.get(" / ", (req,res) =>{

});

app.listen(3000, () => console.log("API Server is running..."));