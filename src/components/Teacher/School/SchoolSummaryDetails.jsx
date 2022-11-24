import React from 'react';
import { format, subDays } from 'date-fns';
import { Avatar, Box, Card, Divider, Grid, Typography } from '@mui/material';

const StudentSummaryDetails = () => {
  return (
    <Box
      sx={{
        mt: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Typography
          variant="body"
          sx={{ fontWeight: 600, fontSize: 14, color: '#1E2C48' }}
        >
          School ID
        </Typography>
        <Typography>ameena002</Typography>
      </Box>
      <Box>
        <Typography
          variant="body"
          sx={{ fontWeight: 600, fontSize: 14, color: '#1E2C48' }}
        >
          Email
        </Typography>
        <Typography>Female</Typography>
      </Box>
      <Box>
        <Typography
          variant="body"
          sx={{ fontWeight: 600, fontSize: 14, color: '#1E2C48' }}
        >
          Phone Number
        </Typography>
        <Typography>2A</Typography>
      </Box>
      <Box>
        <Typography
          variant="body"
          sx={{ fontWeight: 600, fontSize: 14, color: '#1E2C48' }}
        >
          SchoolRank
        </Typography>
        <Typography>High School</Typography>
      </Box>
      <Box>
        <Typography
          variant="body"
          sx={{ fontWeight: 600, fontSize: 14, color: '#1E2C48' }}
        >
          Date Added
        </Typography>
        <Typography>
          {format(subDays(new Date(), 55).getTime(), 'MMM yyyy')}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body"
          sx={{ fontWeight: 600, fontSize: 14, color: '#1E2C48' }}
        >
          Infrastructure
        </Typography>
        <Typography>2/5</Typography>
      </Box>
    </Box>
  );
};

export default StudentSummaryDetails;
