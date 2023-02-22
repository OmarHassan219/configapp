import React,{useEffect , useState} from 'react'
import Radio from '../components/Radio'
import Number from "../components/Number"
import DropMenu from '../components/DropMenu'
import ColorPicker from '../components/ColorPicker'
import data from '../assets/data.json'

const EditElevator = ({toBeEdit,edit,settoBeEdit,setedit,handleEdit}) => {

const [elevdata,setelevdata]=useState([]);
  useEffect(() => {
    let chosenObject = data.find((each) => {
    
      return toBeEdit.name === each.ProductID.toLocaleLowerCase()
    })
    setelevdata(chosenObject)
    console.log(chosenObject)
  }, [])




  return (
    <div className='edit-elevator'>
    <div className='edit-container'>
        <p className='title' style={{width:'100%',color:'white',backgroundColor:"black" , fontSize:"18px",padding:'20px',textAlign:'center',marginBottom:'10px'}}>{toBeEdit.name}</p>
<div className='elev-features'>
      {
       elevdata.Characteristics?.map((char,i) => (
         char.Type === "dropdown" ?
      <DropMenu key={i} name={char.CharacteristicName} values={char.Value} required={char.IsMandatory} edit={edit} toBeEdit={toBeEdit} settoBeEdit={settoBeEdit} setedit={setedit}  />
         : char.Type === "radio" ? <Radio key={i} name={char.CharacteristicName} values={char.Value} required={char.IsMandatory}  edit={edit} toBeEdit={toBeEdit} settoBeEdit={settoBeEdit} setedit={setedit} />  : char.Type === "number" ?  <Number  key={i} name={char.CharacteristicName} values={(char.Value).toString()} required={char.IsMandatory} edit={edit} toBeEdit={toBeEdit} settoBeEdit={settoBeEdit} setedit={setedit}/> : <ColorPicker  key={i} name={char.CharacteristicName}  edit={edit}  toBeEdit={toBeEdit} settoBeEdit={settoBeEdit} setedit={setedit} />
       ))
       }

      </div>   
 <button onClick={handleEdit} className="elevatortocartbutton" type="submit" >Apply</button>  
    </div>

    </div>
  )
}

export default EditElevator