const bcrypt = require('bcrypt');


module.exports = {
    register: async (req, res, next) => {
        
        const db = req.app.get('db');
        const {userName, firstName, lastName, email, password, confirmPW} = req.body;

        
        if(password !== confirmPW) {
            res.sendStatus(500);
        }

        await db.CHECK_USER([email.toLowerCase()]).then((users)=> {
            if(users.length !== 0) {
                res.sendStatus(400);
            } else {
                
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(confirmPW, salt);

                db.CREATE_USER([userName.toLowerCase(), firstName.toLowerCase(), lastName.toLowerCase(), email.toLowerCase(), hash]).then((result) => {
                    res.sendStatus(200);
                    next();
                }).catch((err) => {
                    console.log(`Server error while attempting to create a new user: ${err}`);
                    res.sendStatus(500);
                })
            }
        }).catch((err) => {
            console.log(`Error while attempting to check user: ${err}`)
        })
    },

    login: (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;

        db.CHECK_USER([email.toLowerCase()]).then((user) => {
            if(user.length === 0) {
                res.sendStatus(400);
            } else {
                const email = user[0].email;
                const userPW = user[0].password;

                const confirmedPW = bcrypt.compareSync(password, userPW);

                if(confirmedPW) {
                    // TODO:
                    res.sendStatus(200);
                    console.log('ok')
                }
            }
        }).catch((err) => {
            console.log(`Error while attemptint to login: ${err}`)
            res.sendStatus(500);
        })
    }
}