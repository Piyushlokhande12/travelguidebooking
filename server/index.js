import express from 'express';
 import dotenv from 'dotenv';
 import cookieParser from 'cookie-parser';
 import cors from 'cors';
 import mongoose from 'mongoose';
 import userRoute from "./routes/userroute.js"
 import placeRoute from "./routes/placeroute.js"
 import guideroute from "./routes/guideroute.js"
import Stripe from 'stripe';
const stripe=Stripe("sk_test_51PBWzASAHfTmlivfPCRj8gnUJp6C1r0CZ0TsnfEM3jdCRloh4uQetEsdbyYzNj80dxCIc8xr9XLKgHzOlwV47YsX00cKeETeIh")
 dotenv.config()

const app = express();

const PORT = process.env.PORT 

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api/user',userRoute)
app.use('/api/place',placeRoute)
app.use("/api/guide",guideroute)
// app.use("/uploads",express.static("./uploads"))

//............................
//payment api 
app.post("/api/create-checkout-session",async (req, resp) => {
     const {products,qty}=req.body;
     console.log(products,"now",qty,"information")
    
  const lineItems=products.map((product)=>({
          price_data:{
          currency:"inr",
          product_data:{
                  name:product.name,
                
                  
          },
          unit_amount:product.price*100,
      },
      quantity:qty

  }))
   const session=await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      line_items:lineItems,
      mode:"payment",
      success_url:"http://localhost:5173",
      cancel_url:"http://localhost:5173/guide",

  })
  resp.json({id:session.id})
   })

//............................
//checking mongoose connection
async function connect(){
    try {
      await mongoose.connect(process.env.DATABSE_URL);
      console.log("connected to db")
    } catch (error) {
      throw error
    }
    }


//checking middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(PORT, ()=> {
  connect()
    console.log(`Server is running on port ${PORT}`);
});