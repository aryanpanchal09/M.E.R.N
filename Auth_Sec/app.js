const express = require('express');
const bodyParser = require('body-parser');
const encrypt = require('mongoose-encryption');
const ejs = require("ejs");
const path = require('path');

var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/secrets");
const trySchema = new mongoose.Schema({
    email: String,
    password: String
});

const secret = "thisislittlesecret.";
trySchema.plugin(encrypt,{secret:secret,encryptedFields:["password"]});

const item = mongoose.model("second",trySchema);

app.get("/",function(req,res)
{
    res.render("D:/Coding_Languages/M.E.R.N/Auth_Sec/views/home.ejs");
});

// app.post("/register",function(req,res){
//     const newUser = new item({
//         email: req.body.username,
//         password: req.body.password
//     });
//     newUser.save(function(err)
//     {
//         if(err)
//         {
//             console.log(err);
//         }
//         else 
//         {
//             res.render("secrets");
//         }
//     });
// });

app.post("/register", async (req, res) => {
    const newUser = new item({
        email: req.body.username,
        password: req.body.password
    });

    try {
        await newUser.save();
        res.render("D:/Coding_Languages/M.E.R.N/Auth_Sec/views/secrets.ejs");
    } catch (err) {
        console.log(err);
        res.redirect("/register"); // Optionally redirect back to the registration page on error
    }
});

// app.post("/login",function(req,res)
// {
//     const username = req.body.username;
//     const password = req.body.password;
//     item.findOne({email:username},function(err,foundUser){
//         if(err){
//             console.log(err);
//         }
//         else{
//             if(foundUser){
//                 if(foundUser.password === password)
//                 {
//                     res.render("secrets");
//                 }
//             }
//         }
//     });
// });

app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const foundUser = await item.findOne({ email: username });

        if (foundUser) {
            // Directly comparing the passwords (not recommended for production)
            if (foundUser.password === password) {
                res.render("D:/Coding_Languages/M.E.R.N/Auth_Sec/views/secrets.ejs");
            } else {
                console.log("Incorrect password.");
                res.redirect("/login"); // Redirect on incorrect password
            }
        } else {
            console.log("No user found with that email.");
            res.redirect("/login"); // Redirect if user not found
        }
    } catch (err) {
        console.log(err);
        res.redirect("/login"); // Redirect on error
    }
});

app.get("/login",function(req,res)
{
    res.render("D:/Coding_Languages/M.E.R.N/Auth_Sec/views/login.ejs");
});

app.get("/register",function(req,res)
{
    res.render("D:/Coding_Languages/M.E.R.N/Auth_Sec/views/register.ejs")
});

app.listen(5000,function()
{
    console.log("Server started");
});