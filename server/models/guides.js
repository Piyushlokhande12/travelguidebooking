import mongoose from 'mongoose';
const { Schema } = mongoose;

const guideSchema = new Schema({

  name: {
    type: String,
      },
  city: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
     },
  fullprice:{
    type: Number,
  },
  phone:{
    type: Number,
     },
  desc: {
    type: String,
    },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  state: {
    type: String,
  },
  // country: {
  //   type: String,
  // },
  });

export default mongoose.model("guide", guideSchema)