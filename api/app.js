const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const numberRoute = require('./routes/classifyRoute');

const app = express();


dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/', numberRoute);

module.exports = app;