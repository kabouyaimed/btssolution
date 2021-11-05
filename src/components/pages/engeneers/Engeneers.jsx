import './engeneers.css'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@mui/material/Button';




const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
    },
    {
      field: 'location',
      headerName: 'Location',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      
    },
    {
      field: "Call",
      sortable: false,
      width: 80,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="success"
            onClick={(event) => {
             
            }}
          >
            Call
          </Button>
        );
      }
    },
    {
      field: "Message",
      sortable: false,
      width: 130,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="success"
            onClick={(event) => {
             
            }}
          >
            Message
          </Button>
        );
      }
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, location: 'Azzaba' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, location: 'Azzaba' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, location: 'Azzaba' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, location: 'Azzaba' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 100, location: 'Azzaba' },
    { id: 6, lastName: 'Kabouya', firstName: 'Imed Eddine', age: 150, location: 'Azzaba' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, location: 'Azzaba' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, location: 'Azzaba' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, location: 'Azzaba' },
  ];
  
export default function Engeneers() {
    return (
        <div className="engeneerlist">
            <div style={{ height: 400, width: '100%' }}>
                 <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
