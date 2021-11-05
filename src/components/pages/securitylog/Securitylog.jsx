import './securitylog.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(Log, Date, Time, Type, Placement) {
    return { Log, Date, Time, Type, Placement };
  }

  const rows = [
    createData('Front Gate Opend', '05/11/2021', '22:49', 'Security', 'BTS Station'),
    createData('Mouvement Detected', '01/11/2021', '07:50', 'Security', 'BTS Station'),
    createData('Fuel Tank Empty', '29/10/2021', '11:49', 'Power', 'BTS Station'),
    createData('Smoke Detected', '10/10/2021', '08:00', 'Security', 'BTS Station'),
    createData('Main Power Down', '01/10/2021', '22:49', 'Power', 'BTS Station'),
    createData('High Room Temperature', '01/09/2021', '22:00', 'Temperature', 'BTS Station'),
  ];
  



export default function Securitylog() {
    return (
        <div className="engeneerlist">
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Log</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Type</TableCell>
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
                {row.Log}
              </TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
              <TableCell align="right">{row.Type}</TableCell>
              <TableCell align="right">{row.Placement}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
        </div>
    )
}
