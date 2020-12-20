const Router = require('express').Router;
const petController = require('../controllers/pet.controller');

const router = Router();

router.post('/', petController.createPet);
router.get('/', petController.getAllPets);
router.put('/:id', petController.updatePetById);
router.get('/:id', petController.getPetById);
router.delete('/:id', petController.deletePetById);

module.exports = router;