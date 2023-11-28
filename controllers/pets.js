// PATH: controllers/pets.js

module.exports = {
    index,
<<<<<<< HEAD
    new: newPet,
    create,
    show,
=======
    match: matchPet,
    findMatchingPet,
    create,
    // show,
>>>>>>> c68c502dfbfd412df1ec8a8b6ee1fa28cf956591
}

const Pet = require('../models/pet')

//MATCH

<<<<<<< HEAD
function newPet (req, res) {
    res.render('animals/new', {title: "Add Pet", errorMsg:''})
=======
function matchPet (req, res) {
    res.render('animals/match', {title: "Match Pet", errorMsg:''})
>>>>>>> c68c502dfbfd412df1ec8a8b6ee1fa28cf956591
}

//INDEX

async function index(req, res) {
    try {
        const allPets = await Pet.find({})
        res.render('animals/index', {title: "All Pets", pets: allPets})
    }catch (err) {
        console.log('index error', err)
    }
}
// test
// CREATE
async function create(req, res) {

<<<<<<< HEAD
//CREATE
async function create(req, res) {

    try {
      await Pet.create(req.body);
      // Always redirect after CRUDing data
      res.redirect('/animals', {errorMsg: err.message});
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('animals/new', { errorMsg: err.message });
    }
 }
=======
    try {
      await Pet.create(req.body);
      // Always redirect after CRUDing data
      res.redirect('/pets', {errorMsg: err.message});
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('animals/match', { errorMsg: err.message });
    }
 }
// const petTypeInput = 'Dog';
// const petColorInput = 'Brown';
// const petSizeInput = 'Medium';

async function findMatchingPet(petType, petColor, petSize) {
    try {
      
      // Search for a pet with matching criteria
      const matchingPet = await Pet.findOne({
        petType: petType,
        petColor: petColor,
        petSize: petSize,
      });
      // FOR TESTING ONLY Return the matching pet or null if not found
      console.log(matchingPet)
      return matchingPet;
    //   res.redirect('/pets', {errorMsg: err.message});
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
>>>>>>> c68c502dfbfd412df1ec8a8b6ee1fa28cf956591

//SHOW
    async function show(req, res, next) {
        try {
          const pet = await Pet.findById(req.params.id)
      
          console.log(pet)
          
          res.render('animals/show', { title: "Pet Detail",pet });
        } catch (err) {
          console.log(err);
          next(Error(err));
        }
      }