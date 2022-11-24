import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, Grid, List, Divider, Typography } from '@mui/material';

import { LearnMoreButton } from './styles';
import LearningDisabilityStat from './LearningDisabilityStat';
import LearningDisabilityChart from './LearningDisabilityChart';
import LearningDisabilityDetailsModal from './LearningDisabilityDetailsModal';

function GoalComparisonStat() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);

  const data = [
    {
      name: 'Goal',
      value: 65,
      color: '#12192A'
    },
    {
      name: 'Achieved',
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
              District Goals Achievement
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
                <LearningDisabilityStat
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  key={item.name}
                  data={item}
                />
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
      <LearningDisabilityDetailsModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
    </Grid>
  );
}

export default GoalComparisonStat;
