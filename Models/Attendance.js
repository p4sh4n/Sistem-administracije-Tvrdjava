const mongoose = require('mongoose')
const User = require('./User')
const Activity = require('./Activity')

const AttendanceSchema  = new mongoose.Schema({
    clanID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    aktivnostID: {
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }
})

const Attendance = mongoose.model('Attendance', AttendanceSchema)

module.exports = Attendance;