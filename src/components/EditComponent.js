import React , {useState}   from 'react'
import { FormControl } from '@mui/material'
import { Select , MenuItem , InputLabel  , FilledInput,FormHelperText , InputAdornment} from '@mui/material'
import { Box } from '@mui/system'
import data from '../assets/escalator.json'
import {AiFillCloseCircle} from "react-icons/ai"


const EditComponent = ({item , cart , setcart , seteditesc}) => {

    const [EscalatorType, setEscalatorType] = useState(item.type)
    const [MotorType, setMotorType] = useState(item.motor)
    const [height, setheight] = useState(item.height)
    const [width, setwidth] = useState(item.width)
    const [speed, setspeed] = useState(item.speed)
    const [power, setpower] = useState(item.power)

    const handletypeChange = (event) => {
        setEscalatorType(event.target.value);
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


      const dataa  = data[0].escalatortypes







      const handlesubmit = (e) =>{
        e.preventDefault()
        let esclatoreditCart = [{type:EscalatorType , 
            motor:MotorType , 
            height:height ,
            speed:speed,
            width:width,
            power:power}]
        // setescalatorcart(esclatorCart)
        let forwording
        forwording =  esclatoreditCart.map(eachesc =>{
         return  eachesc
      })
      const updatedCartItems = cart.map((cartProduct) => {
          if(cartProduct.id === item.id){
            return {
                ...cartProduct,
                type: esclatoreditCart[0].type , 
                motor: esclatoreditCart[0].motor,
                height: esclatoreditCart[0].height,
                speed: esclatoreditCart[0].speed,
                width: esclatoreditCart[0].width,
                power: esclatoreditCart[0].power,
                
              }
        }  else return cartProduct

            
        })
        console.log(updatedCartItems , "up")

      setcart(updatedCartItems)
      localStorage.setItem('cart' , JSON.stringify(updatedCartItems))

      
      seteditesc()
      }

























  return (
    <div  className='esc-content edit'>
{console.log(item)}
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

   <button className='tocart-button' type='submit'>Edit</button>
   </Box>
</div>

 </div>








    </div>
  )
}

export default EditComponent