import { Box, Grid, Card, Typography } from '@mui/material';

import PerformanceChart from './PerformanceChart';
import LearningDisabilityStats from './GoalComparisonStat';

function StudentPerformance() {
  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={12}>
          <Box pl={4} pr={2} pt={4}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              Student's performances on test
            </Typography>
            <PerformanceChart />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default StudentPerformance;
