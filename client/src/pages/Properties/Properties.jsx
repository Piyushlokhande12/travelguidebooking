import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Properties.css'
import useProperties from '../../hooks/useProperties'
import {PuffLoader} from 'react-spinners'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import { property } from 'lodash'

const Properties = () => {
const [filter,setfilter]=useState("")
  const {data, isError, isLoading} = useProperties()
  
  if(isError){
    return(
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader
        height="80"
        width="80" 
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
        />
      </div>
    )
  }
  return (
    <div className="wrapper">
        <div className="flexColCenter paddings innerWidth properties-container" >
          <SearchBar filter={filter} setfilter={setfilter} />

          <div className="paddings flexCenter properties">
            {
              // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))
              data.filter((property)=>property.name.toLowerCase().includes(filter.toLowerCase()) || 
              property.city.toLowerCase().includes(filter.toLowerCase())||
              property.state.toLowerCase().includes(filter.toLowerCase())||
              property.country.toLowerCase().includes(filter.toLowerCase())
            
            ).map((card, i)=> (<PropertyCard card={card} key={i}/>))
            }
          </div>
        </div>
    </div>
  )
}

export default Properties