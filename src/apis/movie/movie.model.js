const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title : {type:String,required:true},  
  duration : {type:String,required:true},
  price : {type:Number,required:true}, 
})

const movie = mongoose.model('movie', movieSchema);
module.exports = movie; 