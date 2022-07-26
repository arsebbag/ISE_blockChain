//crud operations
const { Schema, model } = require('mongoose')
const User = require('../../../authentication/models/user')
// Account have a id(- Account no.), all user attributes, balance on the account.
const accountSchema = new Schema({
    owner: {
        type: User,
        required: true
    },
    balance: {
        type: Number,
        //required: true
    },
    //userType: String,
});

module.exports = model("User", accountSchema);