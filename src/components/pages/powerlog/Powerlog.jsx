import './powerlog.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import TextField from '@mui/material/TextField';

const data = [
    {
      name: 'Mai',
      Battery: 350,
      Generator: 340,
      Solar: 540,
    },
    {
      name: 'June',
      Generator: 30,
      Battery: 400,
      Solar: 530,
    },
    {
      name: 'July',
      Generator: 500,
      Battery: 300,
      Solar: 430,
    },
    {
      name: 'August',
      Generator: 410,
      Battery: 460,
      Solar: 370,
    },
    {
      name: 'September',
      Generator: 300,
      Battery: 300,
      Solar: 400,
    },
    {
      name: 'October',
      Generator: 350,
      Battery: 550,
      Solar: 300,
    },
    {
      name: 'November',
      Generator: 350,
      Battery: 550,
      Solar: 300,
    },
  ];


export default function Powerlog() {
    return (
        <div className="tempchart">
            <h3 className="charttitle">Power Consomption Logs</h3>
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
          <Line type="monotone" dataKey="Generator" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Battery" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Solar" stroke="#ff459d" />
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
