import React from 'react';
import { Box, Card, Divider } from '@mui/material';

import { Group } from '@mui/icons-material';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import AccessibleIcon from '@mui/icons-material/Accessible';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import HeaderCard from './HeaderCard';

const Header = () => {
  const data = [
    {
      value: 34,
      icon: <Group sx={{ color: '#223354' }} />,
      title: 'Total'
    },
    {
      value: 34,
      icon: <TrendingUpIcon sx={{ color: '#223354' }} />,
      title: 'Passing'
    },
    {
      value: 34,
      icon: <TrendingDownIcon sx={{ color: '#223354' }} />,
      title: 'Failing'
    },
    {
      value: 34,
      icon: <AccessibleIcon sx={{ color: '#223354' }} />,
      title: 'Disabled'
    },
    {
      value: 34,
      icon: <GirlIcon sx={{ color: '#223354' }} />,
      title: 'Girls'
    },
    {
      value: 34,
      icon: <BoyIcon sx={{ color: '#223354' }} />,
      title: 'Boys'
    }
  ];

  const data1 = data.splice(0, 3);

  return (
    <Card sx={{ mb: 2 }}>
      <Box
        sx={{
          gap: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {data1.map((studentData) => (
          <HeaderCard key={studentData.title} data={studentData} />
        ))}
      </Box>
      <Divider />
      <Box
        sx={{
          gap: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {data.map((studentData) => (
          <HeaderCard key={studentData.title} data={studentData} />
        ))}
      </Box>
    </Card>
  );
};

export default Header;
