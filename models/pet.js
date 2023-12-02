// PATH: models/pet.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema

//EX1: Adoption Schema
const fosterSchema = new Schema ({
    fosterer: {
        type: Schema.Types.ObjectId,
        ref: 'User', },

    fosterDate: {
        type: Date },
    }, {
        timestamps: true
});
const petSchema = new Schema({
    petType: {
        type: String,
        enum: ['CAT', 'DOG', 'HORSE', 'LIZARD', 'FERRET', 'GOLDFISH', 'ROCK'],
        default: 'CAT' },

    petSize: {
        type: String,
        enum: ['SMALL', 'MEDIUM', 'LARGE', 'FARM', 'EXOTIC', 'MISC'],
        default: 'MEDIUM'},

    petColor: {
        type: String,
        enum: ['BLACK', 'BROWN', 'GRAY', 'MIXED', 'ORANGE', 'PAINTED', 'WHITE', 'OTHER'],
        default: 'BLACK'},

    petGender: {
        type: String,
        enum: ['FEMALE', 'MALE', 'WHATEVER']},

    petAge: {
        type: Number,
        min: 1,
        max: 9999999
    },

    petEnvironment: {
        type: String,
        enum: ['APARTMENT', 'FARM', 'SINGLE FAMILY HOME', 'MULTI FAMILY HOME', 'BOAT', 'OTHER', 'LOFT', 'VAN/RV'] },

    petClassifications:  {
        spayed_neutered: Boolean,
        house_trained: Boolean,
        declawed: Boolean,
        special_needs: Boolean,
        shots_current: Boolean,
        },

    petTemperament: {
        type: String,
        enum: ['AFFECTIONATE', 'TIMID', 'INDEPENDENT', 'ENERGETIC']
    },
    petImage: {
        type: String,
    },

    isAvailable: {
        type: Boolean,
    },

    foster: [fosterSchema]
}, {
    timestamps: true //use this to use the mogoose createdAt and updatedAt fields.
  });


  // ******** DELETE FUNCTION FOR PET DATABASE ************

petSchema.statics.deletePetById = async function (petId) {
    return this.deleteOne({ _id: petId });
};

  // ******** DELETE FUNCTION FOR PET DATABASE ************

  // ******** DELETE FUNCTION FOR PET DATABASE ************

petSchema.statics.deletePetById = async function (petId) {
    return this.deleteOne({ _id: petId });
};

  // ******** DELETE FUNCTION FOR PET DATABASE ************

//compile the pets schema and export it
module.exports = mongoose.model('Pet', petSchema)