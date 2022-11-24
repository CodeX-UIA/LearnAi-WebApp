import { Box, Grid, Card, Typography } from '@mui/material';

import PerformanceChart from './PerformanceChart';
import LearningDisabilityStats from './LearningDisabilityStats';

function StudentPerformance() {
  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={7}>
          <Box pl={4} pr={2} pt={4}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              Student Performance
            </Typography>
            <PerformanceChart />
          </Box>
        </Grid>
        <LearningDisabilityStats />
      </Grid>
    </Card>
  );
}

export default StudentPerformance;
