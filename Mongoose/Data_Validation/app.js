const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shop", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter name of fruit']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    }
});

const item = mongoose.model("items", fruitsSchema);

const element = new item({
    rating: 10
});
element.save();