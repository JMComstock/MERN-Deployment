const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Your pet needs a name"],
        minlength:[3, "Name should be at least 3 characters."],
        unique: true,
    },
    type:{
        type: String,
        required: [true, "Your pet needs a type"],
        minlength:[3, "Name should be at least 3 characters."],
    },
    description: {
        type: String,
        required: [true, "You must type in a pet description"],
        minlength: [3, "You need at least 3 characters for the description."]
    },
    skill1: {
        type: String,
        required: [false, ""],
    },
    skill2: {
        type: String,
        required: [false, ""],
    },
    skill3: {
        type: String,
        required: [false, ""],
    }
}, {timestamps: true});

const Pet = mongoose.model("Pet", PetSchema);
PetSchema.plugin(uniqueValidator);
module.exports = Pet;