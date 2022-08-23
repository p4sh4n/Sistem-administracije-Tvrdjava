const mongoose = require('mongoose')
const User = require('./User')

let arrayLimit = (val)=> {
    return val.length <= 5;
}

const TeamSchema  = new mongoose.Schema({
    ime: {
        type: String,
        required: true,
        lowercase: true
    },
    clanovi: {
        type: [{
          type: Schema.Types.ObjectId,
          ref: 'User'
        }],
        validate: [arrayLimit, '{PATH} prelazi limit od 5 clanova tima!']
      }
})

const Team = mongoose.model('Team', TeamSchema)

module.exports = Team