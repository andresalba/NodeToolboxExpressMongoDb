const Login = require('../models/Login');

const router = require('express').Router();

// Routes here
router.get('/', async(req, res) => {
    const allLogin = await Login.find()
    res.render("index", {login: allLogin})
});

module.exports = router;