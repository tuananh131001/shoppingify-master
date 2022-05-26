const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    amount:{
        type:Number,
        required: true,
        default:0
    }
});

module.exports = mongoose.model('Item',itemSchema)