import React, { useState } from 'react'
// import Guide from '../../components/Guide/Guide'
import "./AddGuide.css"
const AddGuide = () => {
  const [name,setname]=useState("")
  const [state,setstate]=useState("")
  const [image,setimage]=useState("")
  const [price,setprice]=useState()
  const [fullprice,setfullprice]=useState()
  const [desc,setdesc]=useState("")
  const [phone,setphone]=useState()
  const [city,setcity]=useState("")

  async function registerguide(){
    var obj={name,image,desc,phone,city,state,price,fullprice}
    console.log("guide data",obj)
    fetch("http://localhost:8000/api/guide/createguide",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp,"post respond")
      })
    })

   }

  return (
    <div className='wrapper'>
      {/* <Guide></Guide> */}

    <h1 className="flexCenter">  Register As Guide  </h1>
    <div className="flexCenter">
    <input className='search-bar' value={name} type='text' placeholder='Enter your full name' onChange={(e)=>setname(e.target.value)}></input>
    <input className='search-bar' value={image} type='text' placeholder='Enter your image link '  onChange={(e)=>setimage(e.target.value)}></input>
    <input className='search-bar' value={price} type='number' placeholder='Enter price per place' onChange={(e)=>setprice(e.target.value)}></input>
    <input className='search-bar' value={fullprice} type='number' placeholder='Complete city tour price' onChange={(e)=>setfullprice(e.target.value)}></input>
    <input className='search-bar' value={phone} type='number' placeholder='Phone number' onChange={(e)=>setphone(e.target.value)}></input>
    <input className='search-bar' value={city} type='text' placeholder='City name' onChange={(e)=>setcity(e.target.value)}></input>
    <input className='search-bar' value={state} type='text' placeholder='State name' onChange={(e)=>setstate(e.target.value)}></input>
    <textarea className='search-bar' value={desc} type='text' placeholder='Describe experience ' onChange={(e)=>setdesc(e.target.value)}></textarea>
 <button onClick={registerguide} className='button'>Register</button>
    </div>

     </div>
  )
}

export default AddGuide
    {/* <pre>Upload Image In .Jpg Format :     </pre>
    <input className='button' type='file' onChange={(e)=>setimage(e.target.files[0])} ></input>   <br></br> */}


  //   var obj={name,image,desc,phone,city,state,price,fullprice}
  //  let response=await fetch("http://localhost:8000/api/guide/createguide",{
  //   method:"POST",
  //   body:JSON.stringify(obj)
  //  })
  //  response=await response.json()
  //  console.log("responded api post:::",response)