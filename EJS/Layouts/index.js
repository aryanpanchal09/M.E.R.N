const express = require("express");
const bodyParser = require("body-parser");

var app = express();
var path = require('path');
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res)
{
    res.render("home");
});

app.get("/about",function(req,res)
{
    res.render("about");
});

app.listen(4000,function()
{
    console.log("Server Started");
});