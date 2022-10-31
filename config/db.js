let atlasDB = "mongodb+srv://dbuserassignment2:lF22U9WyYeESov6L@cluster005assignment2.bjmjcrd.mongodb.net/business?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('<== Connected to MongoDB ==>');
    })

    return mongodb;
}