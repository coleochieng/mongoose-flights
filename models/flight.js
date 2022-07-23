const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United'],
    },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 999
    },
    arrival: {
      type: Date,
      default: Date.now() + 365*24*60*60000
    },
  });

flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function(){
            let today = new Date();
            return today.setFullYear(today.getFullYear() + 1);
        },
    },
    destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);



