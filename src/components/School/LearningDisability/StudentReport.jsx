import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import FinalGrades from './FinalGrades';
import PerformanceChart from './PerformanceChart';
import PredictedGrades from './PredictedGrades';
import PredictedPerformanceChart from './PredictedPerformanceChart';

function StudentReport() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography>
        Based on a variety of factors like student's previous grades, comparison
        with other students grades and other metrics, you can see the report of
        how the student will perform next semester and take necessary actions.
        Please note that due to certain unexpected factors, the predicted grades
        may vary in accuracy.
      </Typography>

      <Grid columnSpacing={5} container sx={{ mt: 3 }}>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              mb: 2,
              padding: 2,
              borderRadius: 1,
              backgroundColor: '#EDF0F5'
            }}
          >
            <Typography variant="h4" sx={{ mb: 3 }}>
              Past Semesters' performance
            </Typography>
            <PerformanceChart />
          </Box>
        </Grid>
        <FinalGrades />
      </Grid>
      <Grid columnSpacing={5} container sx={{ mt: 3 }}>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              mb: 2,
              padding: 2,
              borderRadius: 1,
              backgroundColor: '#EDF0F5'
            }}
          >
            <Typography variant="h4" sx={{ mb: 3 }}>
              Next Semesters' predicted performance
            </Typography>
            <PredictedPerformanceChart />
          </Box>
        </Grid>
        <PredictedGrades />
      </Grid>
    </Box>
  );
}

export default StudentReport;
