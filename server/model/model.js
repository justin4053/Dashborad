const mongoose = require('mongoose')

// define the schema
let schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    gender: String,
    status: String,
    create_date: String,
    create_time: String
})

const Userdb = mongoose.model('userdb', schema)

module.exports = Userdb