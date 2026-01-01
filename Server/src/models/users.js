const mongoose = require('mongoose')

const users = new mongoose.Schema({
    username: String,
    password: String,
    socketID: String,
})

