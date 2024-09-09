const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res){
  // res.sendFile("D:\Coding Languages\M.E.R.N\NodeJs\Server\index.html");
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", function(req, res){
  res.send('About Us!');
});

app.get("/section", function(req, res){
  res.send("It's Services offered by the Company");
});

app.listen(3000,function(){
  console.log(`Server Started`);
});