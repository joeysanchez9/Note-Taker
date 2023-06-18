// dependencies 
const path = require('path');
const fs = require('fs')
const router = require('express').Router();

// npm package that allows for unique ids to be created



// routing
// module.exports = (app) => {

    // GET /notes should read the db.json file and return all saved notes as JSON.
    // router.get('/api/notes', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../db/db.json'));
        
    // });
    router.get('/notes', (req, res) => {
    const filePath = path.join(__dirname, '../db/db.json');
    console.log("Sending file at path: ", filePath);
    res.sendFile(filePath);
});


    // POST /notes should receive a new note to save on the request body, 
    // add it to the db.json file, and then return the new note to the client. 
    router.post('/notes', (req, res) => {
        // let db = fs.readFileSync('db/db.json');
        let db;
        try {
            db = fs.readFileSync('db/db.json');
        } catch (err) {
            console.error(err);
        }
        db = JSON.parse(db);
        // res.json(db);
        // creating body for note
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            
           
        };
        // pushing created note to be written in the db.json file
        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);

    });


    // DELETE notes/:id should receive a query parameter containing the id of a note to delete.
    router.delete('notes/:id', (req, res) => {
        c

    })


module.exports = router;