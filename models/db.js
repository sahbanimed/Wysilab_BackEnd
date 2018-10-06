var mongoose = require('mongoose');
//var url = "mongodb://localhost/wysilab";
//var url = "mongodb://oussama:mongo0000@ds123753.mlab.com:23753/wysilabdb";
var url = "mongodb://sahbani:sahbani0000@ds123753.mlab.com:23753/wysilabdb";
//var url = "mongodb://oussama:mongo0000@ds261138.mlab.com:61138/weatherdb"
mongoose.connect(url, function(err, result) {
    if (err) {
        return ("NOT DONE" + err)
    }
    console.log("Database connection :) ");
})