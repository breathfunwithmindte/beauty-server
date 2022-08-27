const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    role: String
})

const User = mongoose.model("users", UserSchema);

module.exports = User;