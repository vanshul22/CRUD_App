// Importing modules here 
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// http://localhost:9000/persons
// Url of our app here
const url = 'mongodb://localhost/PersonDb';

// Connecting data base here; To avoid warning using { useNewUrlParser: true }
mongoose.connect(url, { useNewUrlParser: true });

// Handling database here
const connection = mongoose.connection;
connection.on('open', () => { console.log('Connected with database MongoDB...') });

// Adding middle ware from here
app.use(express.json());

const personRouter = require('./routes/persons');
app.use('/persons', personRouter);

// Server listening here
app.listen(9000, () => { console.log('Express Server Started...') });