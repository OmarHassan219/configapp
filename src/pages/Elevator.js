import { Box, Typography, Button  } from '@mui/material'
import { Stack } from '@mui/system'
import React , {useState ,useEffect} from 'react'
import image from '../assets/elevator.jpg'
import { useNavigate } from 'react-router-dom'
import data from '../assets/data.json';





const Elevator = ({setchoosenElevator , choosenElevator}) => {
const [imageChosen, setimageChosen] = useState('')
const navigate =useNavigate()

const handleChosenElev = (elevtype) => {

setchoosenElevator(elevtype)

localStorage.setItem('helev' , elevtype)



}




useEffect(() => {
    let chosenObject = data.find((each) => {
    
      return choosenElevator === each.ProductID.toLocaleLowerCase()
    })
    setimageChosen(chosenObject.Image)
  }, [choosenElevator])

const toElevConfigPage =()=>{
navigate(`elevator-${choosenElevator}`)



}

useEffect(() => {
    if(choosenElevator === 'h200'){

        document.querySelectorAll(".elevator-options .elev-circle")[0].style.borderColor = 'blue'
        document.querySelectorAll(".elevator-options .elev-circle")[1].style.borderColor = '#ccc'
    }else
    if(choosenElevator === 'h300'){
        document.querySelectorAll(".elevator-options .elev-circle")[0].style.borderColor = '#ccc'

        document.querySelectorAll(".elevator-options .elev-circle")[1].style.borderColor = 'blue'
    }
 
}, [choosenElevator])




  return (
    <Box   className="elevator">
<Stack  sx={{height:"100%" , gap:'10%' , flexWrap:"wrap"}} className="ele" direction="row"  justifyContent='center'> 

<div className='elevator-image'>

<img src={imageChosen} alt='elevator' />

</div>




<div  style={{marginTop:"50px" , display:"flex" , flexDirection:"column"}}  className='elevator-text'> 
<Typography variant='h3'>
Homelift <br/> Configurator
</Typography>
<Typography  style={{marginBottom:"50px" }} className='elevator-select'>select a model to start the configuration</Typography>
<div className='elevator-content'>


<div style={{marginBottom:"35px" , display:"flex"}} onClick={() => handleChosenElev("h200")} className='elevator-options'>
<span  className='elev-circle'></span>
<div className='elev-option'>
<Typography variant='h5' style={{marginBottom:"10px" , fontWeight:"bold"}}>H200</Typography>
<p>Our hydraulic home lift is reliable <br/> and remarkably versatile and <br/> adaptable</p>
</div>
</div>




<div style={{ display:"flex"}} onClick={() => handleChosenElev("h300")} className='elevator-options'>
<span className='elev-circle'></span>
<div className='elev-option'>
<Typography  variant='h5' style={{marginBottom:"10px" , fontWeight:"bold"}}>H300</Typography>
<p>Our premium gearless technology <br/> offers a fully electric solution which<br/> is extremely energy efficient and is<br/> near silent</p>
</div>
</div>






</div>


<Button onClick={toElevConfigPage} style={{padding:"25px 20px" , marginTop:"20px" , width:"fit-content" }} color="primary" variant="contained" size='large'>
  Start
</Button>



</div>



</Stack>





    </Box>
  )
}

export default Elevator