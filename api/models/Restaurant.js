/**
 * Restaurant.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    name : {
        type : "string"
    },
    description : {
        type : "string"
    },
    location : {
        type : "string"
    },
    cuisine : {
        type : "string"
    },
    imageURL : {
        type : "string"
    },

    rating : {
        type : "number"
    },
    ratingMin : {
        type : "number"
    },
    ratingMax : {
        type : "number"
    },
    priceMin : {
        type : "number"
    },
    priceMax : {
        type : "number"
    },
    maxBooking : {
        type : "number"
    },

    highlighted : {
        type : "string"
    },
    reservedBy: {
      collection: 'User',
      via: 'reservationList'
    },
  },

};

