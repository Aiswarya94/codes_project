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

function District() {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    districtname: '',
    districtstateid: '',
    districtdescr: '',
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
      const response = await fetch('http://localhost:8080/get');
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
        districtname: '',
        districtstateid: '',
        districtdescr: '',
      createdat: '',
      createdby: '',
      modifiedat: '',
      modifiedby: '',
      isActive:0,
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
      const response = await fetch('http://localhost:8080/adddistrict', {
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
      const response = await fetch(`http://localhost:8080/updatedistrict/${id}`, {
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
      const response = await fetch(`http://localhost:8080/deletedistrict/${id}`, {
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
        <h1>District Management</h1>
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
                <TableCell>District Name</TableCell>
                <TableCell>Districtstateid</TableCell>
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
                  <TableCell>{item. districtname}</TableCell>
                  <TableCell>{item. districtstateid}</TableCell>
                  <TableCell>{item.districtdescr}</TableCell>
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
              value={formData. districtname}
              onChange={(e) =>
                setFormData({ ...formData,  districtname: e.target.value })
              }
            />
            <TextField
              sx={{ marginTop: '20px' }}
              label="Description"
              fullWidth
              value={formData. districtdescr}
              onChange={(e) =>
                setFormData({ ...formData,  districtdescr: e.target.value })
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

export default District;