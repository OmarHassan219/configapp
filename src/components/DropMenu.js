import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
export default function BasicSelect({name,values,required,elevatorCart , setelevatorCart , toBeEdit,edit,settoBeEdit,setedit}) {
  const [certainvalue, setcertainvalue] = React.useState('');
 let cartCreator
let checkIfFound 
let newcart
  const handleChange = (event,namee) => {
    setcertainvalue(event.target.value);
    if(!edit){
    if (elevatorCart.length > 1){
   checkIfFound = elevatorCart.find(eachobj => Object.keys(eachobj).join() === namee )
    }
if(checkIfFound){
 newcart = [...elevatorCart].filter((each) => {
    return Object.keys(each).join() !== namee
  })
  cartCreator = {...newcart ,[name]:event.target.value} 
    setelevatorCart([cartCreator])
}
    else{
    cartCreator = {...elevatorCart ,[name]:event.target.value }
    setelevatorCart(cartCreator)

    }
  }
  else{
    toBeEdit[`${name}`] = event.target.value
    console.log(toBeEdit)
  }
  };

useEffect(() => {
 if(edit){

  setcertainvalue(toBeEdit[`${name}`])


 }
}, [edit])





  return (
    <Box sx={{ minWidth: 120 , p:'10px'}}>
      <FormControl fullWidth>
      
          
        <InputLabel  required={required}
         id="demo-simple-select-label">{name}</InputLabel>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={certainvalue}
          label={name}
          onChange={(event) => handleChange(event,name)}
          required={required}
        >
          {
            values.length > 1 ?
          values?.map((each,i) =>(
            <MenuItem key={i} value={each}>{each}</MenuItem>
          )) 
          :  <MenuItem value={values.toString()}>{values.toString()}</MenuItem>
          
          }
          
        </Select>
       
       
      </FormControl>
    </Box>
  );
}