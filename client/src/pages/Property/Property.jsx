import React, { useState } from 'react'
import {useQuery} from 'react-query'
import {useLocation} from 'react-router-dom'
import { getProperty } from '../../utils/api'
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from 'react-icons/ai';
import "./Property.css";
import {useNavigate} from "react-router-dom"
import { MdLocationPin } from "react-icons/md";
import Map from '../../components/Map/Map';
import useAuthCheck from "../../hooks/useAuthCheck"
//  import img from "../../../public/images/teakri.jpg"
const Property = () => {
    const {pathname} = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    const {data, isLoading, isError} = useQuery(["resd", id], ()=> getProperty(id))
    var navigate=useNavigate();


// const { validateLogin } = useAuthCheck();


    if(isLoading)
    {return (
      <div className="wrapper">
        <div className="flexCenter paddings">
            <PuffLoader />
        </div>
      </div>
    )}

    if(isError)
    {
      return(
        <div className="wrapper">
          <div className="flexCenter paddings">
            <span>Error while fetching the property details</span>
          </div>
        </div>
      )
    }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">

               {/* like button */}
        <div className="like">
        <AiFillHeart size={24} color="black"/>
        </div>


       {/* image */}
        <img src={data.photos} alt="home image"/>
     


     <div className="flexCenter property-details">
      {/* //left */}
      <div className="left flexColStart">
        {/* //head */}
        <div className="fleStart">
        <span className="primaryText orangeText">{data?.name}</span>
        <hr></hr>
        <span className="primaryText">{data?.title}</span><br></br>
        <span className="orangeText" style={{ fontSize: "1.5rem" }}>{data?.distance} </span>
        </div>
       
        {/* description */}

        <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.desc}
            </span>

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              Rating {data?.rating}
            </span>

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              state : {data?.state}
            </span>

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              Type : {data?.type}
            </span>
 {/* address */}

 <div className="flexStart" style={{ gap: "1rem" }}> address  :<MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}{" "}
                {data?.city}{" "}
                {data?.country}
              </span>
            </div>

<button className="button"  onClick={()=>{navigate("/guide")}}>
  Book your Guide
</button>
 </div>




        <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
     </div>
      </div>
    </div>
    
  )
}

export default Property