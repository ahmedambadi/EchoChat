const usercontroller = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.post('/users', usercontroller.CreateUser);

module.exports = router;
