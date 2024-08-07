const express = require('express');

const router = express.Router();
const authcontrollers = require('../controllers/auth-controller');
const SignupSchema = require('../validators/auth-validator');
const LoginSchema = require('../validators/auth-loginvalidator')
const validate = require("../middleware/validator-middleware")

router.route('/').get(authcontrollers.home);
router.route('/register').post(validate(SignupSchema),authcontrollers.register);
router.route('/login').post(validate(LoginSchema),authcontrollers.login);
module.exports = router;