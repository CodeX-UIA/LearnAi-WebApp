import React from 'react';
import { Box, Typography } from '@mui/material';

import { AvatarWrapper } from './styles';

const HeaderCard = ({ data }) => {
  const { value, title, icon } = data;
  return (
    <Box
      sx={{
        gap: 2,
        paddingX: 3,
        paddingY: 1,
        width: '100%',
        borderRadius: 0,
        display: 'flex',
        boxShadow: 'none',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <AvatarWrapper>{icon}</AvatarWrapper>
      <Box>
        <Typography>{title}</Typography>
        <Typography fontSize="24px" fontWeight="bold">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderCard;
