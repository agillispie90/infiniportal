const mongoose = require('mongoose');

const Schema = mongoose.Schema

const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfHire: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    certNumber: {
        type: String,
        required: false
    }
}, { timestamps: true} )

module.exports = mongoose.model('Profile', profileSchema)