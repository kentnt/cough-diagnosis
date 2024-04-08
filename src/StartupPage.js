import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function StartupPage({ onStart }) {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <Box sx={{ p: 2, width: '100%', maxWidth: '600px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', textAlign: 'center' }}>
        <Typography variant="h4" color="inherit" component="div" sx={{ marginBottom: '20px' }}>
          Coughing Test
        </Typography>
        <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '20px' }}>
          Welcome to the coughing test. This test will help determine potential health issues based on your medical information.
        </Typography>
        <Button
          variant="contained"
          onClick={onStart}
          sx={{ backgroundColor: '#013220', color: '#fff' }}
        >
          Start Test
        </Button>
      </Box>
    </Box>
  );
}
