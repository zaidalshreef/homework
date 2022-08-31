const mongoose = require('mongoose');
const schema = mongoose.Schema

const UsersSchema = new schema({
firstName: String,
lastName: String,
birthDate: Date,
isMarried: Boolean
})

module.exports = mongoose.model('user', UsersSchema)