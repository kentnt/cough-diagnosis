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
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

export default function App() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [respiratoryRate, setRespiratoryRate] = useState('');
  const [pulseRate, setPulseRate] = useState('');
  const [oxygenSaturation, setOxygenSaturation] = useState('');
  const [objectiveSubjectiveData, setObjectiveSubjectiveData] = useState('');
  const [temperature, setTemperature] = useState('');
  const [status, setStatus] = useState({
    bloodPressure: null,
    temperature: null,
    respiratoryRate: null,
    pulseRate: null,
    oxygenSaturation: null,
    objectiveSubjectiveData: null
  });
  const [selectedValue, setSelectedValue] = useState('');
  const [showLegend, setShowLegend] = useState(false);
  const [showRelatedCauses, setShowRelatedCauses] = useState(false);
  const [showStartupPage, setShowStartupPage] = useState(true);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState('');
  const [selectedFactor, setSelectedFactor] = useState('');
  const [showRadioGroups, setShowRadioGroups] = useState(false);
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [checkbox5Checked, setCheckbox5Checked] = useState(false);
  const [checkbox6Checked, setCheckbox6Checked] = useState(false);
  const [showConfirmBox1, setShowConfirmBox1] = useState(false);
  const [nursingDiagnosis, setShowNursingDiagnosis] = useState(false);
  const [showActionPlanBox, setShowActionPlanBox] = useState(false);

  const handleDiagnosisChange = (event) => {
    setSelectedDiagnosis(event.target.value);
    // Update selectedValue based on the selected nursing diagnosis
    if (event.target.value === 'Impaired Gas Exchange') {
      setSelectedValue('Impaired Gas Exchange');
    } else if (event.target.value === 'Ineffective Airway Clearance') {
      setSelectedValue('Ineffective Airway Clearance');
    } else if (event.target.value === 'Acute Pain') {
      setSelectedValue('Acute Pain');
    }
  };

  // Function to handle radio button value change
  const handleFactorChange = (event) => {
    setSelectedFactor(event.target.value);
  };

  const handleConfirm = () => {
    // Reset state variables to clear the boxes
    setSystolic('');
    setDiastolic('');
    setTemperature('');
    setRespiratoryRate('');
    setPulseRate('');
    setOxygenSaturation('');
    setObjectiveSubjectiveData('');
    setSelectedDiagnosis('');
    setSelectedFactor('');
    setShowLegend(false);
    setShowRelatedCauses(false);
    setShowNursingDiagnosis(false);
    setShowRadioGroups(true); // Show the new box with radio groups
  };

  const handleConfirm2 = () => {
    // Reset state variables to clear the boxes
    setSystolic('');
    setDiastolic('');
    setTemperature('');
    setRespiratoryRate('');
    setPulseRate('');
    setOxygenSaturation('');
    setObjectiveSubjectiveData('');
    setSelectedDiagnosis('');
    setSelectedFactor('');
    setShowLegend(false);
    setShowRelatedCauses(false);
    setShowNursingDiagnosis(false);
    setShowRadioGroups(true); // Show the new box with radio groups
    setShowConfirmBox1(false); // Hide the possible interventions box
    setShowActionPlanBox(false);
  };
  
  const handleCheckbox1Change = (event) => {
    setCheckbox1Checked(event.target.checked);
  };

  const handleCheckbox2Change = (event) => {
    setCheckbox2Checked(event.target.checked);
  };

  const handleCheckbox3Change = (event) => {
    setCheckbox3Checked(event.target.checked);
  };

  const handleCheckbox4Change = (event) => {
    setCheckbox4Checked(event.target.checked);
  };
  const handleCheckbox5Change = (event) => {
    setCheckbox5Checked(event.target.checked);
  };

  const handleCheckbox6Change = (event) => {
    setCheckbox6Checked(event.target.checked);
  };

  const handleConfirm1 = () => {
    setShowConfirmBox1(true); // Set showConfirmBox to true when Confirm button is clicked
  };

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
      if (respiratoryRate >= 12 && respiratoryRate <= 20) {
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

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
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
      {showStartupPage && !showRadioGroups && (
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <Box sx={{ p: 2, width: '100%', maxWidth: '600px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', textAlign: 'center' }}>
            <Typography variant="h4" color="inherit" component="div" sx={{ marginBottom: '5px' }}>
              Clinical Decision Support System
            </Typography>
            <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '20px' }}>
              Group 2 Section 202
            </Typography>
            <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '20px' }}>
              A demonstration of clinical decision support system (CDSS) that ensures quality patient care for all 
            </Typography>
            <Button
              variant="contained"
              onClick={handleStart}
              sx={{ backgroundColor: '#013220', color: '#fff', width: '100%' }}
            >
              Start Test
            </Button>
          </Box>
        </Box>
      )}
      {!showStartupPage && !showRadioGroups && (
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
                    onChange={handleTemperatureChange}
                    variant="outlined"
                    margin="normal"
                    inputProps={{
                      style: {
                        backgroundColor: status.temperature === 'Normal' ? '#ccffcc' : status.temperature === 'Deviation from Normal' ? '#ffb3b3' : '#ffffff',
                        color: status.temperature === 'Normal' ? 'green' : status.temperature === 'Deviation from Normal' ? 'red' : 'initial'
                      },
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
                sx={{ mt: 2, backgroundColor: '#013220', color: '#fff', width: '100%' }}
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
            {showLegend && (
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
                  <InputLabel id="diagnosis-select-label">Nursing Diagnosis</InputLabel>
                    <Select
                      labelId="diagnosis-select-label"
                      id="diagnosis-select"
                      value={selectedDiagnosis}
                      onChange={handleDiagnosisChange}
                    >
                      <MenuItem value={'Impaired Gas Exchange'}>Impaired Gas Exchange</MenuItem>
                      <MenuItem value={'Ineffective Airway Clearance'}>Ineffective Airway Clearance</MenuItem>
                      <MenuItem value={'Acute Pain'}>Acute Pain</MenuItem>
                    </Select>
                  </FormControl>

                </Box>
              </Box>
            )}
            {selectedValue && (
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
                  aria-label="related-factors"
                  name="related-factors"
                  value={selectedFactor}
                  onChange={handleFactorChange}
                >
                    {selectedValue === 'Impaired Gas Exchange' && (
                      <>
                        <FormControlLabel value="Pain" control={<Radio />} label="Pain" />
                        <FormControlLabel value="Ineffective Airway Clearance" control={<Radio />} label="Ineffective Airway Clearance" />
                      </>
                    )}
                    {selectedValue === 'Ineffective Airway Clearance' && (
                      <>
                        <FormControlLabel value="Dehydration" control={<Radio />} label="Dehydration" />
                        <FormControlLabel value="Excessive Mucus" control={<Radio />} label="Excessive Mucus" />
                        <FormControlLabel value="Mucus Plug" control={<Radio />} label="Mucus Plug" />
                        <FormControlLabel value="Retained Secretions" control={<Radio />} label="Retained Secretions" />
                        <FormControlLabel value="Exposure to Harmful Substance" control={<Radio />} label="Exposure to Harmful Substance" />
                        <FormControlLabel value="Smoking" control={<Radio />} label="Smoking" />
                        <FormControlLabel value="Fear of Pain" control={<Radio />} label="Fear of Pain" />
                        <FormControlLabel value="Foreign Body in Airway" control={<Radio />} label="Foreign Body in Airway" />
                      </>
                    )}
                    {selectedValue === 'Acute Pain' && (
                      <>
                        <FormControlLabel value="Biological Injury Agent" control={<Radio />} label="Biological Injury Agent" />
                        <FormControlLabel value="Chemical Injury Agent" control={<Radio />} label="Chemical Injury Agent" />
                        <FormControlLabel value="Physical Injury Agent" control={<Radio />} label="Physical Injury Agent" />
                      </>
                    )}
                  </RadioGroup>
                </FormControl>
              </Box>
            )}
            {selectedFactor && ( // Check if a radio button item is selected
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundPosition: 'center',
                  minHeight: '10vh', /* Adjusted minHeight */
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  padding: '8px',
                  width: '95%', // Adjusted width to match the medical information box
                  marginTop: '20px',
                }}
              >
                <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '10px' }}>
                  <strong>Selected Nursing Diagnosis</strong>: {selectedDiagnosis}
                </Typography>
                <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '10px' }}>
                  <strong>Selected Related Factor</strong>: {selectedFactor}
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleConfirm}
                  sx={{ backgroundColor: '#013220', color: '#fff' }}
                >
                  Confirm
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      )}
      {showRadioGroups && (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
    <Box sx={{ p: 2, width: '100%', maxWidth: '80vh', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', textAlign: 'center' }}>
      <Typography variant="body1" color="inherit" component="div"  sx={{ marginTop: '5px' }}>
        <strong>Select Action Plan for the patient</strong>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1" color="inherit" component="div">
            <strong>Short-term</strong>
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={checkbox1Checked} onChange={handleCheckbox1Change} />}
                label="Relieve pain"
                sx={{ textAlign: 'left', marginBottom: 0.2 }}
              />
              <FormControlLabel
                control={<Checkbox checked={checkbox2Checked} onChange={handleCheckbox2Change} />}
                label="Increase in air exchange"
                sx={{ textAlign: 'left', marginBottom: 0.2 }}
              />
              <FormControlLabel
                control={<Checkbox checked={checkbox3Checked} onChange={handleCheckbox3Change} />}
                label="Decrease crackles"
                sx={{ textAlign: 'left', marginBottom: 0.2  }}
              />
              <FormControlLabel
                control={<Checkbox checked={checkbox4Checked} onChange={handleCheckbox4Change} />}
                label="Normal range of RR and oxygen Saturation"
                sx={{ textAlign: 'left', marginBottom: 0.2  }}
              />
            </FormGroup>
          </FormControl>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1" color="inherit" component="div">
            <strong>Long-term</strong>
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={checkbox5Checked} onChange={handleCheckbox5Change} />}
                label="Give techniques for effective airway patency"
                sx={{ textAlign: 'left', marginBottom: 0.2  }}
              />
              <FormControlLabel
                control={<Checkbox checked={checkbox6Checked} onChange={handleCheckbox6Change} />}
                label="Clear breathing sounds and educate about respiratory infection development prevention"
                sx={{ textAlign: 'left', marginBottom: 0.2  }}
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          onClick={handleConfirm1}
          sx={{ backgroundColor: '#013220', color: '#fff', width: '100%' }}
        >
          Confirm
        </Button>
      </Box>
      {/* Conditional rendering for the new box */}
    </Box>
    {showConfirmBox1 && (
        <Box sx={{ paddingTop: 2, paddingLeft: 2, paddingRight: 2,  maxWidth: '80vh', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', textAlign: 'center', marginLeft: 2}}>
          <Box sx={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>
            <Typography variant="body1" color="inherit" component="div" sx={{marginBottom: 3}}>
              <strong>Here are the possible interventions</strong>
            </Typography>
            <Typography variant="body1" color="inherit" component="div">
              Monitor V/S especially respiratory rate
            </Typography>
            <Typography variant="body1" color="inherit" component="div">
              Assess airway and respirations
            </Typography>
            <Typography variant="body1" color="inherit" component="div">
              Auscultate lungs for any change in conditions
            </Typography>
            <Typography variant="body1" color="inherit" component="div">
              Administer prescribed medication
            </Typography>
            <Typography variant="body1" color="inherit" component="div">
              Instruct for increase in fluid intake
            </Typography>
            <Typography variant="body1" color="inherit" component="div">
              Teach client proper breathing exercises
            </Typography>
            <Button
  variant="contained"
  onClick={handleConfirm2} // Update the onClick handler to call handleConfirm2
  sx={{ backgroundColor: '#013220', color: '#fff', marginTop: 5, width: '100%' }}
>
  Proceed to Evaluation
</Button>

          </Box>
        </Box>
    )}
    </Box>
      )}
    </Box>
  );
}