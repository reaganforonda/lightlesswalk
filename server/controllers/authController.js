const bcrypt = require('bcrypt');


module.exports = {
    register: async (req, res, next) => {
        const db = req.app.get('db');
        const {userName, firstName, lastName, userEmail, pw, confirmPW} = req.body;
    }
}