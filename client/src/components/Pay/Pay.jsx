import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import {useQuery} from 'react-query'
import { getguide } from '../../utils/api'
import {Table} from "react-bootstrap"
import {loadStripe} from '@stripe/stripe-js';


const Pay = () => {
   const [count,setcount]=useState(1)
   const [x,setx]=useState(true)
     const {pathname} = useLocation()
  const id = pathname.split("/").slice(-1)[0]
  const {data, isLoading, isError} = useQuery(["resd", id], ()=> getguide(id))
    var datas=[data,]
  console.log(datas)
  console.log(count)

  const makepayment=async()=>{
       alert("PROCEED TO PAYMENT")
   const stripe = await loadStripe("pk_test_51PBWzASAHfTmlivfW0vIB2fQi35JR71FNSOzDftTDR1F0Gv4CtpiiZl6xhXjXM56PFiAyFn5b6zCAj74cp7wv1zc00fph2n0SP");
 const body={
    products:datas,
    qty:count
    }
  const headers={
      "Content-Type":"application/json"
    }
 const response=await fetch("http://localhost:8000/api/create-checkout-session",{
 method:"POST",
headers:headers,
body:JSON.stringify(body)
 })
const session= await response.json();
console.log(session,"pp")
const result=stripe.redirectToCheckout({
  sessionId:session.id
})
if(result.error){
    console.log(result.error)
  }
    }



  return (
    <div className='wrapper'>
     <h1 className="paddings flexCenter properties">My Cart</h1>

{ x?
  

<Table className="paddings ">
      <thead>
      <tr>
       <th></th>
          <th>Name</th>
          <th>City</th>
          <th>Price</th>
          <th>Day</th>
          <th>Total Amount</th>
          <th>PAY Now</th>
          <th>Cancel Now</th>
          </tr>
          </thead>
     <tbody>
      <tr>
        <td>  <img className='size' src={data?.image} alt="img"/></td>
        <td>{data?.name}</td>
     <td >{data?.city}</td>
     <td >{data?.price} /day</td>
     <td><button onClick={()=>setcount(count+1)}> + {count} </button> </td>
     <td>{count*data?.price}</td>
     <td><button onClick={makepayment} className='button'>PAY</button></td>
    <td> <button onClick={()=>setx(false)} className='buttons'>CANCEL</button></td>
    </tr>
    </tbody>
  </Table>:
  null
}   
    </div>
  )
}

export default Pay


