import { Card, Grid } from '@mui/material';

import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Group } from '@mui/icons-material';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import AccessibleIcon from '@mui/icons-material/Accessible';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import GeneralStatCard from './GeneralStatCard';

function GeneralStats() {
  const data = [
    {
      value: 500,
      icon: <GroupIcon sx={{ color: '#223354' }} />,
      title: 'Schools'
    },
    {
      value: 200,
      icon: <SchoolIcon sx={{ color: '#223354' }} />,
      title: 'Registered Schools'
    },
    {
      value: 350,
      icon: <TrendingDownIcon sx={{ color: '#223354' }} />,
      title: 'Average Fail'
    },
    {
      value: 350,
      icon: <TrendingUpIcon sx={{ color: '#223354' }} />,
      title: 'Average Pass'
    },
    {
      value: 200,
      icon: <AccessibleIcon sx={{ color: '#223354' }} />,
      title: 'Disabled'
    },
    {
      value: 350,
      icon: <BoyIcon sx={{ color: '#223354' }} />,
      title: 'Male'
    },
    {
      value: 350,
      icon: <GirlIcon sx={{ color: '#223354' }} />,
      title: 'Female'
    },

    {
      value: '4%',
      extra: {
        trending: 'up'
      },
      icon: <TrendingDownIcon sx={{ color: '#223354' }} />,
      title: 'Dropout Rate'
    }
  ];

  return (
    <Card>
      <Grid container spacing={0}>
        {data.map(({ value, icon, title, extra }) => (
          <GeneralStatCard
            key={title}
            icon={icon}
            extra={extra}
            title={title}
            value={value}
          />
        ))}
      </Grid>
    </Card>
  );
}

export default GeneralStats;
