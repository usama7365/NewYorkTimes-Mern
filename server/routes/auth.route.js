const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { PostLoginSchema } = require("../controllers/Login.controllers");
const { PostSignupSchema } = require("../controllers/signup.controller");
const resetController = require('../controllers/reset.controllers');



router.post('/login', PostLoginSchema);

router.post('/signup', PostSignupSchema);

module.exports = router;