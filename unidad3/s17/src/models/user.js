const mongoose = require('mongoose');
const { use } = require('../routes/user');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema)