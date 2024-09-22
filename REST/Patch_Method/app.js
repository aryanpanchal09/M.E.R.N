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

// app.delete("/articles", async (req, res) => {
//     try {
//         const result = await Article.deleteMany({});
//         res.send(`Deleted ${result.deletedCount} articles`);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// app.get("/articles/:articleTitle",function(req,res)
// {
//     Article.findOne({title: req.params.articleTitle},function(err,articleFound)
//     {
//         if(err)
//         {
//             console.log(err);
//         }        
//         else
//         {
//             res.send(articleFound)
//         }
//     });
// });

app.get("/articles/:articleTitle",async (req, res) => {
    try {
        const articleFound = await Article.findOne({ title: req.params.articleTitle });
        
        if (articleFound) {
            res.send(articleFound);
        } else {
            res.status(404).send("Article not found");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Error retrieving article");
    }
});

// app.put("/articles/:articleTitle",function(req,res)
// {
//     Article.updateMany
//     (
//         {title: req.params.articleTitle},
//         {title: req.body.title, desc: req.body.desc},
//         {overwrite: true},
//         function(err)
//         {
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 res.send("Updated");
//             }
//         }
//     );
// });

// app.put("/articles/:articleTitle",async (req, res) => {
//     try {
//         const result = await Article.updateMany(
//             { title: req.params.articleTitle },
//             { title: req.body.title, desc: req.body.desc },
//             { overwrite: true }
//         );

//         if (result.modifiedCount > 0) {
//             res.send("Updated");
//         } else {
//             res.status(404).send("Article not found");
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Error updating article");
//     }
// });

app.patch("/articles/:articleTitle", async (req, res) => {
    try {
        await Article.updateOne(
            { title: req.params.articleTitle },
            { $set: { desc: req.body.desc } }
        );
        res.send("Success");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error updating article");
    }
});


app.listen(3000, function()
{
    console.log("Server started at port 3000");
});