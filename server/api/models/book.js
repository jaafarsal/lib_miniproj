const sql = require('../../db');

var Book = (book) => {
    this.isbn = course.isbn;
    this.title = course.title;
    this.author = course.author;
    this.keywords = course.keywords;
    this.publisher = course.publisher;
};

Book.getAllbooks = (result) => {
    sql.query("select * from books" , (err,res) => {
        if (err) {
            result(err,null);
        } else {
            result(null , res);
        }
    });
};

Book.addbook = (book,result) => {
    sql.query("insert into book (`isbn`, `title`, `author`, `keywords`, `publisher`) values (?,?,?,?,?)",
                [book.isbn,book.title,book.author,book.keywords,book.publisher], (err,res) => {
        if (err) {
            result(err,null);
        } else {
            result(null , res);
        }
    });
};

Book.editbook = (book,result) => {
    sql.query("UPDATE `books` SET `title`=?,`author`=?,`keywords`=?,`publisher`=? where `isbn`=?",
                [book.title,book.author,book.keywords,book.publisher,book.isbn], (err,res) => {
        if (err) {
            result(err,null);
        } else {
            result(null , res);
        }
    });
};

Book.deletebook = (book,result) => {
    sql.query("DELETE FROM `books` WHERE isbn = ?",
                [book.isbn], (err,res) => {
        if (err) {
            result(err,null);
        } else {
            result(null , res);
        }
    });
};

module.exports = Book;