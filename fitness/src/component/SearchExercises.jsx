import React,{useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';

const SearchExercises = () => {
    const [search, setSearch] = useState('')
    const handleSearch = async()=>{
      if(search){
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com');
      }
    }


  return (
    <>
          <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <h3 style={{fontSize:"44px", textAlign:"center"}}>Exercises for You</h3>
            <div style={{position:"relative", mb:"72px", }}>
            <TextField sx={{
              input:{fontWeight:"700", 
              border:'none', 
              borderRadius:'4px'},
              width:{lg:"800px", xs:"350"},
              backgroundColor:'#fff', 
              borderRadius:"40px"
            }}  
            height="76px" 
            value={search} 
            onChange={(e)=> setSearch(e.target.value.toLowerCase())} 
            placeholder='Search Exercise'/>

            <button className="search-btn" style={{backgroundColor:'#ff2625', 
              color:"#fff", 
              textTransform:"none", 
              width:{lg:"75px", xs:"80px"}, 
              fontSize:{lg:"20px", xs:"14px"},
              height:"56px",
              position:"absolute",
              right:"0"
              }}
              onClick={handleSearch}
              >
              Search
            </button>
            </div>
          </Stack>



    </> 
 )
}

export default SearchExercises