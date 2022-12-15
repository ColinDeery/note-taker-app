const route = require('express').Router();
const data = require('../db/db.json');

route.get('/notes', (req, res) => {
    data.getNotes().then((notes) => {
        return res.json(notes)
    }
    ).catch((err) {

    }
});















module.exports = route