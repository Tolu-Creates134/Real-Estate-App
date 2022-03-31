import React from 'react'
import './styles.css'
import { FaBed } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa'
import { BsFillGridFill } from 'react-icons/bs'
import millify from 'millify'


export const PropertyCard = ({property}) => {
  return (
    <div className='property-card'>
        <img className='property-image' src={property?.coverPhoto?.url} alt='property'/>

        <div className='property-header'>
            <h3>AED {property.price}{property.rentFrequency && `/${property.rentFrequency}`}</h3>
            <img className='agency' src={property?.agency?.logo?.url} alt='avatar'/>
        </div>

        <div className='property-details'>
            <span>{property?.rooms} <i><FaBed/></i></span> | <span>{property?.baths} <i><FaBath/></i></span> | <span>{millify(property.area)} sqft <BsFillGridFill/></span>
        </div>

        <div className='property-desc'>
            {property.title > 30 ? property.title.substring(0, 30) + '...' : property.title  }
        </div>
    </div>

                
            






  )
}
