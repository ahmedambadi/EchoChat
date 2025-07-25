const usercontroller = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.post('/register', usercontroller.CreateUser);
router.post('/login', usercontroller.signin);

module.exports = router;
