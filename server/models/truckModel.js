const mongoose = require('mongoose');

const Schema = mongoose.Schema

const truckSchema = new Schema({
    unitNumber: {
        type: String,
        required: true
    },
    unitMake: {
        type: String,
        required: true
    },
    unitModel: {
        type: String,
        required: true
    },
    unitMileage: {
        type: Number,
        required: false
    },
    unitType: {
        type: String,
        required: false
    }
}, { timestamps: true} )

module.exports = mongoose.model('Truck', truckSchema)