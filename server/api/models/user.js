const sql = require('../../db');


var User = (user) => {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
}   

User.getAllUsers = (result) => { 

};

User.getUserById = (userId, result) => { 

};

User.createUser = (newUser, result) => {
    sql.query("insert into users (email, password, firstName, lastName) values(?, ?, ?, ?)", 
    [newUser.email, newUser.password, newUser.firstName, newUser.lastName], (err, res) => {
        
        if(err){
            console.log(err);
            result(err, null);
        }else {
            result(null, res);
        }
    });
};

User.getUserByEmail = (email, result) => { 
    sql.query("select * from users where email = ?", email, (err, res) => {
        if(err){
            result(err, null);
        }else {
            result(null, res);
        }
    })
};


module.exports = User;