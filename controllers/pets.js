// PATH: controllers/pets.js

module.exports = {
    index,
    match: matchPet,
    deletePet,
    findMatchingPet,
    addUserToPet,
    show,
    //create
}

const Pet = require('../models/pet')
const User = require('../models/user');

//MATCH (SHOW THE MATCH FORM)
function matchPet (req, res) {
    res.render('animals/match', {title: "Match Pet", errorMsg:''})
}

//INDEX (SHOW ALL PETS PAGE)
async function index(req, res) {
  
    try {
        const allPets = await Pet.find({})
        res.render('animals/index', {title: "Pets Library", pets: allPets})
    }catch (err) {
        console.log('index error', err)
    }
}

// CREATE (NOTE: ICEBOX FEATURE TO ADD NEW PETS TO THE MONGODB)
async function create(req, res) {
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

// FIND A MATCHING PET BASED ON DATA PASSED BY MATCH FORM
async function findMatchingPet(req, res) {
    try {
      const matchingArray = []  // set up an empty array to be used to push the data found from the db collection
      // Search for a pet with matching criteria
      // const matchingPet = await Pet.findOne({  *ONLY ONE RESULT
      const matchingPet = await Pet.find({
        petType: req.body.petType,
        // petColor: req.body.petColor,
        // petSize: req.body.petSize,
       });
       matchingArray.push(...matchingPet) // this is needed as the index page is expecting the data to be in an array format

      // FOR TESTING ONLY Return the matching pet or null if not found
      // if no match show only the matching petType 
      res.render('animals/index', {title: "Results", pets: matchingArray} )
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  // DELETE A PET FROM THE DB
  async function deletePet(req, res) {
    const petId = req.params.id;
    try {
      await Pet.deletePetById(petId);
      res.redirect('/pets'); // Redirect to the pets listing page after deletion
    } catch (err) {
      console.error(err);
      res.render('error', { error: err });
    }
  }

// SHOW (NOTE: For icebox feature)
    async function show(req, res, next) {
        try {
          const pet = await Pet.findById(req.params.id)
          console.log(pet)
          res.send(pet)
        } catch (err) {
          console.log(err);
          next(Error(err));
        }
      }


// COMBINE PET/USER 
//  When a user clicks the "pick-me" button this function will connect the userId to the petId to produce the final 'invoice' page which will show the user and pet information.
async function addUserToPet(req, res) {
  const petId = req.params.id;
  // NOTE: Synthesizing the userID with a known userID for testing purposes.
  const userId = "656bfab3b0c4f0d0755e6bf8"
 
  try {
    const foundUser = await User.findById(userId)
    const foundPet = await Pet.findById(petId)
    foundPet.isAvailable = false
    const yourSelection = foundPet.foster.push(foundUser)
    await foundPet.save()
      res.render('animals/invoice', {title: "Invoice", pets: foundPet, user: foundUser} )
  } catch (err) {
    console.log(err)
    res.redirect("/")
  }
}
