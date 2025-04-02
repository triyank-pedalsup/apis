const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userCrud", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });

app.get("/test", (req, res) => {
    res.send("Welcome to the Express.js server!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});