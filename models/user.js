var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    adresse_mail: { type: String, required: true },
}, { collection: 'User' });

module.exports = mongoose.model("User", userSchema);