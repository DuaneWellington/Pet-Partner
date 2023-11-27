// PATH controllers/fosters.js

module.exports = {
    create,
  }
  const Foster = require('../models/foster')
  
  //find a reosurce based on its ID
  async function create(req, res) {
    const pet = await Pet.findById(req.params.id)
  
    //push the destinations info to the destinationSchema locted in the models/flights.js file
  
    pet.adoptions.push(req.body)
  
    try{
  //append/push our data using a built in mongoose function... save()
        await pet.save()
    }
    catch (err) {
        console.log(err)
    }
  
    // res.redirect(`/flights/${arrivalInfo._id}`)
    res.redirect(`/pets/${pet._id}`)
  }