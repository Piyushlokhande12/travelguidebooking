import express from "express";
import { createGuide,getallguide,getguide} from "../controller/guidecntrl.js";
const router = express.Router();
//CREATE
router.post("/createguide",createGuide);

//GET

router.get("/:id", getguide);
//GET ALL

router.get("/", getallguide);


export default router;

// import stripes from "stripe"
// const stripe=process.env.STRIPE_SECRET

// router.post("/create-checkout-session",async (req, resp, next) => {
//     const {products}=req.body;
// const lineItems=products.map((product)=>({
    //     price_data:{
//         currency:"usd",
//         product_data:{
    //             name:product.name
//         },
//         unit_amount:Math.round(product.price*100),
//     }
// }))
// const session=await stripes.Checkout.session.create({
//     payment_metod_type:["datas"],
//     line_items:lineItems,
//     mode:"payment"
// })
// resp.json({id:session.id})
// })


//front
// import {loadStripe} from '@stripe/stripe-js';
// const datas=[data]
//   async function makepayment(){
//       alert("ok")
//       const stripe = await loadStripe('pk_test_51PBWzASAHfTmlivfW0vIB2fQi35JR71FNSOzDftTDR1F0Gv4CtpiiZl6xhXjXM56PFiAyFn5b6zCAj74cp7wv1zc00fph2n0SP');
//   const body={
//       products:datas
//     }
//     const headers={
//         "content-type":"application/json"
//       }
// const response=await fetch(`../guide/${id}/create-checkout-session`,{
//   method:"POST",
//   headers:headers,
//   body:JSON.stringify(body)
// })
// const session=await response.json();
// const result=stripe.redirectToCheckout({
//     sessionId:session.id
//   })
//   if(result.error){
//       console.log(result.error)
//     }
//       }