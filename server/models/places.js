import mongoose from 'mongoose';
const { Schema } = mongoose;

const placesSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  photos: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  // guides: {
  //   type: [String],
  // },

});

export default mongoose.model("places", placesSchema)