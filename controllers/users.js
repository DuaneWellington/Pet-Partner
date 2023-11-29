// PATH controllers/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Pet = require('../models/pet');

  
//INDEX

async function index(req, res) {
  // res.send("HOLDER: user index");
  try {
      const allUsers = await User.find({});
      // console.log(allUsers, "allUsers");

      res.render('animals/users', {title: "Foster Parent Info Form", users: allUsers})
  } catch (err) {
      console.log('index error', err)
  }
}

// CREATE
async function create(req, res) {
  const userData = {...req.body};
  const requiredFields = [
    'fosterStartDate',
    'phoneNo',
    'address.postalCode',
    'address.fosterState',
    'address.city',
    'address.street2',
    'address.street1',
    'emailAddress',
    'lastName',
    'firstName',
  ];

  // const missingFields = requiredFields.filter(field => !userData[field]);
  // if (missingFields.length > 0) {
  //   return res.render('animals/users', {errorMsg: `Missing required fields: ${missingFields.join(', ')}`});
  // }

  // if (userData.fosterAge <= 0) {
  //   userData.fosterAge = 18
  // }

  try {
    const newUser = await User.create(userData);
    // console.log(newUser, 'User Data')
    req.session.userData = User;
    // Always redirect after CRUDing data
    res.redirect('/pets/match');
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    // res.render('animals/users', { errorMsg: "Please complete all fields" });
  }
};

// SHOW

function showMatchForm(req, res) {
  const userId = req.params.id;

  User.findById(userId, (err, user) => {
    if (err) {
      console.log(err);
      res.render('error', { error: err });
    } else {
      // Store user data in the session
      req.session.userData = user;

      // Redirect to the match page
      res.redirect('/pets/match');
    }
  });
}

function renderMatchForm(req, res) {
    // Retrieve user data from the session
    const userData = req.session.userData;
  
    // Render the 'match' page with user data
    res.render('animals/match', { title: 'Find Match', user: userData });
  }

  
  // //handle POST requests to /users
  // router.post('/', async (req, res) => {
  //   try {
  //     // Get data from the form submission
  //     const userData = req.body;

  //     // Create a new user instance with the form data
  //     const newUser = new User(userData);

  //     //Save the new user to the database
  //     await newUser.save();

  //     //Render form
  //     res.render('/aminals/users', {title: "New User", errorMsg: '' });
  //   } catch (error) {
  //     //Handle errors
  //     res.render('error', { error });
  //   }
  //   });
  
  //Add a new user
  function newUser(req, res) {
    res.render('animals/users')
    // try {
    //   //create a new user instance
    //   const newUser = new User(req.body);
    //   //Save new user to the database
    //   await newUser.save();
    //   // res.render('users/new', {title: "Add new User", users: await User.findById(req.params.id)})

    //   res.redirect(`/users/${newUser._id}`);
    // } catch (err) {
    //     console.log(err);
    //     res.render('error', { error: err });
    // }
  };

  module.exports = {
    index,
    create,
    // users,
     new: newUser,
     showMatchForm,
     renderMatchForm,
    //  show
    }
