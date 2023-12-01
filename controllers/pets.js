// PATH: controllers/pets.js

module.exports = {
    index,
    match: matchPet,
    deletePet,
    addUserToPet,
    findMatchingPet,
    show,
     // create
}

const Pet = require('../models/pet')
const User = require('../models/user')

//MATCH (SHOW THE MATCH FORM)

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


  //  ******** TOP - DELETE FUNCTION FOR PET DATABASE - TOP ************

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

  // ******** BOTTOM - DELETE FUNCTION FOR PET DATABASE - BOTTOM ************


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
// When a user clicks the "pick-me" button this function will connect the userId to the petId to produce the final 'invoice' page which will show the user and pet information.

async function addUserToPet(req, res) {
  const petId = req.params.id;
  console.log("PET ID: ", petId)
  const userId = "6568b96e6ea46a5aa6a3ad18"
  //req.user 
  //console.log(req.user) //show the entire user obj removes line 120, modify line 125 found 
  // if userid length = 0, then we need to use this user object id: 6568b96e6ea46a5aa6a3ad18  (admin)
  console.log("USER ID: ", userId)

  try {
    const foundUser = await User.findById(userId)
    console.log("FOUND USER: ", foundUser)
    const foundPet = await Pet.findById(petId)
    console.log("FOUND PET: ", foundPet)
    foundPet.isAvailable = false
    const yourSelection = foundPet.foster.push(foundUser)
    await foundPet.save()
    console.log("PET AFTER SAVE: ", foundPet)
    // res.render('animals/index', {title: "Invoice", pets: matchingArray} )
    res.render('animals/invoice', {title: "Invoice", pets: yourSelection, user: foundUser} )
  } catch (err) {
    console.log(err)
    res.redirect("/")
  }
}