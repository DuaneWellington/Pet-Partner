// PATH: controllers/pets.js

module.exports = {
    index,
    // new: newPet,
    // create,
    // show,
}

const Pet = require('../models/pet')

//NEW 

// function newPet (req, res) {
//     res.render('animals/new', {title: "Add Pet", errorMsg:''})
// }

//INDEX

async function index(req, res) {
    try {
        const allPets = await Pet.find({})
        console.log(allPets, "allPets")

        res.render('animals/index', {title: "All Pets"})
    }catch (err) {
        console.log('index error', err)
    }
}

//CREATE
// async function create(req, res) {

//     try {
//       await Pet.create(req.body);
//       // Always redirect after CRUDing data
//       res.redirect('/animals', {errorMsg: err.message});
//     } catch (err) {
//       // Typically some sort of validation error
//       console.log(err);
//       res.render('animals/new', { errorMsg: err.message });
//     }
//  }

// //SHOW
//     async function show(req, res, next) {
//         try {
//           const pet = await Pet.findById(req.params.id)
      
//           console.log(pet)
          
//           res.render('animals/show', { title: "Pet Detail",pet });
//         } catch (err) {
//           console.log(err);
//           next(Error(err));
//         }
//       }