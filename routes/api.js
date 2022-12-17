const route = require('express').Router();
const data = require('../db/db.json');

route.get('/notes', (req, res) => {
    data.getNotes().then((notes) => {
        return res.json(notes)
    }
    ).catch((err) => res.status(500).json(err))


});

route.post('/notes', (req, res) => {
    data.
})
















module.exports = route