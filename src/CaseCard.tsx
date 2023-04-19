import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Case } from './interfaces';
import Link from 'next/link';

interface CaseCardProps {
  caseData: Case;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseData }) => {
  return (
    <Link href={`/case/${caseData.id}`} passHref>
      <Card
        sx={{
          cursor: 'pointer',
          marginBottom: 1,
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" noWrap>
            {caseData.patientName}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseCard;
