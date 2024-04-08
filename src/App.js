import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CustomAppBar from './CustomAppBar'; // Import the CustomAppBar component
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import feuBackground from './feu.png';

export default function App() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [temperature, setTemperature] = useState('');
  const [respiratoryRate, setRespiratoryRate] = useState('');
  const [pulseRate, setPulseRate] = useState('');
  const [oxygenSaturation, setOxygenSaturation] = useState('');
  const [objectiveSubjectiveData, setObjectiveSubjectiveData] = useState('');
  const [status, setStatus] = useState({
    bloodPressure: null,
    temperature: null,
    respiratoryRate: null,
    pulseRate: null,
    oxygenSaturation: null,
    objectiveSubjectiveData: null
  });
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showLegend, setShowLegend] = useState(false);
  const [showRelatedCauses, setShowRelatedCauses] = useState(false);
  const [showStartupPage, setShowStartupPage] = useState(true);
  const [showNursingDiagnosis, setShowNursingDiagnosis] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let bloodPressureStatus = null;
    if (systolic !== '' && diastolic !== '') {
      if (systolic >= 120 && systolic <= 129 && diastolic >= 80 && diastolic <= 84) {
        bloodPressureStatus = 'Normal';
      } else {
        bloodPressureStatus = 'Deviation from Normal';
      }
    }

    let temperatureStatus = null;
    if (temperature !== '') {
      if (temperature >= 36.1 && temperature <= 37.2) {
        temperatureStatus = 'Normal';
      } else {
        temperatureStatus = 'Deviation from Normal';
      }
    }

    let respiratoryRateStatus = null;
    if (respiratoryRate !== '') {
      if (respiratoryRate >= 12 && respiratoryRate <= 16) {
        respiratoryRateStatus = 'Normal';
      } else {
        respiratoryRateStatus = 'Deviation from Normal';
      }
    }

    let pulseRateStatus = null;
    if (pulseRate !== '') {
      if (pulseRate >= 60 && pulseRate <= 100) {
        pulseRateStatus = 'Normal';
      } else {
        pulseRateStatus = 'Deviation from Normal';
      }
    }

    let oxygenSaturationStatus = null;
    if (oxygenSaturation !== '') {
      if (oxygenSaturation >= 95 && oxygenSaturation <= 100) {
        oxygenSaturationStatus = 'Normal';
      } else {
        oxygenSaturationStatus = 'Deviation from Normal';
      }
    }

    let objectiveSubjectiveDataStatus = null;
    if (objectiveSubjectiveData.includes('crackles') || objectiveSubjectiveData.includes('crackle') || objectiveSubjectiveData.includes('cough')) {
      objectiveSubjectiveDataStatus = 'Deviation from Normal';
    } else {
      objectiveSubjectiveDataStatus = 'Normal';
    }
    

    setStatus({
      bloodPressure: bloodPressureStatus,
      temperature: temperatureStatus,
      respiratoryRate: respiratoryRateStatus,
      pulseRate: pulseRateStatus,
      oxygenSaturation: oxygenSaturationStatus,
      objectiveSubjectiveData: objectiveSubjectiveDataStatus
    });

    setShowLegend(true);
    setShowRelatedCauses(true);
    setShowNursingDiagnosis(false);
    setShowStartupPage(false);
  };

  const handleStart = () => {
    setShowStartupPage(false);
  };

  const handleProceed = () => {
    setShowNursingDiagnosis(true);
  };

  // Function to handle input change for integer fields
  const handleIntegerChange = (setStateFunc) => (event) => {
    const inputValue = event.target.value;
    // Validate if the input is an integer
    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      setStateFunc(inputValue);
    }
  };

  const handleObjectiveSubjectiveChange = (event) => {
    setObjectiveSubjectiveData(event.target.value);
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
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      }}
    >
      <CustomAppBar />
      {showStartupPage && (
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
              onClick={handleStart}
              sx={{ backgroundColor: '#013220', color: '#fff' }}
            >
              Start Test
            </Button>
          </Box>
        </Box>
      )}
      {!showStartupPage && (
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <Box sx={{ p: 2, width: '100%', maxWidth: '600px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', textAlign: 'center' }}>
            <Typography variant="body1" color="inherit" component="div">
              Please enter the following medical information:
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Systolic Blood Pressure"
                    value={systolic}
                    onChange={handleIntegerChange(setSystolic)}
                    variant="outlined"
                    margin="normal"
                    inputProps={{
                      style: {
                        backgroundColor: status.bloodPressure === 'Normal' ? '#ccffcc' : status.bloodPressure === 'Deviation from Normal' ? '#ffb3b3' : '#ffffff',
                        color: status.bloodPressure === 'Normal' ? 'green' : status.bloodPressure === 'Deviation from Normal' ? 'red' : 'initial'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Diastolic Blood Pressure"
                    value={diastolic}
                    onChange={handleIntegerChange(setDiastolic)}
                    variant="outlined"
                    margin="normal"
                    inputProps={{
                      style: {
                        backgroundColor: status.bloodPressure === 'Normal' ? '#ccffcc' : status.bloodPressure === 'Deviation from Normal' ? '#ffb3b3' : '#ffffff',
                        color: status.bloodPressure === 'Normal' ? 'green' : status.bloodPressure === 'Deviation from Normal' ? 'red' : 'initial'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Temperature"
                    value={temperature}
                    onChange={handleIntegerChange(setTemperature)}
                    variant="outlined"
                    margin="normal"
                    inputProps={{
                      style: {
                        backgroundColor: status.temperature === 'Normal' ? '#ccffcc' : status.temperature === 'Deviation from Normal' ? '#ffb3b3' : '#ffffff',
                        color: status.temperature === 'Normal' ? 'green' : status.temperature === 'Deviation from Normal' ? 'red' : 'initial'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Respiratory Rate"
                    value={respiratoryRate}
                    onChange={handleIntegerChange(setRespiratoryRate)}
                    variant="outlined"
                    margin="normal"
                    inputProps={{
                      style: {
                        backgroundColor: status.respiratoryRate === 'Normal' ? '#ccffcc' : status.respiratoryRate === 'Deviation from Normal' ? '#ffb3b3' : '#ffffff',
                        color: status.respiratoryRate === 'Normal' ? 'green' : status.respiratoryRate === 'Deviation from Normal' ? 'red' : 'initial'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Pulse Rate"
                    value={pulseRate}
                    onChange={handleIntegerChange(setPulseRate)}
                    variant="outlined"
                    margin="normal"
                    inputProps={{
                      style: {
                        backgroundColor: status.pulseRate === 'Normal' ? '#ccffcc' : status.pulseRate === 'Deviation from Normal' ? '#ffb3b3' : '#ffffff',
                        color: status.pulseRate === 'Normal' ? 'green' : status.pulseRate === 'Deviation from Normal' ? 'red' : 'initial'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Oxygen Saturation"
                    value={oxygenSaturation}
                    onChange={handleIntegerChange(setOxygenSaturation)}
                    variant="outlined"
                    margin="normal"
                    inputProps={{
                      style: {
                        backgroundColor: status.oxygenSaturation === 'Normal' ? '#ccffcc' : status.oxygenSaturation === 'Deviation from Normal' ? '#ffb3b3' : '#ffffff',
                        color: status.oxygenSaturation === 'Normal' ? 'green' : status.oxygenSaturation === 'Deviation from Normal' ? 'red' : 'initial'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Objective/Subjective Data"
                    value={objectiveSubjectiveData}
                    onChange={handleObjectiveSubjectiveChange}
                    variant="outlined"
                    margin="normal"
                    inputProps={{
                      style: {
                        backgroundColor: status.objectiveSubjectiveData === 'Normal' ? '#ccffcc' : status.objectiveSubjectiveData === 'Deviation from Normal' ? '#ffb3b3' : '#ffffff',
                        color: status.objectiveSubjectiveData === 'Normal' ? 'green' : status.objectiveSubjectiveData === 'Deviation from Normal' ? 'red' : 'initial'
                      }
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, backgroundColor: '#013220', color: '#fff' }}
              >
                Submit
              </Button>
            </form>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
            {showLegend && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundPosition: 'center',
                  minHeight: '5vh', /* Adjusted minHeight */
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  padding: '8px',
                  marginTop: '20px',
                }}
              >
                <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '10px' }}>
                  <strong>Legend</strong>
                </Typography>
                <Typography variant="body1" color="inherit" component="div" sx={{ color: 'green' }}>
                  Normal
                </Typography>
                <Typography variant="body1" color="inherit" component="div" sx={{ color: 'red' }}>
                  Deviation from Normal
                </Typography>
              </Box>
            )}
            {showRelatedCauses && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundPosition: 'center',
                  minHeight: '6vh', /* Adjusted minHeight */
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  padding: '8px',
                  marginTop: '20px',
                }}
              >
                <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '10px' }}>
                  <strong>Possible Related Factors</strong>
                </Typography>
                <Typography variant="body1" color="inherit" component="div">
                  Excessive Secretions
                </Typography>
                <Typography variant="body1" color="inherit" component="div">
                  Ineffective Cough
                </Typography>
                <Typography variant="body1" color="inherit" component="div">
                  Inconsistent Breathing Sounds
                </Typography>
              </Box>
            )}
            {showRelatedCauses && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundPosition: 'center',
                  minHeight: '8vh',
                  minWidth: '30vh',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  padding: '8px',
                  marginTop: '20px',
                }}
              >
                <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '10px' }}>
                  <strong>Proceed to the next test</strong>
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleProceed}
                  sx={{ backgroundColor: '#013220', color: '#fff' }}
                >
                  Proceed
                </Button>
              </Box>
            )}
            {showNursingDiagnosis && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundPosition: 'center',
                  minHeight: '6vh', /* Adjusted minHeight */
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  padding: '8px',
                  marginTop: '20px',
                }}
              >
                <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '10px' }}>
                  <strong>Nursing Diagnosis</strong>
                </Typography>
                <Box sx={{ marginBottom: '10px' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Combo Box</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedValue}
                      onChange={(event) => setSelectedValue(event.target.value)}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            )}
            {showNursingDiagnosis && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundPosition: 'center',
                  minHeight: '8vh', /* Adjusted minHeight */
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  padding: '8px',
                  marginTop: '20px',
                }}
              >
                <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '10px' }}>
                  <strong>Related Factors</strong>
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="options"
                    name="options"
                    value={selectedOption}
                    onChange={(event) => setSelectedOption(event.target.value)}
                  >
                    <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                    <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                    <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                  </RadioGroup>
                </FormControl>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
