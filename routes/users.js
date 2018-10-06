var express = require('express');
var router = express.Router();
var User = require('../models/user');

//Get all users
router.get('/GetAllUsers', function(req, res, next) {
    User.find({}, function(error, result) {
        if (error) {
            res.send(error);
        }
        if (!result) {
            res.status(404).send();
        } else {
            res.json(result);
        }
    });
});

//Get number of users
router.get('/GetNumberUsers', function(req, res, next) {
    User.find({}, function(error, result) {
        if (error) {
            res.send(error);
        }
        if (!result) {
            res.status(404).send();
        } else {
            res.json(result.length);
        }
    });
});

//Add user
router.post('/', function(req, res) {
    var user = new User(req.body)
    user.save(function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successfully posted" })
    })
})

module.exports = router;