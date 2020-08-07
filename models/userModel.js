const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: 'Enter a  username'
    },
    password: {
        type: String,
        required: 'Enter a password'
    }
});

module.exports = mongoose.model("User", UserSchema);
module.exports = UserSchema;
