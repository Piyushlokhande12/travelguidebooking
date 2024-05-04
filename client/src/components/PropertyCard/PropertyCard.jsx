import React from 'react'
import './PropertyCard.css'
import {AiFillHeart} from  'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from 'react-router-dom'

const PropertyCard = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../place/${card._id}`)}>
        <AiFillHeart size={24} color="white"/>
        <img src={card.photos} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        {/* <span>{card.distance}</span> */}
      </span>
      <span className="primaryText">{truncate(card.name, {length: 15})}</span>
      <span className="secondaryText">{truncate(card.desc, {length: 80})}</span>
      </div>
  )
}

export default PropertyCard