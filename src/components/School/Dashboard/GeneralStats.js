import { Grid } from '@mui/material';

import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import GeneralStatCard from './GeneralStatCard';

function GeneralStats() {
  const data = [
    {
      value: 350,
      icon: <GroupIcon sx={{ color: '#223354' }} />,
      title: 'Students'
    },
    {
      value: 350,
      icon: <SchoolIcon sx={{ color: '#223354' }} />,
      title: 'Teachers'
    },
    {
      value: 350,
      icon: <LeaderboardIcon sx={{ color: '#223354' }} />,
      title: 'School Rank'
    },
    {
      value: 350,
      icon: <TrendingDownIcon sx={{ color: '#223354' }} />,
      title: 'Dropout Rate'
    }
  ];

  return (
    <>
      <Grid container spacing={3}>
        {data.map(({ value, icon, title }) => (
          <GeneralStatCard
            key={title}
            icon={icon}
            title={title}
            value={value}
          />
        ))}
      </Grid>
    </>
  );
}

export default GeneralStats;
