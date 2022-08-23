const mongoose = require('mongoose')

const ActivitySchema  = new mongoose.Schema({
    tip: {
        type: String,
        required: true,
        lowercase: true,
        enum: {
            values: ['obavezna', 'neobavezna'],
            message: '{VALUE} je nepostojeci tip aktivnosti!'
        }
    },
    datum: {
        type: Date,
        required: true,
        default: Date.now
    },
    lokacija: {
        type: String,
        required: true
    },
    brojPrisutnih: {
        type: Number,
        required: true,
        min: 0
    },
    opis: {
        type: String
    }
})

const Activity = mongoose.model('Activity', ActivitySchema)

module.exports = Activity;