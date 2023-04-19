import React from 'react';
import { Grid } from '@mui/material';
import CaseColumn from '../CaseColumn';
import NewCaseModal from '../NewCaseModal';

const Home: React.FC = () => {
  return (
    <>
      <NewCaseModal />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CaseColumn status="Open" />
        </Grid>
        <Grid item xs={4}>
          <CaseColumn status="Coded" />
        </Grid>
        <Grid item xs={4}>
          <CaseColumn status="Ready" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
