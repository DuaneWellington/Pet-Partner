// PATH controllers/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');

module.exports = {
    newUser,
    router
  }
  
  //handle POST requests to /users
  router.post('/', async (req, res) => {
    try {
      // Get data from the form submission
      const userData = req.body;

      // Create a new user instance with the form data
      const newUser = new User(userData);

      //Save the new user to the database
      await newUser.save();

      //Render form
      res.render('/aminals/users', {title: "New User", errorMsg: '' });
    } catch (error) {
      //Handle errors
      res.render('error', { error});
    }
    });
  
  //Add a new user
  async function newUser(req, res) {
    try {
      //create a new user instance
      const newUser = new User(req.body);
      //Save new user to the database
      await newUser.save();

      res.redirect(`/users/${newUser._id}`);
    } catch (err) {
        console.log(err);
        res.render('error', { error: err });
    }
  }