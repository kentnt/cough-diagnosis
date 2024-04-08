// CustomAppBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './logo.png';

export default function CustomAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#013220', width: '100%', zIndex: '999' }}>
      <Toolbar variant="dense">
        <img src={logo} alt="Logo" style={{ marginRight: '16px', height: '40px' }} />
        <Typography variant="h6" color="inherit" component="div">
          Far Eastern University
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
