import React from 'react';
import {
  Button,
  Box,
  Grid
} from '@mui/material';
import {
  Canvas
} from '../Components';


function Landing() {
return (
  <Grid 
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >

    <Grid 
      direction="column"
    >
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
    </Grid>

    <Grid 
      direction="column"
    >
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="black" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
    </Grid>
    <Grid 
      direction="column"
    >
      <Box sx={{width:'10px', height:'10px'}} bgcolor="blue" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
    </Grid>
    <Grid 
      direction="column" 
    >
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
      <Box sx={{width:'10px', height:'10px'}} bgcolor="red" />
    </Grid>
  </Grid>
);
}

export default Landing;
