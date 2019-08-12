const bcrypt = require('bcrypt');
const generalUtil = require('../../src/utilities/genUtil');

module.exports = {
    register: async (req, res, next) => {

        const db = req.app.get('db');
        const {firstName, lastName, email, password, confirmPW} = req.body;
        

        if(!generalUtil.validateEmail(email)) {
            res.sendStatus(400);
        }
        
        if(password !== confirmPW) {
            res.sendStatus(400);
        }

        await db.CHECK_USER([email.toLowerCase()]).then((users)=> {
            if(users.length !== 0) {
                if(users[0].email === email.toLowerCase()){
                    res.sendStatus(400);
                } else {
                    res.sendStatus(401);
                }
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(confirmPW, salt);

                db.CREATE_USER([firstName.toLowerCase(), lastName.toLowerCase(), email.toLowerCase(), hash]).then((result) => {
                    res.sendStatus(200);
                }).catch((err) => {
                    res.sendStatus(500);
                    console.log(`Server error while attempting to create a new user: ${err}`);
                })
            }
        }).catch((err) => {
            res.sendStatus(500);
            console.log(`Error while attempting to check user: ${err}`)
        })
    },

    login: (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;
        console.log('hit');

        db.CHECK_USER([email.toLowerCase()]).then((user) => {
            if(user.length === 0) {
                res.sendStatus(400);
            } else {
                const email = user[0].email;
                const userPW = user[0].password;

                const confirmedPW = bcrypt.compareSync(password, userPW);

                if(confirmedPW) {
                    req.session.user.email = email;
                    res.status(200).send(user[0]);
                }
            }
        }).catch((err) => {
            console.log(`Error while attemptint to login: ${err}`)
            res.sendStatus(500);
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    validate: (req, res) => {
        let user = req.session.user;
        if(req.session.user.user_id) {
            res.status(200).send(user);
        } else {
            res.status(400).send("Unauthorized User")
        }
    }
}