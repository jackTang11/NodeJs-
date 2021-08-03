const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')
console.log(baseModel);
const userSchema = mongoose.Schema({
    ...baseModel,
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        select: false,
        set: value => md5(value)
    },

    bio: {
        type: String,
        default: null
    },

    image: {
        type: String,
        default: null
    }
})

module.exports = userSchema