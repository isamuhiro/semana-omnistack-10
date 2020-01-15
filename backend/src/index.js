const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://isamuhiro:Misterio1@cluster0-5w1i7.mongodb.net/week10?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true)

app.listen(3333);

