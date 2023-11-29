// PATH: controllers/pets.js

module.exports = {
    index,
    match: matchPet,
    findMatchingPet,
    show,
    // addToInvoice,
     // create,
}

const Pet = require('../models/pet')

//MATCH (SHOW THE MATCH FORM)
//test

function matchPet (req, res) {
    console.log("FUNCTION:  MATCHPET(MATCH)")
    res.render('animals/match', {title: "Match Pet", errorMsg:''})
}

//INDEX (SHOW ALL PETS PAGE)

async function index(req, res) {
  
    try {
        const allPets = await Pet.find({})
        // console.log(allPets, "allPets")

        res.render('animals/index', {title: "All Pets", pets: allPets})
    }catch (err) {
        console.log('index error', err)
    }
}

// CREATE
async function create(req, res) {
    console.log("CREATE FUNCTION -->")
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

async function findMatchingPet(req, res) {
    console.log("FUNCTION:  FIND MATCHING PET")
    try {
      const matchingArray = []  // set up an empty array to be used to push the data found from the db collection
      // res.send(req.body)
      // Search for a pet with matching criteria
      const matchingPet = await Pet.findOne({
        petType: req.body.petType,
        petColor: req.body.petColor,
        petSize: req.body.petSize,
       });
       matchingArray.push(matchingPet) // this is needed as the index page is expecting the data to be in an array format
      // FOR TESTING ONLY Return the matching pet or null if not found
     
      // if no match show only the matching petType
      
      res.render('animals/index', {title: "Results", pets: matchingArray} )
      // res.send(matchingPet)
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

// //SHOW
    async function show(req, res, next) {
        try {
          const pet = await Pet.findById(req.params.id)
          console.log(pet)
          res.send(pet)
          // res.render('animals/show', { title: "Pet Detail",pet });
        } catch (err) {
          console.log(err);
          next(Error(err));
        }
      }

// ADD THE PET TO THE USER "INVOICE"
// async function addToInvoice(req, res) {
//   const movieId = req.params.id;
//   const perfomerId = req.body.performerId;

//   try {
//     const foundMovie = await Movie.findById(movieId);
//     foundMovie.cast.push(perfomerId);
//     await foundMovie.save();

//     res.redirect(`/movies/${foundMovie._id}`);
//   } catch (err) {
//     console.log(err);
//     res.redirect("/");
//   }
// }

// *********** //
// *REMOVE ME* //
// *********** //
