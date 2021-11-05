import './templog.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import TextField from '@mui/material/TextField';

const data = [
    {
      name: 'Mai',
      Room: 40,
      Battery: 24,
      PanelBox: 24,
    },
    {
      name: 'June',
      Room: 30,
      Battery: 13,
      PanelBox: 22,
    },
    {
      name: 'July',
      Room: 20,
      Battery: 98,
      PanelBox: 22,
    },
    {
      name: 'August',
      Room: 27,
      Battery: 39,
      PanelBox: 20,
    },
    {
      name: 'September',
      Room: 18,
      Battery: 48,
      PanelBox: 21,
    },
    {
      name: 'October',
      Room: 23,
      Battery: 38,
      PanelBox: 25,
    },
    {
      name: 'November',
      Room: 34,
      Battery: 43,
      PanelBox: 21,
    },
  ];

export default function Templog() {
    return (
        
        <div className="tempchart">
            <h3 className="charttitle">Temperature Logs</h3>
        <ResponsiveContainer width="100%" height="70%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Room" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Battery" stroke="#82ca9d" />
          <Line type="monotone" dataKey="PanelBox" stroke="#82fa82" />
        </LineChart>
      </ResponsiveContainer>
      <div className="dates">
      <TextField
        id="date"
        label="From"
        type="date"
        defaultValue="2021-05-01"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="To"
        type="date"
        defaultValue="2021-11-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>
        </div>
    )
}
