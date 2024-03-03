const mongoose = require('mongoose');

// Define your MongoDB URI
const mongoURI = 'mongodb+srv://sahutanmay1903:IpSFBKVHDpfx9W97@cluster0.dzb7eij.mongodb.net/restaurantmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        // Fetch data from the "food_item" collection
        const collection = mongoose.connection.db.collection("food_item");
        const data = await collection.find({}).toArray();
        const foodCategory = mongoose.connection.db.collection("foodCategory");
        const data2 = await foodCategory.find({}).toArray();
        // Store the fetched data in a global variable
        global.food_items = data;
        global.food_category = data2;
        // console.log(global.food_items);
        // console.log(global.food_category);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;
