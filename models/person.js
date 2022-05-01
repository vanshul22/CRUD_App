const mongoose = require('mongoose');

// MongoDB schema thats how we need to put data.
const personSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    programming_language: {
        type: String, required: true
    },
    age: {
        type: String, required: true
    }, 
    have_job: {
        type: Boolean, required: true, default: false
    }
});

module.exports = mongoose.model('Person', personSchema);