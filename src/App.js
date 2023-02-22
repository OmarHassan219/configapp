import { Box } from '@mui/system';
import { Routes , Route ,Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import React,{useState , useEffect} from 'react';
import Elevator from './pages/Elevator';
import Footer from './components/Footer'
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import ElevatorCconfig from './pages/ElevatorCconfig';
import EscalatorConfig from './pages/EscalatorConfig'
import Cart from './pages/Cart';

function App() {
const theme = createTheme()
  const [burger, setburger] = React.useState(false)
const [choosenElevator, setchoosenElevator] = useState("h200")
const [elevatorCart , setelevatorCart] = useState()
const [cart, setcart] = useState([])


let savedUserDetails = localStorage.getItem('cart')


    useEffect(() => {
      
      if(savedUserDetails){
        setcart(JSON.parse(savedUserDetails))
 }
         
    },[])
let savedchosenelev = localStorage.getItem('helev')


    useEffect(() => {
      
      if(savedchosenelev){
        setchoosenElevator(savedchosenelev)
 }
         
    },[])



  return (
    <Box   m="auto">
       <StyledEngineProvider injectFirst>
         <ThemeProvider theme={theme}>
  <Navbar burger={burger} setburger={setburger} />
  </ThemeProvider>
       </StyledEngineProvider>
<Routes>
 
<Route path="/home" element={<HomePage setchoosenElevator={setchoosenElevator} choosenElevator={choosenElevator} burger={burger} setburger={setburger}/>} />
<Route path="/" element={<Navigate to="/home" replace />} />
<Route path="/home/elevator" element={<Elevator  setchoosenElevator={setchoosenElevator}   choosenElevator={choosenElevator} />} />
<Route path={`/home/elevator/elevator-${choosenElevator}`} element={<ElevatorCconfig cart={cart} setcart={setcart} elevatorCart={elevatorCart}  setelevatorCart={setelevatorCart}  setchoosenElevator={setchoosenElevator} choosenElevator={choosenElevator} />} />

<Route path="/home/escalator-config" element={<EscalatorConfig cart={cart} setcart={setcart}  />} />
<Route path="/cart" element={<Cart   cart={cart} setcart={setcart}        />} />

</Routes>
<StyledEngineProvider injectFirst>
  <ThemeProvider theme={theme}>
  <Footer/>
  </ThemeProvider>
</StyledEngineProvider>
    </Box>
  );
}

export default App;
