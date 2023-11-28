// PATH: models/user.js

const mongoose = require("mongoose") //import mongoose

const Schema = mongoose.Schema; //declare Schema

const userSchema = new Schema(
  {
    userInfo: {
      firstName: {type: String},
      lastName: {type: String},
      emailAddress: {type: String},
      address: {
        street1: {type: String},
        street2: {type: String},
        city: {type: String},
        fosterState: {type: String},
        postalCode: {type: String},
        country: {type: String},
      },
      phoneNo: { type: Number},
      fosterStartDate: { type: Date},
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