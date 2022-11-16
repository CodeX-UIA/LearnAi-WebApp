import { Box, Grid, Button, Typography } from '@mui/material';

import Students from './Students';
import Teachers from './Teachers';

function Attention() {
  const data = {
    students: [
      {
        fullName: 'Isha Kolley',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Binta Sharp',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Bouba Howard',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Morry Baker',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Manny Walker',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Trevor Henderson',
        imageUrl: '/static/images/avatar/1.jpg'
      }
    ],
    teachers: [
      {
        fullName: 'Aminata Manneh',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Remy Sharp',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Travis Howard',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Cindy Baker',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Agnes Walker',
        imageUrl: '/static/images/avatar/1.jpg'
      },
      {
        fullName: 'Trevor Henderson',
        imageUrl: '/static/images/avatar/1.jpg'
      }
    ]
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">Attention</Typography>
        <Button size="small" variant="outlined">
          See all
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Teachers data={data.teachers} />
        <Students data={data.students} />
      </Grid>
    </>
  );
}

export default Attention;
