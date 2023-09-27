import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';

function Matproperties() {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    matpropshortname: '',
    matpropfullname: '',
     matpropdescr: '',
    createdat: '',
    createdby: '',
    modifiedat: '',
    modifiedby: '',
    // isActive: 1,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080mat/getmat');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
        matpropshortname: '',
        matpropfullname: '',
         matpropdescr: '',
      createdat: '',
      createdby: '',
      modifiedat: '',
      modifiedby: '',
    //   isActive:0,
    });
  };

  const getUserId = () => {
    return 'user123'; 
  };

  const handleSubmit = async () => {
    const currentDate = new Date();
    const createdat = currentDate.toISOString(); 
    const modifiedat = currentDate.toISOString(); 
    const createdby = getUserId(); 
    const modifiedby = getUserId();

    // Update formData with generated values
    setFormData({
      ...formData,
      createdat,
      createdby,
      modifiedat,
      modifiedby,
    });

    try {
      const response = await fetch('http://localhost:8080/addmat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchData(); // Fetch the updated data from the server
        handleCloseDialog();
      } else {
        console.error('Error adding data:', response.status);
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleUpdate = async (id) => {
    const currentDate = new Date();
    const modifiedat = currentDate.toISOString(); 
    const modifiedby = getUserId(); 

    // Update formData with generated values
    setFormData({
      ...formData,
      modifiedat,
      modifiedby,
    });

    try {
      const response = await fetch(`http://localhost:8080/updatemat/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchData(); // Fetch the updated data from the server
        handleCloseDialog();
      } else {
        console.error('Error updating data:', response.status);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/deletemat/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchData(); // Fetch the updated data from the server
      } else {
        console.error('Error deleting data:', response.status);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <Typography sx={{ padding: '0 10px 0 10px' }}>
        <h1>Matproperties Management</h1>
        <Button
          variant="outlined"
          onClick={handleOpenDialog}
          sx={{ float: 'right', margin: '0 20px 20px' }}
        >
          Add Data
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Matproperties Name</TableCell>
                <TableCell>matpropfullname</TableCell>
                <TableCell>Matproperties</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Created By</TableCell>
                <TableCell>Modified At</TableCell>
                <TableCell>Modified By</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item. matpropshortname}</TableCell>
                  <TableCell>{item.  matpropfullname}</TableCell>
                  <TableCell>{item.  matpropdescr}</TableCell>
                  
                  <TableCell>{item.createdat}</TableCell>
                  <TableCell>{item.createdby}</TableCell>
                  <TableCell>{item.modifiedat}</TableCell>
                  <TableCell>{item.modifiedby}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        setFormData({ ...item });
                        handleOpenDialog();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      sx={{ marginLeft: '20px' }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{formData._id ? 'Edit Data' : 'Add Data'}</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ marginTop: '20px' }}
              label="Lining Zone Name"
              fullWidth
              value={formData. matpropshortname}
              onChange={(e) =>
                setFormData({ ...formData,  matpropshortname: e.target.value })
              }
            />
            <TextField
              sx={{ marginTop: '20px' }}
              label="Description"
              fullWidth
              value={formData.  matpropdescr}
              onChange={(e) =>
                setFormData({ ...formData,   matpropdescr: e.target.value })
              }
            />
            {/* Add other fields here */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button
              onClick={formData._id ? () => handleUpdate(formData._id) : handleSubmit}
              color="primary"
            >
              {formData._id ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </Dialog>
      </Typography>
    </div>
  );
}

export default Matproperties;