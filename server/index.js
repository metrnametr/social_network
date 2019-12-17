const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const walletsRoute = require('./route/WalletsRoute');

const app = express();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', walletsRoute);


app.listen('3000', () => console.log('start'));