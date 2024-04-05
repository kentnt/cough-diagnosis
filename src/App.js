import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import feuBackground from './feu.png'; // Import the background image
import logo from './logo.png'; // Import the logo image

export default function DenseAppBar() {
  const [pageState, setPageState] = React.useState('start');
  const [age, setAge] = React.useState('');
  const [alcohol, setAlcohol] = React.useState('');
  const [drugs, setDrugs] = React.useState('');
  const [result, setResult] = React.useState('');
  const [showDrugsQuestion, setShowDrugsQuestion] = React.useState(false);
  const [showAlcoholQuestion, setShowAlcoholQuestion] = React.useState(false);

  const handleChangeAge = (event) => {
    setAge(event.target.value);
    setShowDrugsQuestion(event.target.value === 'no');
    setShowAlcoholQuestion(event.target.value === 'yes');
    setDrugs(''); // Reset drugs answer when age changes
    setAlcohol(''); // Reset alcohol answer when age changes
    setResult(''); // Reset result text when answer changes
  };

  const handleChangeDrugs = (event) => {
    setDrugs(event.target.value);
    setResult(''); // Reset result text when answer changes
  };

  const handleChangeAlcohol = (event) => {
    setAlcohol(event.target.value);
    setResult(''); // Reset result text when answer changes
  };

  const handleSubmit = () => {
    if (age === 'no') {
      if (drugs === 'yes') {
        setResult("Bad");
      } else if (drugs === 'no') {
        setResult("Good");
      }
    } else if (age === 'yes' && alcohol === 'yes') {
      setResult("Bad");
    } else if (age === 'yes' && alcohol === 'no') {
      setResult("Good");
    }
  };

  const allQuestionsAnswered = age !== '' && 
    ((!showDrugsQuestion && !showAlcoholQuestion) || 
    (showDrugsQuestion && drugs !== '') || 
    (showAlcoholQuestion && alcohol !== ''));

  const handleStartTest = () => {
    setPageState('questions');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${feuBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Opacity set to 50%
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: '#013220', width: '100%' }}>
        <Toolbar variant="dense">
          <img src={logo} alt="Logo" style={{ marginRight: '16px', height: '40px' }} />
          <Typography variant="h6" color="inherit" component="div">
            Far Eastern University
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <Box sx={{ p: 2, width: '100%', maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', textAlign: 'center' }}>
          {pageState === 'start' && (
            <Typography variant="body1" color="inherit" component="div">
              This test checks the cause of your coughs
            </Typography>
          )}
          {pageState === 'questions' && (
            <FormControl component="fieldset">
              <Typography variant="body1" color="inherit" component="div">
                Are you below 18 years old?
              </Typography>
              <RadioGroup
                row
                aria-label="age"
                name="age"
                value={age}
                onChange={handleChangeAge}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              {showDrugsQuestion && (
                <FormControl component="fieldset" sx={{ mt: 2 }}>
                  <Typography variant="body1" color="inherit" component="div">
                    Do you do drugs?
                  </Typography>
                  <RadioGroup
                    row
                    aria-label="drugs"
                    name="drugs"
                    value={drugs}
                    onChange={handleChangeDrugs}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              )}
              {showAlcoholQuestion && (
                <FormControl component="fieldset" sx={{ mt: 2 }}>
                  <Typography variant="body1" color="inherit" component="div">
                    Have you drank any alcohol?
                  </Typography>
                  <RadioGroup
                    row
                    aria-label="alcohol"
                    name="alcohol"
                    value={alcohol}
                    onChange={handleChangeAlcohol}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              )}
              {allQuestionsAnswered && (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mt: 2, backgroundColor: '#013220', color: '#fff' }}
                >
                  Submit
                </Button>
              )}
              {result && (
                <Typography variant="body1" color="inherit" component="div" sx={{ mt: 2 }}>
                  <strong>Result:</strong> <br /> {result}
                </Typography>
              )}
            </FormControl>
          )}
          {pageState === 'start' && (
            <Button variant="contained" color="primary" onClick={handleStartTest} sx={{ mt: 2, backgroundColor: '#013220', color: '#fff' }}>
              Start Test
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
