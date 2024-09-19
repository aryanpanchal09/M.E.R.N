const express = require("express");
const bodyParser = require("body-parser");

var app = express();
var path = require('path');
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
var items = [];
var example = "working";

app.get("/",function(req,res)
{
    res.render("D:/Coding_Languages/M.E.R.N/EJS/Todo_List/views/list.ejs",{ejes:items});
});

app.post("/",function(req,res)
{
    var item = req.body.ele1;
    items.push(item);
    res.redirect("/");
});

app.listen(8000,function()
{
    console.log("Server Started");
});