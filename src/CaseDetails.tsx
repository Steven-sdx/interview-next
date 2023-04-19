import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { CaseContext } from './CaseContext';
import { Case, CaseStatus } from './interfaces';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from '@mui/material';

const CaseDetails: React.FC = () => {
  const router = useRouter();
  const { cases, updateCase } = useContext(CaseContext);
  const caseId = parseInt(router.query.id as string);

  const caseData = cases.find((caseItem) => caseItem.id === caseId);

  if (!caseData) {
    return <Typography>No case found</Typography>;
  }

  const updateStatus = (newStatus: CaseStatus) => {
    const updatedCase: Case = {
      ...caseData,
      status: newStatus,
    };
    updateCase(updatedCase);
    router.back();
  };

  const updateCode = (newCode: string) => {
    const updatedCase: Case = {
      ...caseData,
      code: newCode,
    };
    updateCase(updatedCase);
  };

  return (
    <Box>
      <Card>
        <CardHeader title={`Case ID: ${caseData.id}`} />
        <CardContent>
          <Typography variant="h6">
            Patient Name: {caseData.patientName}
          </Typography>
          <Typography variant="body1">Status: {caseData.status}</Typography>
          <TextField
            label="ICD Code"
            value={caseData.code}
            onChange={(e) => updateCode(e.target.value)}
            variant="standard"
          />
          <Typography variant="body1">
            Visit Details: {caseData.visitDetails}
          </Typography>
        </CardContent>
      </Card>
      <Box mt={2} gap={2} display="flex">
        {caseData.status !== 'Open' && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => updateStatus('Open')}
          >
            Move to Open
          </Button>
        )}
        {caseData.status !== 'Coded' && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => updateStatus('Coded')}
          >
            Move to Coded
          </Button>
        )}
        {caseData.status !== 'Ready' && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => updateStatus('Ready')}
          >
            Move to Ready
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CaseDetails;
