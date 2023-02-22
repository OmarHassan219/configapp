import { FormControl } from '@mui/material'
import { Select , MenuItem , InputLabel , TextField , FilledInput,FormHelperText , InputAdornment} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React , {useState  ,useEffect} from 'react'
import data from '../assets/escalator.json'
import img1 from '../assets/cris cross escalator.jpg'
import img2 from '../assets/multi escalators_orig_full.jpg'
import img3 from '../assets/parallel.jpg'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid';

import { Box } from '@mui/system'





const EscalatorConfig = ({cart,setcart}) => {
  


const navigate = useNavigate()

  
  
  const dataa  = data[0].escalatortypes
  
  
  const [EscalatorType, setEscalatorType] = useState('')
  const [num, setnum] = useState('parallel')
  const [MotorType, setMotorType] = useState('')
  const [height, setheight] = useState('')
  const [width, setwidth] = useState('')
  const [speed, setspeed] = useState('')
  const [power, setpower] = useState('')
  
 

const [escalatorcart, setescalatorcart] = useState([{type:'' , motor:'' , height:0 , width:0 , speed:0, power:0 }])


const handletypeChange = (event) => {
  setnum(event.target.value)
  setEscalatorType(event.target.value);
  document.querySelectorAll('.bar p').forEach(one =>{
    one.classList.remove('active')
    
  })
  document.getElementById(`${event.target.value}`).classList.add("active")

};
const handleMotortypeChange = (event) => {
  setMotorType(event.target.value);
};
const handleheight = (event) => {
  setheight(event.target.value);

};
const handlewidth = (event) => {
  setwidth(event.target.value);

};
const handlespeed = (event) => {
  setspeed(event.target.value);

};
const handlepower = (event) => {
  setpower(event.target.value);

};





const handlesubmit = (e) =>{
  e.preventDefault()
  let esclatorCart = [{type:EscalatorType , 
      motor:MotorType , 
      height:height ,
      speed:speed,
      width:width,
      power:power,
    id:uuid()}]
  setescalatorcart(esclatorCart)
  let forwording
  forwording =  esclatorCart.map(eachesc =>{
   return  eachesc
})
setcart([...cart , ...forwording])
localStorage.setItem('cart' , JSON.stringify([...cart , ...forwording]))

navigate('/cart')
}



const handleBar = (e) =>{
  if(e.target.classList.contains('type')){

    document.querySelectorAll('.bar p').forEach(one =>{
      one.classList.remove('active')
      
    })

    e.target.classList.add('active')
    
    setnum((e.target.innerHTML.slice(0 , e.target.innerHTML.indexOf("E")-1)).toLowerCase()    )
  }

}





  return (
    <div className='esc'>
    <div className='esc-container'>
        <div className='esc-content'>
     <div className='esc-left'>
    <div className='bar' onClick={(e)=>handleBar(e)}>
    <p className='type active' id='parallel'>Parallel Escalator</p>
    <p className='type' id='criss cros'>Criss Cros Escalator</p>
    <p className='type' id='multi parallel'>Multi Parallel Escalator</p>

    </div>
    <div className='esc-image'>
      

  <img  src={num === 'parallel'? img3 : num === 'multi parallel' ? img2 : img1} alt='criss cros escalator'   /> 



    </div>
    
     </div>
     <div className='esc-right'>


    <h2>Escalator</h2>
    <div className='esc-right-content'>
    <h6 style={{marginBottom:"20px"}}>Details</h6>
      <Box component='form'
      
      onSubmit={handlesubmit}
      >
    <div className='esc-userselection'>
    <FormControl style={{marginBottom:"20px"}} variant="filled"  className='esc-type'>
<InputLabel required={true} id="demo-simple-select-filled-label">Escalator Type</InputLabel>
    <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={EscalatorType}
          onChange={handletypeChange}
          required={true}
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {dataa[0].value.map((type , i) => (

<MenuItem key={i} value={type.toLowerCase()}>{type}</MenuItem>



          ))}
        </Select>
</FormControl>
    <FormControl style={{marginBottom:"20px"}} variant="filled"  className='esc-type'>
<InputLabel required={true} id="demo-simple-select-filled-label">Motor Type</InputLabel>
    <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={MotorType}
          onChange={handleMotortypeChange}
          required={true}
 
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {dataa[1].value.map((type , i) => (

<MenuItem key={i} value={type.toLowerCase()}>{type}</MenuItem>


          ))}
        </Select>
</FormControl>



 <FormControl style={{display:"block"}}  className='esc-type' variant="filled">
          <FilledInput
          className='esc-type'
            required = {true}
            id="filled-adornment-height"
            value={height}
            onChange={handleheight}
            endAdornment={<InputAdornment position="end">ft</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'Height',
              
            }}
          />
             <FormHelperText id="filled-weight-helper-text">Escalator Height</FormHelperText>
             </FormControl>






 <FormControl style={{display:"block"}} className='esc-type' variant="filled">
          <FilledInput
          className='esc-type'
            id="filled-adornment-width"
            value={width}
          required={true}

            onChange={handlewidth}
            endAdornment={<InputAdornment position="end">ft</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'width',
            }}
          />
             <FormHelperText id="filled-weight-helper-text">Escalator width</FormHelperText>
             </FormControl>
 <FormControl style={{display:"block"}} className='esc-type' variant="filled">
          <FilledInput
          className='esc-type'
            id="filled-adornment-width"
            value={speed}
          required={true}

            onChange={handlespeed}
            endAdornment={<InputAdornment position="end">ft/s</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'speed',
            }}
          />
             <FormHelperText id="filled-weight-helper-text">Escalator Speed</FormHelperText>
             </FormControl>
 <FormControl style={{display:"block"}} className='esc-type' variant="filled">
          <FilledInput
          className='esc-type'
            id="filled-adornment-width"
            value={power}
          required={true}

            onChange={handlepower}
            endAdornment={<InputAdornment position="end">Kwatts</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'speed',
            }}
          />
             <FormHelperText id="filled-weight-helper-text">Power required for Escalator</FormHelperText>
             </FormControl>












    </div>

       <button className='tocart-button' type='submit'>Add To Cart</button>
       </Box>
    </div>
    
     </div>
         
         
    
    
    
    
    
    
    
        </div>
    </div>
    
    
    
    
    

    
        </div>
    
    
  )
}

export default EscalatorConfig