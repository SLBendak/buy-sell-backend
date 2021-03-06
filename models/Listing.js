const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Listing Schema
const ListingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = Listing = mongoose.model('Listing', ListingSchema);