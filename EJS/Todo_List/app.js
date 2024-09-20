/*

const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var path = require('path');
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema = new mongoose.Schema 
({
    name: String
});

const item = mongoose.model("task",trySchema);
const todo = new item
({
    name: "Create some videos"
});
const todo1 = new item
({
    name: "Learn DSA"
});
const todo2 = new item
({
    name: "Learn MERN Stack"
});
const todo3 = new item
({
    name: "Learn ADV Java"
});
todo.save();
todo1.save();
todo2.save();
todo3.save();

app.get("/", function(req,res)
{
    item.find({},function(err,foundItems)
    {
        if(err)
        {
            console.log(err);
        }
        else 
        {
            res.render("D:/Coding_Languages/M.E.R.N/EJS/Todo_List/views/list.ejs",{dayej : foundItems});
        }
    });
});

app.post("/", function(req,res)
{
    const itemName = req.body.ele1;
    const todo4 = new item
    ({
        name: itemName
    });
    todo4.save();
    res.redirect("/");
});

app.listen("3000",function() 
{
    console.log("Server is running");
});

*/

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch(err => console.error("MongoDB connection error:", err));

const trySchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model("Task", trySchema);

const todos = [
    new Item({ name: "Create some videos" }),
    new Item({ name: "Learn DSA" }),
    new Item({ name: "Learn MERN Stack" }),
    new Item({ name: "Learn ADV Java" })
];

// Save all todos to the database
async function saveTodos() {
    try {
        await Promise.all(todos.map(todo => todo.save()));
        console.log("Todos saved successfully!");
    } catch (err) {
        console.error("Error saving todos:", err);
    }
}

// Call saveTodos only if the database is empty
async function checkAndSaveTodos() {
    const count = await Item.countDocuments();
    if (count === 0) {
        await saveTodos();
    }
}

checkAndSaveTodos();

app.get("/", async (req, res) => {
    try {
        const foundItems = await Item.find({});
        res.render("D:/Coding_Languages/M.E.R.N/EJS/Todo_List/views/list.ejs", { dayej: foundItems }); // Use relative path for view
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/", async (req, res) => {
    const itemName = req.body.ele1;
    const todo4 = new Item({ name: itemName });
    
    try {
        await todo4.save();
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving item");
    }
});

app.post("/delete", async (req, res) => {
    const checked = req.body.checkbox1;

    try {
        await Item.findByIdAndDelete(checked);
        console.log("deleted");
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting item");
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});