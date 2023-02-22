import React,{useState,useEffect} from 'react'
import { Stack } from '@mui/system'
import image from '../assets/elevator.jpg'
import data from '../assets/data.json';
import DropMenu from '../components/DropMenu'
import Radio from '../components/Radio'
import Number from '../components/Number'
import { useNavigate } from 'react-router-dom'
import ColorPicker  from '../components/ColorPicker'
import uuid from 'react-uuid';

const ElevatorCconfig = ({setchoosenElevator , choosenElevator ,elevatorCart , setelevatorCart , cart,setcart }) => {
  const navigate = useNavigate()

  const [elevdata,setelevdata]=useState([]);
  useEffect(() => {
    let chosenObject = data.find((each) => {
    
      return choosenElevator === each.ProductID.toLocaleLowerCase()
    })
    setelevdata(chosenObject)
  }, [])
  
  const handleForm = (e) => {
   
   let elevator = [{...elevatorCart,name:choosenElevator ,id:uuid()}]
   setelevatorCart(elevator)
   let forwording
  forwording =  elevator.map(eachelev =>{
   return  eachelev
  })
   setcart([...cart , ...forwording])
      localStorage.setItem('cart' , JSON.stringify([...cart , ...forwording]))

   e.preventDefault()

navigate('/cart')
   

  }


  return (
   <Stack className="config-page" direction='row' sx={{flexWrap:"wrap"}}>
    <div className='img-container'>
        <img src={elevdata.Image} alt={elevdata.ProductID}  />
    </div>
    <div className='right-side-sec'>
      <form onSubmit={handleForm} className='form'>
    <p className='title'>{elevdata.ProductID}:<span>{elevdata.ProductDescription}</span></p>
     <div className='elev-features'>
      {
       elevdata.Characteristics?.map((char,i) => (
         char.Type === "dropdown" ?
      <DropMenu key={i} name={char.CharacteristicName} values={char.Value} required={char.IsMandatory} elevatorCart={elevatorCart}  setelevatorCart={setelevatorCart} />
         : char.Type === "radio" ? <Radio key={i} name={char.CharacteristicName} values={char.Value} required={char.IsMandatory}  elevatorCart={elevatorCart}  setelevatorCart={setelevatorCart} />  : char.Type === "number" ?  <Number key={i} name={char.CharacteristicName} values={(char.Value).toString()} required={char.IsMandatory} elevatorCart={elevatorCart}  setelevatorCart={setelevatorCart} /> : <ColorPicker  key={i} name={char.CharacteristicName}  elevatorCart={elevatorCart}  setelevatorCart={setelevatorCart}   />
       ))
       }

      </div>   
      <button className="elevatortocartbutton" type="submit" >Add To Cart</button>  

       </form>
    </div>
    
    
    
    </Stack>




  )
}

export default ElevatorCconfig