import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const SearchBar = ({filter,setfilter}) => {
  return (
    <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input placeholder='search by city/state/country/placename' type="text" value={filter} onChange={(e)=>setfilter(e.target.value)} />
            <button className="button">Search</button>
          </div>
  )
}

export default SearchBar