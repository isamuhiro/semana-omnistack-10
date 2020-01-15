const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true);

app.listen(3333);

