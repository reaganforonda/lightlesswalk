// Required

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive=require('massive');
const dotenv = require('dotenv');
const app = express();
const authController = require('./controllers/authController');

dotenv.config();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;


massive(CONNECTION_STRING).then((dbInstance) =>  {
    app.set('db', dbInstance);
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

// AUTH ENDPOINTS
app.post('/api/auth/register', authController.register);

app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on Port: ${SERVER_PORT}`);
})