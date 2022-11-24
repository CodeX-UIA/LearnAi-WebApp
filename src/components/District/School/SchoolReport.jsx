import { faker } from '@faker-js/faker';
import {
  Box,
  Grid,
  Card,
  MenuItem,
  Typography,
  Button,
  FormControl,
  Select,
  Divider
} from '@mui/material';
import { useState } from 'react';
import FinalGrades from './FinalGrades';

import PerformanceChart from './PerformanceChart';
import PredictedGrades from './PredictedGrades';
import PredictedPerformanceChart from './PredictedPerformanceChart';

function StudentReport() {
  const [filters, setFilters] = useState({
    status: null
  });

  const statusOptions = [
    {
      id: 'term121',
      name: 'Term 1 (2021)'
    },
    {
      id: 'term122',
      name: 'Term 2 (2021)'
    },
    {
      id: 'term123',
      name: 'Term 3 (2021)'
    },
    {
      id: 'term124',
      name: 'Term 1 (2022)'
    }
  ];

  const handleStatusChange = (e) => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

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
