const Pet = require('../models/pet.model');

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => {
            if (err.code === 11000) err.errors = {
                name: {
                    message: "Pet name must be unique"
                }
            }
            res.status(400).json({ message: "Something went wrong", error: err })
        });
}
module.exports.getAllPets = (req, res) => {
    Pet.find({})
        .then(pets => res.json({ pets }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}
module.exports.updatePetById = (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}
module.exports.getPetById = (req, res) => {
    Pet.findById(req.params.id)
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}
module.exports.deletePetById = (req, res) => {
    Pet.findByIdAndDelete(req.params.id)
        .then(deletedPet => res.json(deletedPet))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}