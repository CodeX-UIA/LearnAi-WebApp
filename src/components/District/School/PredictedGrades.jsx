import React from 'react';
import { faker } from '@faker-js/faker';
import { Box, Grid, Divider, Typography } from '@mui/material';

const PredictedGrades = () => {
  return (
    <Grid item xs={12} md={3}>
      <Box
        sx={{
          mb: 2,
          paddingY: 1,
          paddingX: 2,
          borderRadius: 1,
          backgroundColor: '#EDF0F5'
        }}
      >
        <Typography variant="h4">Predicted Grades</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexDirection: 'column',
          height: 200,
          overflow: 'scroll'
        }}
      >
        <Box>
          <Typography>Mathematics</Typography>
          <Typography>
            {faker.datatype.number({
              min: 30,
              max: 100
            })}
          </Typography>
        </Box>
        <Divider />
        <Box>
          <Typography>English Language</Typography>
          <Typography>
            {faker.datatype.number({
              min: 30,
              max: 100
            })}
          </Typography>
        </Box>
        <Divider />
        <Box>
          <Typography>Science</Typography>
          <Typography>
            {faker.datatype.number({
              min: 30,
              max: 100
            })}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default PredictedGrades;
