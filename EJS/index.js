const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get("/",function(req,res)
{
    var d = new Date();
    var day = d.getDay(); 
    if(day == 0)
        res.send("Day is Sunday");
    else if(day == 1)
        res.send("Day is Monday");
    else if(day == 2)
        res.send("Day is Tuesday");
    else if(day == 3)
        res.send("Day is Wednesday");
    else if(day == 4)
        res.send("Day is Thursday");
    else if(day == 5)
        res.send("Day is Friday");
    else(day == 6)
        res.send("Day is Saturday");
})

app.listen(3000, function()
{
    console.log("Server Started");
});