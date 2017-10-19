var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoOp     =   require("./model/mongo");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));


router.route("/books")

.get(function(req,res){
  var response = {};
  mongoOp.find({},function(err,data){
        // Mongo command to fetch all data from collection.
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {
            response = {"error" : false,"message" : data};
        }
        res.json(response);
    });
})
.post(function(req,res){
    var db = new mongoOp();
    var response = {};
        db.bookTitle = req.body.title; 
        db.bookAuthor = req.body.title; 
        
        if(err) {
            response = {"error" : true,"message" : "Error adding data"};
        } else {
            response = {"error" : false,"message" : "Data added"};
        }
        res.json(response);
    });
    });


router.route("/users/by-author/:author")
.get(function(req,res){
    var response = {};
    mongoOp.find({ "bookAuthor": { "$regex": req.params.name, "$options": "i" } },function(err,data){
        // This will run Mongo Query to fetch data based on ID.
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {
            response = {"error" : false,"message" : data};
        }
        res.json(response);
    });
})

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");