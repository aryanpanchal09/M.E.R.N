const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shop", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number
});

const Item = mongoose.model("Item", fruitsSchema);

const apple = new Item({
    name: "Apple",
    rating: 8
});

const mango = new Item({
    name: "Mango",
    rating: 10
});

const banana = new Item({
    name: "Banana",
    rating: 9
});

async function saveItems() {
    try {
        await Item.insertMany([mango, banana]);
        console.log("Inserted");
        
        const savedApple = await apple.save();
        console.log("Apple saved:", savedApple);
        
    } catch (err) {
        console.log("Error saving items:", err);
    }
}

async function retrieveItems() {
    try {
        const items = await Item.find({}, 'name');
        console.log("Retrieved items:", items);
        
    } catch (err) {
        console.log("Error retrieving items:", err);
    }
}

// Execute the functions
async function main() {
    await saveItems();  // Save items first
    await retrieveItems(); // Then retrieve items
}

main();