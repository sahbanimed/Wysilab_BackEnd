var express = require('express');
var router = express.Router();
var Objet = require('../models/objet');

//Get objects By user
router.get('/:_id', function(req, res, next) {
    Objet.findObjectsByUser(req.params._id, function(err, objets) {
        if (err) {
            res.send(err);
        } else {
            res.json(objets);
        }
    });
});

//Add an object
router.post('/', function(req, res) {
    var objet = new Objet(req.body)
    objet.save(function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successfully posted" })
    })
})

module.exports = router;