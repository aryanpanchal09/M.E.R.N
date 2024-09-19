// const express = require("express");
// const bodyParser = require("body-parser");
// var app = express();
// var path = require('path');
// app.set("view engine","ejs");
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/todo");
// const trySchema = new mongoose.Schema 
// ({
//     name: String
// });

// const item = mongoose.model("task",trySchema);
// const todo = new item
// ({
//     name: "Create some videos"
// });
// const todo1 = new item
// ({
//     name: "Learn DSA"
// });
// const todo2 = new item
// ({
//     name: "Learn MERN Stack"
// });
// const todo3 = new item
// ({
//     name: "Learn ADV Java"
// });
// todo.save();
// todo1.save();
// todo2.save();
// todo3.save();

// app.get("/", function(req,res)
// {
//     item.find({},function(err,foundItems)
//     {
//         if(err)
//         {
//             console.log(err);
//         }
//         else 
//         {
//             res.render("D:/Coding_Languages/M.E.R.N/EJS/Todo_List/views/list.ejs",{dayej : foundItems});
//         }
//     });
// });

// app.listen("3000",function() 
// {
//     console.log("Server is running");
// });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true, useUnifiedTopology: true });

const trySchema = new mongoose.Schema({
    name: String
});

const item = mongoose.model("task", trySchema);

const todos = [
    new item({ name: "Create some videos" }),
    new item({ name: "Learn DSA" }),
    new item({ name: "Learn MERN Stack" }),
    new item({ name: "Learn ADV Java" })
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

saveTodos();

app.get("/", async function (req, res) {
    try {
        const foundItems = await item.find({});
        res.render("D:/Coding_Languages/M.E.R.N/EJS/Todo_List/views/list.ejs", { dayej : foundItems });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});