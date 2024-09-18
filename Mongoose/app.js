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
// item.updateOne({_id:""},{rating: 6},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Success!!");
//     }
// });

// Update a document by _id
const fruitIdToUpdate = "66ea390d1281b0cf8122b64e"; // Replace with the actual _id of the document you want to update

item.updateOne({ _id: fruitIdToUpdate }, { rating: 6 })
    .then(result => {
        if (result.nModified > 0) {
            console.log("Success!! Rating updated to 6.");
        } else {
            console.log("No item found with that ID or rating was already 6.");
        }
    })
    .catch(err => {
        console.error("Error updating item:", err);
    });

// Delete Data in Mongoose 

// item.deleteOne({name:"WaterMelon"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Deleted!");
//     }
// })


// item.deleteOne({ name: "WaterMelon" })
//     .then(result => {
//         if (result.deletedCount > 0) {
//             console.log("Deleted!");
//         } else {
//             console.log("No item found with that name.");
//         }
//     })
//     .catch(err => {
//         console.error("Error deleting item:", err);
//     });

