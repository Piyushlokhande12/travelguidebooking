import guide from "../models/guides.js"
import multer from "multer"

// export const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads")
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//     }
//   })
// }).single("image");

//create a new guide

export const createGuide = async (req, resp, next) => {

     const newguide=await new guide(req.body)
  try {
        const saveguide= await newguide.save()
        resp.status(200).send(saveguide)
        console.log(saveguide)
   
  }
  catch (error) {
    next(error)
  }
}


//get 1 guide
export const getguide = async (req, resp, next) => {
  try {
    const getguide = await guide.findOne({ _id: req.params.id })
    resp.status(200).send(getguide)
    console.log(getguide)
  }
  catch (error) {
    next(error)
  }
}
//get all guide
export const getallguide = async (req, resp, next) => {
  try {
    const getallguide = await guide.find()
    resp.status(200).send(getallguide)
  }

  catch (error) {
    next(error)
  }
}








  // const {name,city,image,state,country,price,fullprice,phone,desc}=req.body

  // {name:req.body.name,
  //   city:req.body.city,
  //   image:req.file.path,
  //   state:req.body.state,
  //   country:req.body.country,
  //   price:req.body.price,
  //   fullprice:req.body.fullprice,
  //   phone:req.body.phone,
  //   desc:req.body.desc}