// Required

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive=require('massive');
const dotenv = require('dotenv');
const app = express();

const {
    SERVEr_PORT,
    CONNECTION_STRING
} = process.env;


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

app.listen(SERVEr_PORT, ()=> {
    console.log(`Creeping on Port: ${SERVEr_PORT}`);
})