// Importing modules here 
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Url of our app here
const url = 'mongodb://localhost/PersonsDb';
// Connecting data base here; To avoid warning using { useNewUrlParser: true }
mongoose.connect(url, { useNewUrlParser: true });
// Handling database here
const connection = mongoose.connection;
connection.on('open', () => { console.log('Connected...') });

// Server listening here
app.listen(9000);