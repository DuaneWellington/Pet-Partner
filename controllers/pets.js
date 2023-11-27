// PATH: controllers/pets.js

module.exports = {
    index,
    new: newPet,
    create,
    show,
}

const Pet = require('../models/pet')

//NEW 

function newPet (req, res) {
    res.render('pets/new', {title: "Add Pet", errorMsg:''})
}

//INDEX

async function index(req, res) {
    try {
        const allPets = await Pet.find({})
        res.render('pets/index', {title: "All Pets", pets: allPets})
    }catch (err) {
        console.log('index error', err)
    }
}

//CREATE
async function create(req, res) {

    try {
      await Pet.create(req.body);
      // Always redirect after CRUDing data
      res.redirect('/pets', {errorMsg: err.message});
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('pets/new', { errorMsg: err.message });
    }
 }

//SHOW
    async function show(req, res, next) {
        try {
          const pet = await Pet.findById(req.params.id)
      
          console.log(pet)
          
          res.render('pets/show', { title: "Pet Detail",pet });
        } catch (err) {
          console.log(err);
          next(Error(err));
        }
      }