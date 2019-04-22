const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = 'secret';
const app = express();
const router = express.Router();

router.post('/signup', (req, res) => {

});

router.post('/login', (req, res) => {
 
});
    

module.exports = router;