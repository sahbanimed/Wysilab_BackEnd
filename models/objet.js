var mongoose = require('mongoose');
var schema = mongoose.Schema;
var User = require('../models/user');

var objetSchema = schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    proprietaire: {
        type: schema.Types.ObjectId,
        ref: 'User'
    }
}, { collection: 'Objet' });

objetSchema.statics.findObjectsByUser = function(idUser, callback) {
    var query = this.find();
    User.find({ '_id': idUser }, function(error, objets) {
        query.where({ proprietaire: idUser }).populate('proprietaire').exec(callback);
    });
    return query;
};

module.exports = mongoose.model("Objet", objetSchema);