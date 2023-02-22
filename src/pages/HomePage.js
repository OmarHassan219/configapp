import { Box, Typography  } from '@mui/material'

import { Stack } from '@mui/system'
import React from 'react'
import SideBar from '../components/SideBar'
import elevatorimg from "../assets/elevator2.jpg"
import esclatorimg from "../assets/Picture2.jpg"
import { useNavigate } from 'react-router-dom';

const HomePage = ({burger,setburger , setchoosenElevator , choosenElevator}) => {
const navigate = useNavigate()

const navigateelev =(e)=>{
    navigate('/home/elevator')
  setburger(false)
  
  }
const navigateesc =(e)=>{
    navigate('/home/escalator-config')
  setburger(false)
  
  
  }
  return (
    
    <Box className='homepage'>
   <Stack direction="row" sx={{width:'100%' ,height:"100%"}} >
    <SideBar setchoosenElevator={setchoosenElevator} choosenElevator={choosenElevator}/>
    <Box  sx={{width:'100%' ,  flex:{md:"1",lg:'0.8'}    }}>
    <Stack gap="20px" direction='row' alignItems="center" justifyContent="center" className='twoimage-container' sx={{width:'100%',height:'100%',flexWrap:'wrap'}}>
      <Box onClick={navigateelev} className='img-container'><img src={elevatorimg} alt="elevator" /> <Typography variant='h4' >Elevator</Typography>  </Box>
      <Box onClick={navigateesc} className='img-container' ><img src={esclatorimg} alt="esclator" /> <Typography variant='h4' >Esclator</Typography></Box>
       
       
    </Stack>

    </Box>




   </Stack>

    </Box>
  )
}

export default HomePage