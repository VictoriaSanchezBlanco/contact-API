const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema ({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
        unique: true,
    },   
    owner: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Contact', contactSchema);