const slug = require('slugs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String],
  created: {
    type: Date,
    default: Date.now
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [
      {
        type: Number,
        required: 'You must supply coordinates!'
      }
    ],
    address: {
      type: String,
      required: 'You must supply an address!'
    }
  }
});

function preSave(next) {
  if (!this.isModified('name')) {
    next(); // skip it
    return; // stop this function from running
  }

  // @TODO: make more resilient so slugs are unique
  this.slug = slug(this.name);
  next();
}

storeSchema.pre('save', preSave);

module.exports = mongoose.model('Store', storeSchema);
