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
        if (person != null) {
            res.json(person);
        } else {
            res.send("Please recheck ID its incorrect...");
        };
    } catch (error) { res.send("Please recheck your url its incorrect...") };
});


// For updating particular value from patch.
router.patch('/:id', async (req, res) => {
    try {
        // Finding person by their id.
        const person = await Person.findById(req.params.id);
        let updated_person;
        // If anything is not defined in body it will give us undefined. 
        if ((req.body.name) !== (undefined)) {
            // Changing value here
            person.name = req.body.name;
            // Saving value here
            updated_person = await person.save();
        }
        if ((req.body.programming_language) !== (undefined)) {
            person.programming_language = req.body.programming_language;
            updated_person = await person.save();
        }
        if ((req.body.age) !== (undefined)) {
            person.age = req.body.age;
            updated_person = await person.save();
        }
        if ((req.body.have_job) !== (undefined)) {
            person.have_job = req.body.have_job;
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
        // Taking Value from body of POST.
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
    };
});


// For deleting particular value from delete.
router.delete('/:id', async (req, res) => {
    try {
        // Finding person by their id.
        const person = await Person.findById(req.params.id);
        if (person) {
            // Deleting value here
            const deleted_person = await person.remove(req.params.id);
            console.log("Deleted Value from PersonDB is ", deleted_person);
            // Showing deleted .value in responce
            res.json(deleted_person);
        } else {
            console.log("Person not found...");
            res.send("Person not found...");
        }
    } catch (error) { res.send("Delete Error : " + error) };
});

// Exported Router to access in app.js
module.exports = router;