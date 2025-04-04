let express = require('express');
let mongoose = require('mongoose');
const router = require('./user/user.routes.js');

let app = express();
app.use(express.json());

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/myDb").then(()=>{
    console.log("Connected to MongoDB");    
}).catch((err)=>{
    console.log("Error connecting to MongoDB");
})

app.use("/user",router);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})