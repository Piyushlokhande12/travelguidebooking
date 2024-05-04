import Placemod from "../models/places.js"
export const createPlace=async (req,resp,next)=>{

    const touristplace= await new Placemod(req.body)
    try{
    const saveplaces= await touristplace.save()
    resp.status(200).send(saveplaces)
    console.log(saveplaces)
    }
    catch(error){
  next(error)
    }
    }

    export const getallPlace=async (req,resp,next)=>{
        
         try{const getallplaces=  await Placemod.find()
           
             resp.status(200).send(getallplaces)
           } 
            catch(error){
            next(error)
         }
     }

     //const { min, max, ...others } = req.query; 
    //  {
    //     ...others,
    //     distance: { $gt: min | 1, $lt: max ||12000 },
    //   }



    export const getPlace=async (req,resp,next)=>{
        try{  
            const getplaces= await Placemod.findOne({_id:req.params.id})
            resp.status(200).send(getplaces)
            console.log(getplaces)
            }
            catch(error){
            next(error)
        }
     }




     
//featured user or fav place
// export const getallPlace=async (req,resp,next)=>{
//   const { min, max, ...others } = req.query; 

  

//  // find({...others,distance:{ $gt:min |1,$lt:max ||100000},}).limit(4)
//    try{const getallplaces=  await Placemod.find({
//      ...others,
//      distance: { $gt: min | 1, $lt: max ||12000 },
//    }).limit(4)
     
//        resp.status(200).send(getallplaces)
//      } 
     
//      catch(error){
//       next(error)
//    }
// }