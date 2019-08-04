const bcrypt = require('bcrypt');


module.exports = {
    register: async (req, res, next) => {
        console.log('hit');
        const db = req.app.get('db');
        const {userName, firstName, lastName, email, pw, confirmPW} = req.body;

        db.CHECK_USER([email.toLowerCase()]).then((users)=> {
            if(users.length !== 0) {
                if(users[0].email === email.toLowerCase()) {
                    res.status(400).send("Please Login");
                } else {
                    res.sendStatus(401);
                }
            } else {
                if(pw !== confirmPW) {
                    res.sendStatus(400);
                }
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(confirmPW, salt);

                db.CREATE_USER([userName.toLowerCase(), firstName.toLowerCase(), lastName.toLowerCase(), email.toLowerCase(), hash]).then((result) => {
                    res.sendStatus(200);
                }).catch((err) => {
                    console.log(`Server error while attempting to create a new user: ${err}`);
                    res.sendStatus(500);
                })
            }
        })
    }
}