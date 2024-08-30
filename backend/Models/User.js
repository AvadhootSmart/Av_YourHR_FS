const mongoose = require("mongoose");
require("dotenv").config();

const UserSchema = mongoose.Schema({
    Username: { type: String },
    Email: { type: String },
    Password: { type: String },
    Resume: { type: String },
})


const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
