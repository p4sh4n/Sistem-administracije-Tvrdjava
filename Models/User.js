const mongoose = require('mongoose')

const ReplicaSchema = new mongoose.Schema({
    tip: {
        type: String,
        required: true,
        enum: {
            values: ['pistolj', 'jurisna', 'dmr', 'strojnica', 'snajper'],
            message: '{VALUE} je nepostojeci tip replike!'
        }
    },
    proizvodjac: {
        type: String,
        required: true,
        lowercase: true
    },
    model: {
        type: String,
        required: true,
        lowercase: true
    },
    serijskiBroj: {
        type: String,
        uppercase: true
    },
    slikaURL: {
        type: String,
        required: true
    },
    jacina: {
        type: Number
    },
    datumMjerenjaJacine: {
        type: Date
    }
})

const UserSchema  = new mongoose.Schema({
    brojClanskeKarte: {
        type: String,
        required: true
    },
    ime: {
        type: String,
        required: true
    },
    prezime: {
        type: String,
        required: true
    },
    datumPristupanja: {
        type: Date,
        required: true
    },
    adresa: {
        type: String,
        required: true
    },
    brojTelefona: {
        type: String,
        required: true
    },
    zvanje: {
        type: String
    },
    krvnaGrupa: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: '{VALUE} krvna grupa ne postoji!'
          }
    },
    cin: {
        type: String,
        enum: {
            //Update enum cinova
            values: ['Regrut'],
            message: '{VALUE} cin ne postoji!'
        },
        default: 'Regrut'
    },
    replike: [ReplicaSchema]
})

const User = mongoose.model('User', UserSchema)

module.exports = User