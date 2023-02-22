import React,{useEffect} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';


export default function ControlledRadioButtonsGroup({name,values,required,elevatorCart , setelevatorCart , toBeEdit,edit,settoBeEdit,setedit}) {
  const [value, setValue] = React.useState('');
 
  const handleChange = (event) => {
    setValue(event.target.value);
    if(edit){
    toBeEdit[`${name}`] = event.target.value
    console.log(toBeEdit)
  }
    
  };






useEffect(() => {
    if(!edit){
  let cartCreator
let checkIfFound 
let newcart
if (elevatorCart?.length > 1){
   checkIfFound = elevatorCart.find(eachobj => Object.keys(eachobj).join() === {name} )
    }
if(checkIfFound){
 newcart = [...elevatorCart].filter((each) => {
    return Object.keys(each).join() !== {name}
  })
  cartCreator = {...newcart ,[name]:value} 
    setelevatorCart([cartCreator])
}
    else{
    cartCreator = {...elevatorCart ,[name]:value }
    setelevatorCart(cartCreator)

    }
    }
    else{
        setValue(toBeEdit[`${name}`])
    }

}, [value ,edit])













  return (
    <Box sx={{ minWidth: 120 , p:'10px'}}>
    
      <label id="demo-controlled-radio-buttons-group">{name}</label>
      <RadioGroup
          className={`${required ? 'isrequired':'notrequired'} `}

        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        required={required}
      >
          
          {
            values.length > 1 ?
          values?.map((each,i) =>(
            <FormControlLabel key={i} value={each} control={<Radio />} label={each} />
          )) 
          :  <FormControlLabel value={values.toString()} control={<Radio />} label={values.toString()} />
          
          }

      </RadioGroup>
    
    </Box>
  );
}