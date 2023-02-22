import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields({name,values,required,elevatorCart , setelevatorCart , toBeEdit,edit,settoBeEdit,seteditedit}) {
  const [valueNum, setvalueNum] = React.useState(values);

 
  const handleChange = (event,namee) => {
    setvalueNum(event.target.value);
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
  cartCreator = {...newcart ,[name]:valueNum} 
    setelevatorCart([cartCreator])
}
    else{
    cartCreator = {...elevatorCart ,[name]:valueNum }
    setelevatorCart(cartCreator)

    }
    }
    else{
        setvalueNum(toBeEdit[`${name}`])

    }

}, [valueNum,edit])







  return (
    <Box

      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' , p:'10px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
         <TextField
          id="outlined-number"
          label={name}
          type="number"
          className={`${required ? 'isrequired':'notrequired'} `}
          required={required}
          value={valueNum}
         onChange={(event) => handleChange(event,name)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
     
    </Box>
  );
}