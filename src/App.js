import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

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
  };

  const handleChangeDrugs = (event) => {
    setDrugs(event.target.value);
  };

  const handleChangeAlcohol = (event) => {
    setAlcohol(event.target.value);
  };

  const handleSubmit = () => {
    if (age === 'no') {
      if (drugs === 'yes') {
        setResult("Bad");
      } else if (drugs === 'no') {
        setResult("Good");
      }
    } else if (age === 'yes' && alcohol === 'yes') {
      setResult("Sinner");
    } else if (age === 'yes' && alcohol === 'no') {
      setResult("Angel");
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
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <AppBar position="static" sx={{ backgroundColor: '#013220', width: '100%' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Far Eastern University
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2, width: '100%', maxWidth: '400px' }}>
        {pageState === 'start' && (
          <Box>
            <Typography variant="body1" color="inherit" component="div" sx={{ textAlign: 'center' }}>
              This test checks the cause of your coughs
            </Typography>
            <Button variant="contained" color="primary" onClick={handleStartTest} sx={{ mt: 2, display: 'block', margin: 'auto' }}>
              Start Test
            </Button>
          </Box>
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
              <FormControl component="fieldset" sx={{ mt: 2, display: 'block' }}>
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
              <FormControl component="fieldset" sx={{ mt: 2, display: 'block' }}>
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
              <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
                Submit
              </Button>
            )}
            {result && (
              <Typography variant="body1" color="inherit" component="div" sx={{ mt: 2 }}>
                {result}
              </Typography>
            )}
          </FormControl>
        )}
      </Box>
    </Box>
  );
}
