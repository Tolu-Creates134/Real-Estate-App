import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { PropertyFilter } from './PropertyFilter/PropertyFilter'
import { PropertyCard } from './PropertyCard/PropertyCard'
import { GiArchiveResearch } from 'react-icons/gi'

export const Properties = () => {

  const [properties, setProperties] = useState([])
  
  const queries = {
    purpose : 'for-sale',
    rentFrequency : 'yearly',
    minPrice : '0',
    maxPrice : '1000000',
    roomsMin : '0',
    bathsMin : '0',
    sort : 'price-desc',
    areaMax : '35000',
    locationExternalIDs : '5002,6020',
    categoryExternalID : '4'
  }
  
  const [query, setQuery] = useState(queries)


  const baseUrl = 'https://bayut.p.rapidapi.com'

  const fetchProperty = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
          'X-RapidAPI-Key': '8af1c3ead2mshd03828501ed5807p165ec6jsn56b09973cc78'
        }
    })

    setProperties(data?.hits)
  }

 
  useEffect(() => {
    fetchProperty(`${baseUrl}/properties/list?locationExternalIDs=${query.locationExternalIDs}&purpose=${query.purpose}&categoryExternalID=${query.categoryExternalID}&bathsMin=${query.bathsMin}&rentFrequency=${query.rentFrequency}&priceMin=${query.minPrice}&priceMax=${query.maxPrice}&roomsMin=${query.roomsMin}&sort=${query.sort}&areaMax=${query.areaMax}&hitsPerPage=24`)

    

  }, [query])

  console.log(properties)



  return (
    <div>
    
      <h1 className='title' style={{textAlign: 'center', color: '#2860d2'}}>
        CHECK OUT OUR PROPERTIES
      </h1>
      <PropertyFilter setQuery={setQuery} query={query}/>
      {properties.length < 1 && (
        <div style={{ color: 'gray', textAlign: 'center', marginTop: '25px'}} >
        <i style={{fontSize: '150px'}}><GiArchiveResearch/></i>
        <h1>No Results Found</h1>
        </div>
      )}
      <div className='property-cards' style={{display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center'}}>
        {properties.map((property) => (
          <PropertyCard property={property} key={property.id}/>
        ))}
      </div>

    
 


    </div>
  )
}
