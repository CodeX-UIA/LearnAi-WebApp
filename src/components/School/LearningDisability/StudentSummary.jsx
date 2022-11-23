import React from 'react';
import { Avatar, Box, Card, Divider, Grid, Typography } from '@mui/material';

import StudentSummaryDetails from './StudentSummaryDetails';

const StudentSummary = () => {
  return (
    <Grid container sx={{ padding: 0 }}>
      <Grid item xs={12}>
        <Card
          sx={{
            gap: 3,
            padding: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Avatar
            sx={{ width: 80, height: 80 }}
            src="/static/images/avatars/2.jpg"
          />
          <Box sx={{ width: '100%' }}>
            <Typography variant="h3" sx={{ fontSize: '22px' }}>
              Ameena Manneh
            </Typography>
            <Divider />
            <StudentSummaryDetails />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StudentSummary;
