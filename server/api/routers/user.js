const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = 'secret';
const app = express();
const router = express.Router();

router.post('/signup', (req, res) => {
    // Validate input
    User.getUserByEmail(req.body.email, (err, result) => { // Check if the user is already exists
        if (!result.length == 0) 
            return res.status(409).send({ message: 'Sorry, email already exists' });
            
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) { 
                return res.status(500).json({ error: err }); 
            }
            else { 
                const user = { id: 0, email: req.body.email, password: hash,
                    firstName: req.body.firstName, lastName: req.body.lastName };
                

                User.createUser(user, (err, result) => {
                    if (err) { 
                        res.status(500).json({ error: err }); 
                    }
                    else { 
                        user.id = result;
                    res.status(201).json({ message: 'User created successfully', createdUser: user }); 
                    } 
                });
            }
        });
    });
});

router.post('/login', (req, res) => {
    User.getUserByEmail(req.body.email, (err, user) => {
        if (err) { 
            res.status(500).json({ error: err }); 
        }        
        if (user.length == 0) { 
            return res.status(401).json({ message: 'Auth failed' });
        }        
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) { 
                return res.status(401).json({ message: 'Auth failed' }); 
            }            
            if (result) {                
                const token = jwt.sign( { email: user[0].email, userId: user[0].id }, privateKey, { expiresIn: "1h" });
                return res.status(200).json({ message: 'Auth successful', access_token: token });
            }
            return res.status(401).json({ message: 'Auth failed' });
        });
    });
});
    

module.exports = router;