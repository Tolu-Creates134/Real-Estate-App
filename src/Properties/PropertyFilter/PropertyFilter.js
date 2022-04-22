import React, {useState} from 'react'
import { Select, MenuItem, InputLabel, FormControl, Container } from '@mui/material'
import { filterData } from './FilterData'
import './PropertyFilter.css'



export const PropertyFilter = ({setQuery, query,}) => {
  const [filters] = useState(filterData)


  const [values, setValues] = useState({})

  const handleChange = (event) => {
    const {name, value} = event.target

    setValues({...values,
      [name] : value
    })

    setQuery({...query,
      [name] : value

    })

  }



  console.log(values)
  console.log(query)

  




  





  return (
    <Container maxWidth='xl'>
      <h1 className='title'>Search Filters</h1>
      
      <div className='filter' style={{display: 'flex',padding: '50px, 0px'}}>

        {filters.map((filter) => (
          <FormControl key={filter.queryName} fullWidth sx={{mr: 3}} >
            <InputLabel>
                {filter.placeholder}
            </InputLabel>
            <Select label= {filter.placeholder} name={filter.queryName} onChange={handleChange}>
              {filter?.items?.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </div>


      


          
          
      


    </Container>
  )
}
