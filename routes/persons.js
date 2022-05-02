const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// Added path to for all person of get request.
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons);
    } catch (error) { res.send("GET Error : " + error) };
});


// Added path for one person to get request by their id..
router.get('/:id', async (req, res) => {
    try {
        // Finding person by their id.
        const person = await Person.findById(req.params.id);
        // Showing value in responce
        res.json(person);
    } catch (error) { res.send("Please recheck your url its not matching with any id.") };
});


// For updating particular value from patch.
router.patch('/:id', async (req, res) => {
    try {
        // Finding person by their id.
        const person = await Person.findById(req.params.id);
        let updated_person;
        if (req.body.name) {
            // Changing value here
            person.name = req.body.name;
            // Saving value here
            updated_person = await person.save();
        }
        if (req.body.programming_language) {
            // Changing value here
            person.programming_language = req.body.programming_language;
            // Saving value here
            updated_person = await person.save();
        }
        if (req.body.age) {
            // Changing value here
            person.age = req.body.age;
            // Saving value here
            updated_person = await person.save();
        }
        if ((req.body.have_job) !== (undefined)) {
            // Changing value here
            person.have_job = req.body.have_job;
            // Saving value here
            updated_person = await person.save();
        }
        // Showing value in responce
        console.log("Value Changed to ", updated_person);
        res.json(updated_person);
    } catch (error) { res.send("Patch Error : " + error) };
});


// Added path for person of POST request.
router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name,
        programming_language: req.body.programming_language,
        age: req.body.age,
        have_job: req.body.have_job
    });
    try {
        const data = await person.save();
        // Showing value in responce
        console.log("Added Value in PersonDB is ", data);
        res.json(data);
    } catch (error) {
        res.send("POST Error : " + error);
    }
});


// For deleting particular value from delete.
router.delete('/:id', async (req, res) => {
    try {
        // Finding person by their id.
        const person = await Person.findById(req.params.id);
        // Deleting value here
        const deleted_person = await person.remove(req.params.id);
        // Showing deleted .value in responce
        console.log("Deleted Value from PersonDB is ", deleted_person);
        res.json(deleted_person);
    } catch (error) { res.send("Delete Error : " + error) };
});

// Exported Router to access in app.js
module.exports = router;