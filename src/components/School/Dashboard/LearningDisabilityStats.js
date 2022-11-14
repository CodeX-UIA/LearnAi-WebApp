import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, Grid, List, Button, Divider, Typography } from '@mui/material';

import { LearnMoreButton } from './styles';
import LearningDisabilityStat from './LearningDisabilityStat';
import LearningDisabilityChart from './LearningDisabilityChart';

function LearningDisabilityStats() {
  const data = [
    {
      name: 'Dyslexia',
      value: 65,
      color: '#12192A'
    },
    {
      name: 'ADHD',
      value: 15,
      color: '#FF9E2C'
    },
    {
      name: 'Dyscalculia',
      value: 20,
      color: '#5568FF'
    }
  ];

  return (
    <Grid
      item
      md={5}
      xs={12}
      display="flex"
      alignItems="flex-start"
      sx={{
        position: 'relative',
        py: 4
      }}
    >
      <Box
        component="span"
        sx={{
          display: { xs: 'none', md: 'inline-block' }
        }}
      >
        <Divider absolute orientation="vertical" />
      </Box>
      <Box pr={4} flex={1}>
        <Grid container spacing={0}>
          <Box
            container
            display="flex"
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            sx={{ width: '100%', pb: 3, pl: 4 }}
          >
            <Typography sx={{}} variant="h4">
              Students with learning disabilities
            </Typography>
            <LearnMoreButton size="small" variant="text">
              <MoreHorizIcon />
            </LearnMoreButton>
          </Box>
          <LearningDisabilityChart data={data} />
          <Grid xs={12} sm={4} item display="flex" alignItems="center">
            <List
              disablePadding
              sx={{
                width: '100%'
              }}
            >
              {data.map((item) => (
                <LearningDisabilityStat key={item.name} data={item} />
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default LearningDisabilityStats;
