import React, { useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import SetProfileForm from 'src/components/SetProfile/SetProfileForm';

import Logo from './Logo/index';

const SetProfile = () => {
  const [activeSet, setActive] = useState(1);
  const image = '/static/images/placeholders/illustrations/dataProcess.svg';

  return (
    <Box
      sx={{
        gap: 8,
        padding: 5,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Box>
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Logo />
          </Box>
          <Typography variant="body" sx={{ fontSize: '14px' }}>
            Enter details about your district
          </Typography>
        </Box>
        <SetProfileForm activeSet={activeSet} setActive={setActive} />
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Avatar
          src={image}
          alt=""
          sx={{ borderRadius: 0, width: 600, height: 600 }}
        />
      </Box>
    </Box>
  );
};

export default SetProfile;
