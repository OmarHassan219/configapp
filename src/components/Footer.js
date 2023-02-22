import React from 'react';
import { makeStyles } from '@mui/styles';
import {  Typography  } from '@mui/material'
import { Stack } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'64px',
    position:'relative',
    backgroundColor:"#18227c",
    color:"white",
    padding:"0 24px",
    zIndex:'2'
  },

}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      

            <Stack className='footer' height='100%' width='100%' direction='row' justifyContent="space-between" alignItems='center'>

          <Typography variant='h6'  >
Terms & Conditions
          </Typography>
          <Typography variant="h6" color="inherit">
            Copywrite Configurator
          </Typography>
          <Typography variant="h6" color="inherit">
            V1.1.0
          </Typography>
            </Stack>
      
    </div>
  );
}
