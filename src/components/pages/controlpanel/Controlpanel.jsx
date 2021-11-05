import './controlpanel.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }

export default function Controlpanel() {
    return (
        <div className="controlpanel">
            <div className="controlpanelgrid">
            <div className="panelitem">
            <span className="panelTitle">
                    Inside Control
            </span>
            <div className="panelcontainer">
                <div className="panel">
                <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Main Ac Power" />
                <FormControlLabel control={<Switch />} label="Batteries" />
                <FormControlLabel control={<Switch defaultChecked />} label="Thermal Cam 1" />
                <FormControlLabel control={<Switch />} label="Thermal Cam 2" />
                <FormControlLabel control={<Switch defaultChecked />} label="Security Cam 1" />
                <FormControlLabel control={<Switch defaultChecked />} label="Security Cam 2" />
                <FormControlLabel control={<Switch defaultChecked />} label="Transmission" />
                <FormControlLabel control={<Switch />} label="Ventilation Sys" />
                <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
                </Box>
                
                </FormGroup>
                </div>
            </div>
            </div>
            <div className="panelitem">
            <span className="panelTitle">
                    Outside Control
            </span>
            <div className="panelcontainer">
                <div className="panel">
                <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Security Cam 3" />
                <FormControlLabel control={<Switch />} label="Security Cam 4" />
                <FormControlLabel control={<Switch defaultChecked />} label="Main Gate" />
                <FormControlLabel control={<Switch />} label="Secondary Gate" />
                <FormControlLabel control={<Switch defaultChecked />} label="Lights" />
                <FormControlLabel control={<Switch defaultChecked />} label="Power Generator" />
                <FormControlLabel control={<Switch />} label="Alarm" />
                </FormGroup>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
