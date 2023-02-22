import React,{useState} from 'react'
import { Box, Typography  } from '@mui/material'
// import {AddIcon} from '@mui/icons-material/Add'
import {IoIosRemove} from 'react-icons/io'
// import {removeicon} from '@mui/icons-material/Remove';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
// import {minimize} from '@mui/icons-material/Minimize';
import { motion } from 'framer-motion';
const SideBar = ({setchoosenElevator , choosenElevator}) => {
const [catOpen, setcatOpen] = useState(false)
const [elevOpen, setelevOpen] = useState(false)
const [escOpen, setescOpen] = useState(false)

const navigate = useNavigate()

const navigatetoelevators =(e,parameter)=>{
setchoosenElevator(parameter)

    navigate('/home/elevator')
  
  
  }







const heightIncrease = {
    visible:{height:'fit-content',marginBottom:'20px',overflow:'hidden'},
    hidden:{height:0 , overflow:'hidden',marginBottom:0},
     transition:{type:'spring',duration:'0.5s'}
}

const comingFromLlet = {
    visible:{x:0,overflow:'hidden',transition:{type:'spring',duration:'0.5s',damping:16}},
    hidden:{x:'-100vw' , overflow:'hidden'}
     
}



  return (
    <Box className='sidebar' sx={{p:"20px" , bgcolor:"rgb(237 237 237)",flex:'0.3'   }}>
      <div className='cat'
      
      
      >
       <Typography onClick={() => setcatOpen(!catOpen)}  variant="h4" >
       {catOpen ? <AiOutlinePlus className='add-icon'/> : <IoIosRemove className='minus-icon' />}
       Categories
       </Typography>
    
            <motion.div className='sub-cat' 
            variants={comingFromLlet}
            initial={catOpen ?"visible":"hidden"}
            animate={catOpen ? "hidden":"visible"}
            >
          <Typography onClick={() => setelevOpen(!elevOpen)}  variant="h4" >
       {elevOpen ? <AiOutlinePlus className='add-icon'/> : <IoIosRemove className='minus-icon' />}
       Elevator
       </Typography>
            <motion.div  className='sub-sub'
            
            variants={heightIncrease}
            initial={elevOpen ?"visible":"hidden"}
            animate={elevOpen ? "hidden":"visible"}
            
            >
                <Typography style={{cursor:'pointer'}} variant="h5" onClick={(e) => navigatetoelevators(e,'h200')} >
       <AiOutlineMinus  className='ruler-icon'/> H200 </Typography>
                <Typography style={{cursor:'pointer'}} variant="h5" onClick={(e) => navigatetoelevators(e,'h300')} >
       <AiOutlineMinus  className='ruler-icon'/> H300 </Typography>

            </motion.div>

            </motion.div>


        <motion.div onClick={() => setescOpen(!escOpen)} className='sub-cat'
        variants={comingFromLlet}
            initial={catOpen ?"visible":"hidden"}
            animate={catOpen ? "hidden":"visible"}
        
        
        ><Typography variant="h4" >
       {escOpen ? <AiOutlinePlus className='add-icon'/> : <IoIosRemove className='minus-icon' />}
       Esclator
       </Typography>
       
       <motion.div className='sub-sub'
       variants={heightIncrease}
            initial={escOpen ?"visible":"hidden"}
            animate={escOpen ? "hidden":"visible"}
            
       >
         <Typography variant="h5" >
       <AiOutlineMinus className='ruler-icon'/> Parallel esclator </Typography>
                <Typography variant="h5" >
       <AiOutlineMinus className='ruler-icon'/> Criss-cross escalator </Typography>
                <Typography variant="h5" >
       <AiOutlineMinus className='ruler-icon'/> Multi parallel escalator
 </Typography>
            </motion.div>
       
       </motion.div>
      </div>

    </Box>
  )
}

export default SideBar