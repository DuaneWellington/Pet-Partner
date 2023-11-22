// PATH: models/pet.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema

//EX1: Adoption Schema
const adoptionSchema = new Schema ({
    adopter: {
        type: String },

    adoptionDate: {
        type: Date },
    }, {
        timestamps: true
});
const petSchema = new Schema({
    petType: {
        type: String,
        enum: ['CAT', 'DOG', 'HORSE', 'LIZARD', 'FERRET', 'GOLDFISH', 'ROCK'],
        default: 'CAT' },

    petClassification: {
        type: String,
        enum: ['SMALL', 'MEDIUM', 'LARGE', 'FARM', 'EXOTIC', 'MISC'] },

    petSex: {
        type: String, },

    petAge: {
        type: Number,
        min: 1,
        max: 9999999
    },
    adoption: [adoptionSchema]
}, {
    timestamps: true //use this to use the mogoose createdAt and updatedAt fields. 
  });

  
//compile the flight schema and export it
module.exports = mongoose.model('Pet', petSchema)