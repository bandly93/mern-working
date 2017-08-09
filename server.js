var express = require("express");
var bodyParser = require("body-parser");
var engines = require('consolidate');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', engines.mustache);
app.set("view engine", "html");

app.get("/",function(req,res){
	res.render("home");
});

app.listen(3000,function(){
	console.log("You are now connected!");
});

