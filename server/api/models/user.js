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

};

User.getUserByEmail = (email, result) => { 

};

module.exports = User;