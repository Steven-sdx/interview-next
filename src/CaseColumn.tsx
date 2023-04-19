import React, { useContext } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { CaseContext } from './CaseContext';
import { CaseStatus } from './interfaces';
import CaseCard from './CaseCard';

interface CaseColumnProps {
  status: CaseStatus;
}

const CaseColumn: React.FC<CaseColumnProps> = ({ status }) => {
  const { cases } = useContext(CaseContext);

  const filteredCases = cases.filter((caseItem) => caseItem.status === status);

  return (
    <Paper
      sx={{
        backgroundColor: '#ffffff',
        padding: 2,
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" marginBottom={2}>
        {status}
      </Typography>
      <Box>
        {filteredCases.map((caseItem) => (
          <CaseCard key={caseItem.id} caseData={caseItem} />
        ))}
      </Box>
    </Paper>
  );
};

export default CaseColumn;
