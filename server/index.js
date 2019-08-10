const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive=require('massive');
const dotenv = require('dotenv');
const app = express();
const authController = require('./controllers/authController');
const session = require('express-session');
const middlewares = require('./middlewares/middlewares');

dotenv.config();

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET_SESSION
} = process.env;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));


massive(CONNECTION_STRING).then((dbInstance) =>  {
    app.set('db', dbInstance);
});

app.use(
    session({
        secret: SECRET_SESSION,
        resave: false,
        saveUninitialized: true
    })
)


// AUTH ENDPOINTS
app.post('/api/auth/register', authController.register);
app.post('/api/auth/login', authController.login);

app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on Port: ${SERVER_PORT}`);
})