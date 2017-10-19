var mongoose    =   require("mongoose");

// uri = 'mongodb://esthinri:8JvPMoh4Uu9WdYJW@bluehunter-shard-00-00-qpvhp.mongodb.net:27017,bluehunter-shard-00-01-qpvhp.mongodb.net:27017,bluehunter-shard-00-02-qpvhp.mongodb.net:27017/test?ssl=true&replicaSet=bluehunter-shard-0&authSource=admin'
uri = 'mongodb://localhost:27017/bluehunter'
console.log("Conecting to MongoDB");
mongoose.connect(uri);
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
console.log("Creating User Schema");
var userSchema  = {
	"userName" : String,
    "userEmail" : String,
    "userPassword" : String
};
// create model if not exists.
module.exports = mongoose.model('userLogin',userSchema);

console.log("Creating Book Schema");

var bookSchema  = {
	"bookTitle" : String,
    "bookAuthor" : String
};
// create model if not exists.
module.exports = mongoose.model('userLogin',bookSchema);