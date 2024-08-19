const express = require('express');
const router = express.Router();

const { register, login, forgotPassword } = require('../controllers/auth');
const authenticateUser = require('../middleware/authentication')

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/forgot').post(forgotPassword);
router.route('/document').get(authenticateUser, (req, res) => {
    res.send(`Hello, ${req.user.name}! Welcome to your dashboard.`);
})

module.exports = router;
