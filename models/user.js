// PATH: models/user.js

const mongoose = require("mongoose") //import mongoose

const Schema = mongoose.Schema; //declare Schema

const userSchema = new Schema(
  {
    userInfo: {
      firstName: {type: String, required: true},
      lastName: {type: String, required: true},
      emailAddress: {type: String, required: true},
      address: {
        street1: {type: String, required: true},
        street2: {type: String, required: true},
        city: {type: String, required: true},
        fosterState: {type: String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String},
      },
      phoneNo: { type: Number, required: true},
      fosterStartDate: { type: Date, required: true},
      fosterAge: { type: Number,
        min: 1, 
        max: 200
      },
      fosterLength: {
        twoWeeks: {type: Boolean},
        oneMonth: {type: Boolean},
        threeMonths: {type: Boolean},
        sixMonths: {type: Boolean},
      },
    },
  },


    // userInfo: {
    //   firstName: {
    //     type: String,
    //   },
    //   lastName: {
    //     type: String,
    //   },
    //   emailAddress: {
    //     type: String,
    //   },
    //   address: {
    //     street1: {
    //       type: String,
    //     },
    //     street2: {
    //       type: String,
    //     },
    //     city: {
    //       type: String,
    //     },
    //     fosterState: {
    //       type: String,
    //     },
    //     postalCode: {
    //       type: String,
    //     },
    //     country: {
    //       type: String,
    //     },
    //   },
    //   fosterAge: {
    //     type: Number,
    //   },
    //   fosterLength: {
    //     twoWeeks: {
    //       type: Boolean,
    //     },
    //     oneMonth: {
    //       type: Boolean,
    //     },
    //     threeMonths: {
    //       type: Boolean,
    //     },
    //     sixMonths: {
    //       type: Boolean,
    //     },
    //   },
    // },

    // accessories: {
    //     litterBox: Boolean,
    //     leash: Boolean,
    //     kennel: Boolean,
    //     habitat: Boolean,
    //     toys: Boolean },

    // food: {
    //     type: Boolean,
    // },
  
  {
    timestamps: true
  },
);

module.exports = mongoose.model("User", userSchema);