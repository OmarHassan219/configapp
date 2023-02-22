import React,{useEffect} from 'react';
import { alpha } from '@mui/material/styles';
import {  makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import i18next from 'i18next'
import { useLocation } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import '../../node_modules/flag-icon-css/css/flag-icons.min.css'
import { Stack } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));





const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    marginRight: theme.spacing(2),
  },
  title: {
   
      display: 'block',
    
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      gap:'30px',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar({burger,setburger}) {
  const [swapLang, setswapLang] = React.useState('en')
  const alllang = (e,country) =>{
    handleMenuClose()
    handleMobileMenuClose()
   setlangmenu(false)

    setswapLang(country.translate)
    window.localStorage.setItem("Lang",country.translate)
    i18next.changeLanguage(country.translate)
    
}



const location = useLocation();
useEffect(() => {
 
 if (window.localStorage.getItem("Lang") === "en"){
 setswapLang("en")
 }else if (window.localStorage.getItem("Lang") === "ru"){
 setswapLang("ru")
 }else if (window.localStorage.getItem("Lang") === "fr"){
 setswapLang("fr")
 

 }
 
  
}, [location])


const {t} = useTranslation()
const navigate = useNavigate()

  const classes = useStyles();
  const [underline, setunderline] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [langmenu, setlangmenu] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

useEffect(() => {
if(window.location.href.split("/").pop() === 'home'){
  document.querySelectorAll(".nav-headers")[0].style.textDecoration="underline"
  setunderline(true)
  setburger(true)
}
else if(window.location.href.split("/").pop() === 'cart'){
  document.querySelectorAll(".nav-headers")[1].style.textDecoration="underline"
  setunderline(false)
  setburger(false)

}
else{
  setburger(false)

}




}, [langmenu])


const navigateHome =(e)=>{
    navigate('/home')
    setunderline(true)
    setburger(true)
    document.querySelectorAll(".nav-headers").forEach(head =>{
    head.style.textDecoration = "none"
   setlangmenu(false)
    })
    
   
    
    
  if(e.target.classList.contains("nav-headers")){
  e.target.style.textDecoration="underline"}
}
const navigateCart =(e)=>{
    navigate('/cart')
    setunderline(false)

    setburger(false)
    document.querySelectorAll(".nav-headers").forEach(head =>{
    head.style.textDecoration = "none"
    setlangmenu(false)

    })
   
    if(e.target.classList.contains("nav-headers")){
  e.target.style.textDecoration="underline"}
}




  const handleProfileMenuOpen = (event) => {
    
    setAnchorEl(event.currentTarget);
    
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    setlangmenu(false)
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    setlangmenu(false)
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
 
const Languages = [

{
   lang: 'English',
   code : 'us',
   translate:'en'

},
{
   lang: 'Русский',
   code : 'ru',
   translate:'ru'

},
{
   lang: 'française',
   code : 'fr',
   translate:'fr'

}

]

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{t('profile')}</MenuItem>
      <MenuItem onClick={()=>setlangmenu(!langmenu)} ><Stack direction='row' alignItems='center' >{t('language')}  <ExpandMoreIcon/>  </Stack></MenuItem>
      <Stack  className={`${langmenu? 'lang-menu active' : 'lang-menu'} `}  alignItems='flex-start' sx={{bgcolor:"#f4dfdf",p:'0'}}>
      { 
        Languages.map((country,index) =>(
         
    <span key={index} onClick={(e) => alllang(e,country)}  className={` lang ${swapLang === country.translate && 'active'}`} style={{cursor:"pointer",padding:'10px',width:'100%'}}><span className={`flag-icon flag-icon-${country.code} `} style={{margin:'0 10px 0 '}}></span>{country.lang}</span>      
            
            
  ))
  
  
}
</Stack>
      <MenuItem onClick={handleMenuClose}>{t('logout')}</MenuItem>
    </Menu>
  );
 

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem   className={`${underline ? 'nav-m-headers active':'nav-m-headers' }`} onClick={navigateHome}>
        <Typography   style={{fontSize:'20px',cursor:'pointer',textDecoration:'none'}} >{t('home')}</Typography>
      </MenuItem>
      <MenuItem className={`${underline ? 'nav-m-headers ':'nav-m-headers active ' }`}onClick={navigateCart} >
         <Typography style={{fontSize:'20px',cursor:'pointer',textDecoration:'none'}} >{t('cart')}</Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
         <Typography component={'span'} style={{fontSize:'20px',cursor:'pointer'}}
              aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
            >

              <Stack direction='row' alignItems='center' >Purvesh <ExpandMoreIcon/> </Stack>
              

              
             
            </Typography>
      </MenuItem>
    </Menu>
  );
const sliding = () =>{
document.querySelector(".sidebar").classList.toggle("move")


}
  return (
    <div className='navv' >
      <AppBar className='navappbar' position="static">
        <Toolbar>
          { burger &&
          <IconButton
            onClick={sliding}
            edge="start"
            className={`${ burger ?   "onlymedium active" :"onlymedium" }`}
            color="inherit"
            aria-label="open drawer"
            size="large">
            <MenuIcon />
          </IconButton>}
          <Typography style={{cursor:'pointer'}} onClick={navigateHome} className={classes.title} variant="h6" noWrap>
            CTSConfigurator
          </Typography>
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography className='nav-headers' onClick={(e)=>navigateHome(e)} style={{fontSize:'20px',cursor:'pointer'}} >{t('home')}</Typography>
            <Typography className='nav-headers' onClick={(e)=>navigateCart(e)}style={{fontSize:'20px',cursor:'pointer'}} >{t('cart')}</Typography>
            
            <Typography component={'span'} style={{fontSize:'20px',cursor:'pointer'}}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Stack direction='row' alignItems='center' >Purvesh <ExpandMoreIcon/> </Stack>
            </Typography>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              size="large">
              <ExpandMoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      
    </div>
  );
}
