import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import {Table} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import "./list.css";
// import { property } from 'lodash'
const List = () => {
  const [filter,setfilter]=useState("")
const [data,setdata]=useState([])

useEffect(()=>{
  fetch("http://localhost:8000/api/guide").then((result)=>{
    result.json().then((resp)=>{
      setdata(resp)
      })})
},[])
console.log(data)

var navigate=useNavigate();


  return (
    <div className='wrapper'>
        <div className="flexColCenter paddings innerWidth properties-container" >
       <SearchBar filter={filter} setfilter={setfilter} />

       <div className="paddings flexCenter properties">
       <h2>   Guide Details   ...    </h2> 
     
         
    <Table className="paddings ">
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          {/* <th>Phone</th> */}
          <th>City</th>
          {/* <th>State</th> */}
          <th>Price</th>
          {/* <th>Days</th> */}
          <th>Book Now</th>
   
        </tr>
      </thead>
      <tbody >
{
  data.filter((guide)=>guide.name.toLowerCase().includes(filter.toLowerCase()) || 
  guide.city.toLowerCase().includes(filter.toLowerCase())||
  guide.state.toLowerCase().includes(filter.toLowerCase())

).map((item,i)=>
  <tr key={i}>
  {/* <td className="paddings  ">{i+1}</td> */}
  <td className="paddings flexColCenter paddings  "><img className='size' src={item.image} alt='guide info'></img></td>
  <td className="paddings  ">{item.name}</td>
  <td className="paddings  ">{item.desc}</td>
  {/* <td className="paddings  ">{item.phone}</td> */}
  <td className="paddings  ">{item.city}</td>
  {/* <td className="paddings  ">{item.state}</td> */}
  <td className="paddings  ">{item.price} /day</td>
  {/* <td><button onClick={()=>setcount(count+1)}>+ {count} </button> </td> */}
  <td><button className="button"  onClick={()=>{navigate(`../guide/${item._id}`)}} style={{color:'white'}}>Book</button></td>

</tr>)
}
      </tbody>
    </Table>

    </div>    
</div>
    </div>
  )
}

export default List



















