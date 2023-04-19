import React, { useState, useContext } from 'react';
import { CaseContext } from './CaseContext';
import { Case } from './interfaces';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const NewCaseModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [visitDetails, setVisitDetails] = useState('');
  const { addCase } = useContext(CaseContext);

  const handleSubmit = () => {
    const newCase: Case = {
      id: new Date().getTime(),
      patientName,
      status: 'Open',
      code: '',
      visitDetails,
    };

    addCase(newCase);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setPatientName('');
    setVisitDetails('');
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Case
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Case</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Patient Name"
            fullWidth
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Visit Details"
            fullWidth
            multiline
            rows={4}
            value={visitDetails}
            onChange={(e) => setVisitDetails(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewCaseModal;
