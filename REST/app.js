const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/api",
    {
        useNewUrlParser: true
    });

const articleScheme = {
    name: String,
    title: String
};

const Article = mongoose.model("items", articleScheme);

app.get("/articles",function(req,res)
{
    Article.find()
    .then(found => {
        console.log(found);
        res.send(found);
    })
    .catch(err => {
        console.error(err);
    });
});

app.post("/articles",function(req,res)
{
    const element1 = new Article
    ({
        name: req.body.name,
        title: req.body.title
    });
    element1.save();
});

app.delete("/articles", async (req, res) => {
    try {
        const result = await Article.deleteMany({});
        res.send(`Deleted ${result.deletedCount} articles`);
    } catch (err) {
        res.status(500).send(err);
    }
});

localhost:8000/articles/Aws

app.get("/articles/:articleTitle",function(req,res)
{
    
})

app.listen(8000, function()
{
    console.log("Server started at port 8000");
});