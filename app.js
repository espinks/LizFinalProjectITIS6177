/**
 * @description This is the main file of the application
 * */

const express = require('express');
const apiRouter = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/API', apiRouter);
app.route('/').get((req, res) => {
    res.render('./index');
});


/**
 * Start the server
 *  */
app.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});

//paste everything in .env before running app! 