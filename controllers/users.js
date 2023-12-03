// PATH controllers/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Pet = require('../models/pet');

  
//INDEX

async function index(req, res) {
 
  try {
      const allUsers = await User.find({});
      res.render('animals/users', {title: "Foster Parent Info Form", users: allUsers})
  } catch (err) {
      console.log('index error', err)
  }
}

// CREATE
async function create(req, res) {
  req.body.googleId = req.user.googleId
  const userData = {...req.body};
  console.log("USER DATA: ", userData)
  const requiredFields = [
    'fosterStartDate',
    'googleId',
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
  
  //Add a new user
  function newUser(req, res) {
    res.render('animals/users')
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
