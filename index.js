require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); 
const globalRouter = require("./src/router/routes.js");

const app = express();
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect("mongodb://localhost:27017/myDb")
  .then(() => console.log("Connected to MongoDB"))    
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.use('/api', globalRouter);

app.listen(3000, () => {
    console.log(`Server is running on 3000`);
});