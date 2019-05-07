const express = require('express');
const webpush = require('web-push');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

var cors = require('cors')
app.use(cors());

const publicVapidkey = 'BH1E4EfKoR1kobs_XzW8HenHb3vivMgySwUH1-i77NX_DKgCWYDha1GeDqwVKfobXxqCRpm2ebYNcZNc9zpvkOc';
const privateVapidkey = '0IFSyqAIJMwXqC62K6Zwr-BlXBVu3elRf5cHDhffS4M';

webpush.setVapidDetails('mailto:jafarsal94@gmail.com',
    publicVapidkey, privateVapidkey);

app.use(express.static(path.join(__dirname, "./assets")));
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept, Authorization');

    next();
});

app.use(express.json());
app.use('/api/books', require('./api/routers/book'));
app.use('/api/users', require('./api/routers/user'));

app.use('/', (req, res) => {
    res.status(404).send('Incorrect URLI');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log('Listening to port ' + PORT));
module.exports = app;