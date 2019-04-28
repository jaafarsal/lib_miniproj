const express = require('express');
const app = express();

var cors = require('cors')
app.use(cors());


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