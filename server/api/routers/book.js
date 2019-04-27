const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = 'secret';
const app = express();
const router = express.Router();
const books = require('../models/book');

router.get('/' , (req,res) => {
    books.getAllbooks((err,book) => {
        if (err) {
            res.status(500).json({error: err});
        } else {
            res.status(200).json(book);
        }
    })
});

router.get('/addbook' , (req,res) => {
    const book = {
        isbn: 0, title: req.body.title, author: req.body.author,
        keywords: req.body.keywords, publisher: req.body.publisher
    };
    books.addbook(book,(err,result) => {
        if (err) {
            res.status(500).json({error: err});
        } else {
            res.status(200).json({message: "Book added successfully" ,createdUser : book});
        }
    })
});

module.exports = router;