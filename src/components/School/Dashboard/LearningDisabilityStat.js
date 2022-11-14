import {
  Box,
  Grid,
  styled,
  ListItem,
  Typography,
  ListItemText,
  LinearProgress,
  linearProgressClasses
} from '@mui/material';

import { determinate1Keyframes, StatButton } from './styles';

function LearningDisabilityStat({ data }) {
  const { name, value, color } = data || {};

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 6,
    borderRadius: 5,
    '& .MuiLinearProgress-bar1Determinate': {
      width: 'auto',
      animation: `${determinate1Keyframes} 1s linear forwards`
    },
    '& .MuiLinearProgress-bar2Determinate': {
      display: 'none'
    },
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#EBEDEF'
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: color
    }
  }));

  return (
    <ListItem disableGutters>
      <StatButton sx={{ width: '100%' }}>
        <Grid container spacing={1}>
          <Grid xs={12} sm={12} item display="flex" alignItems="center">
            <ListItemText
              primary={name}
              primaryTypographyProps={{
                variant: 'subtitle2',
                noWrap: true
              }}
            />
            <Box>
              <Typography align="right" variant="h4" noWrap>
                {value}%
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} item display="flex" alignItems="center">
            <Box flexGrow={1}>
              <BorderLinearProgress variant="determinate" value={value} />
            </Box>
          </Grid>
        </Grid>
      </StatButton>
    </ListItem>
  );
}

export default LearningDisabilityStat;
