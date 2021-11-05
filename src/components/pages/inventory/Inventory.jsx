import './inventory.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Hardware, Type, Quantity, Serial, Placement) {
    return { Hardware, Type, Quantity, Serial, Placement };
  }

  const rows = [
    createData('Security Camera', 'Thermal', 6, 'ESP87211', 'BSS Station'),
    createData('Security Camera', 'Night-Vision', 5, 'ESP87211', 'BSS Station'),
    createData('Door Contact', 'Steal', 2, 'ESP87211', 'BSS Station'),
    createData('Arduino Boards', 'Mega', 3, 'ESP87211', 'BSS Station'),
    createData('Smoke Detectors', 'Sensor', 10, 'ESP87211', 'BSS Station'),
  ];
  



export default function Inventory() {
    return (
        <div className="engeneerlist">
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hardware Elements</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Serial</TableCell>
            <TableCell align="right">Placement</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Hardware}
              </TableCell>
              <TableCell align="right">{row.Type}</TableCell>
              <TableCell align="right">{row.Quantity}</TableCell>
              <TableCell align="right">{row.Serial}</TableCell>
              <TableCell align="right">{row.Placement}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
        </div>
    )
}
