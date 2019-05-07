const sql = require('../../db');

var Book = (book) => {
    this.isbn = course.isbn;
    this.title = course.title;
    this.author = course.author;
    this.keywords = course.keywords;
    this.publisher = course.publisher;
};

Book.getAllbooks = (result) => {
    sql.query("select * from books", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Book.getsubs = (result) => {
    sql.query("select * from subs", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Book.addsubs = (id,sub, result) => {
    sql.query("insert into subs (`userid`, `sub`) values (?,?)", [id, sub], (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Book.addbook = (book, result) => {
    sql.query("insert into books (`isbn`, `title`, `author`, `keywords`, `publisher`) values (?,?,?,?,?)", [book.isbn, book.title, book.author, book.keywords, book.publisher], (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Book.editbook = (isbn, book, result) => {
    sql.query("UPDATE `books` SET `title`=?,`author`=?,`keywords`=?,`publisher`=? where `isbn`=?", [book.title, book.author, book.keywords, book.publisher, isbn], (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Book.deletebook = (isbn, result) => {
    sql.query("DELETE FROM `books` WHERE isbn = ?", [isbn], (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Book.searche = (key, result) => {
    sql.query("SELECT title FROM books WHERE keywords LIKE ?", '%' + [key] + '%',
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

module.exports = Book;