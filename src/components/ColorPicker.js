import React, { useState ,useEffect } from "react";
import { HexColorPicker } from "react-colorful";

export default function App({name , elevatorCart , setelevatorCart,toBeEdit,edit,settoBeEdit,setedit}) {
  const [color, setColor] = useState("#b32aa9");
  const [colorWait, setcolorWait] = useState(edit ? toBeEdit[`${name}`] : '');

useEffect(() => {
    
  if(edit){

setColor(toBeEdit[`${name}`])

  }
}, [edit])










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


  cartCreator = {...newcart ,[name]:color} 
    setelevatorCart([cartCreator])
}
    else{


    cartCreator = {...elevatorCart ,[name]:color }
    setelevatorCart(cartCreator)

    }

    }
    else{
        
       
        
        if(`{${colorWait}}` !== color){

       toBeEdit[`${name}`] = color 
       
    
    
    
    }
}
}, [color])








  return (
    <div className="color-picker" style={{padding:'20px', margin:'5px'}}>
        <p>{name}</p>
      <HexColorPicker color={color} onChange={setColor} />

      <div className="value" style={{padding:'10px'}}>{color}</div>

      
    </div>
  );
}
