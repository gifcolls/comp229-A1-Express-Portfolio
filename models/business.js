// Import
let mongoose = require('mongoose');

// Create a model class
let businessModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: String,
        emailAddress: String,        
    },
    {
        collection: "contact"
    }
);

module.exports = mongoose.model("Business", businessModel);