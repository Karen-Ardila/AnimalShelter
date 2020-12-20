const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        unique: [true, "Pet name should be unique"],
        minlength: [3, "Pet name must be at least three characters long"]
    },
    type: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be at least three characters long"]
    },
    description: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Pet description must be at least three characters long"]
    },
    skills: {
        type: [String],
        max: [3, "Pets can only have a max of 3 skills"]
    }
});

const Pet = mongoose.model("pet", PetSchema);

module.exports = Pet;