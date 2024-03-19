const mongoose = require("mongoose");

const slipSchema = mongoose.Schema({
    amount: {
        type: String,
        required: true
    },
    User_ID: {
        type: Number,
        required: true
    },
    slip: {
        type: String, 
        required: true
    }
},
{
    timestamps: true 
});

module.exports = mongoose.model('Slip', slipSchema);
