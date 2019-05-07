const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyparser = require('body-parser');
const webpush = require('web-push');
const app = express();
const router = express.Router();
const books = require('../models/book');

router.get('/', (req, res) => {
    books.getAllbooks((err, book) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(book);
        }
    })
});

router.post('/addbook', (req, res) => {
    const book = {
        isbn: 0,
        title: req.body.title,
        author: req.body.author,
        keywords: req.body.keywords,
        publisher: req.body.publisher
    };
    books.addbook(book, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ message: "Book added successfully", CreatedBook: book });
            //--------------------
            const payload = JSON.stringify({
                title: 'Book ' + book.title,
                body: 'Book  ' + book.author,
                icon: path.join(__dirname, 'img.png')
            });

            books.getsubs((err, subscribtions) => {
                if (err) {
                    res.status(500).json({ error: err });
                } else {
                    res.status(200).json(subscribtions);
                    subscribtions.forEach(sub => {
                        webpush.sendNotification(sub['sub'], payload).catch(err => console.error(err));
                    });
                }
            })
        }
    })

});

router.post('/editbook/:id', (req, res) => {
    const book = {
        isbn: 0,
        title: req.body.title,
        author: req.body.author,
        keywords: req.body.keywords,
        publisher: req.body.publisher
    };
    books.editbook(req.params.id, book, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ message: "Edit book successfully", EditedBook: book });
        }
    })
});

router.get('/deletebook/:id', (req, res) => {
    books.deletebook(req.params.id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ message: "Book deleted successfully" });
        }
    })
});

router.get('/:key', (req, res) => {
    books.searche(req.params.key, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    })
});

app.post('/subscribe/:id', (req, res) => {
    const subscription = req.body;
    const id = req.param.id
    books.addsubs(id, subscription, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ message: "sub added successfully" });
        }
    })
});


module.exports = router;