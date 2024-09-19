const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shop", { useNewUrlParser: true, useUnifiedTopology: true });
const fruitSchema = new mongoose.Schema 
({
    name: String,
    rating: Number
});

const personSchema = new mongoose.Schema 
({
    name: String,
    age: Number,
    fav: fruitSchema
});

const item = mongoose.model("items", fruitSchema);
const per = mongoose.model("favperson", personSchema);

const grapes = new item
({
    name: "Cherry",
    rating: 9
});
grapes.save();

const person1 = new per 
({
    name: "amy",
    age: 21,
    fav: grapes
});
person1.save();