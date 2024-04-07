import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; // Import Grid component
import feuBackground from './feu.png'; // Import the background image
import logo from './logo.png'; // Import the logo image

export default function DenseAppBar() {
  const [systolic, setSystolic] = React.useState('');
  const [diastolic, setDiastolic] = React.useState('');
  const [temperature, setTemperature] = React.useState('');
  const [respiratoryRate, setRespiratoryRate] = React.useState('');
  const [pulseRate, setPulseRate] = React.useState('');
  const [oxygenSaturation, setOxygenSaturation] = React.useState('');
  const [status, setStatus] = React.useState({
    bloodPressure: null,
    temperature: null,
    respiratoryRate: null,
    pulseRate: null,
    oxygenSaturation: null
  });
  const [showLegend, setShowLegend] = React.useState(false);
  const [showRelatedCauses, setShowRelatedCauses] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Determine blood pressure status only if both systolic and diastolic values are not empty
    let bloodPressureStatus = null;
    if (systolic !== '' && diastolic !== '') {
      if (systolic >= 120 && systolic <= 129 && diastolic >= 80 && diastolic <= 84) {
        bloodPressureStatus = 'Normal';
      } else {
        bloodPressureStatus = 'Deviation from Normal';
      }
    }

    // Determine temperature status
    let temperatureStatus = null;
    if (temperature !== '') {
      if (temperature >= 36.1 && temperature <= 37.2) {
        temperatureStatus = 'Normal';
      } else {
        temperatureStatus = 'Deviation from Normal';
      }
    }

    // Determine respiratory rate status
    let respiratoryRateStatus = null;
    if (respiratoryRate !== '') {
      if (respiratoryRate >= 12 && respiratoryRate <= 16) {
        respiratoryRateStatus = 'Normal';
      } else {
        respiratoryRateStatus = 'Deviation from Normal';
      }
    }

    // Determine pulse rate status
    let pulseRateStatus = null;
    if (pulseRate !== '') {
      if (pulseRate >= 60 && pulseRate <= 100) {
        pulseRateStatus = 'Normal';
      } else {
        pulseRateStatus = 'Deviation from Normal';
      }
    }

    // Determine oxygen saturation status
    let oxygenSaturationStatus = null;
    if (oxygenSaturation !== '') {
      if (oxygenSaturation >= 95 && oxygenSaturation <= 100) {
        oxygenSaturationStatus = 'Normal';
      } else {
        oxygenSaturationStatus = 'Deviation from Normal';
      }
    }

    setStatus({
      bloodPressure: bloodPressureStatus,
      temperature: temperatureStatus,
      respiratoryRate: respiratoryRateStatus,
      pulseRate: pulseRateStatus,
      oxygenSaturation: oxygenSaturationStatus
    });

    setShowLegend(true); // Show the legend after form submission
    setShowRelatedCauses(true); // Show related causes after form submission
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
                  onChange={(e) => setSystolic(e.target.value)}
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
                  onChange={(e) => setDiastolic(e.target.value)}
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
                  onChange={(e) => setTemperature(e.target.value)}
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
                  onChange={(e) => setRespiratoryRate(e.target.value)}
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
                  onChange={(e) => setPulseRate(e.target.value)}
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
                  onChange={(e) => setOxygenSaturation(e.target.value)}
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
        {showLegend && (
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
          {showLegend && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundPosition: 'center',
                minHeight: '10vh',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '8px',
                marginTop: '20px'
              }}
            >
              <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '10px' }}>
                Legend:
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
                minHeight: '10vh',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '8px',
                marginTop: '20px'
              }}
            >
              <Typography variant="body1" color="inherit" component="div" sx={{ marginBottom: '10px' }}>
                Related Causes:
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
        </Box>
        )}
      </Box>
    </Box>
  );
}
