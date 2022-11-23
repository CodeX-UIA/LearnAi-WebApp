import {
  Box,
  Card,
  Grid,
  Button,
  Divider,
  CardHeader,
  Typography
} from '@mui/material';

function Classes({ user }) {
  const classes = [
    {
      name: 'Class 2A',
      level: 'Junior school',
      subject: 'English Language',
      avatar: '/static/images/avatars/6.jpg'
    },
    {
      name: 'Class 3B',
      level: 'High school',
      subject: 'AP Language',
      avatar: '/static/images/avatars/6.jpg'
    },
    {
      name: 'Class 2C',
      level: 'Junior school',
      subject: 'English Language',
      avatar: '/static/images/avatars/6.jpg'
    },
    {
      name: 'Class 3A',
      level: 'High school',
      subject: 'English Language',
      avatar: '/static/images/avatars/6.jpg'
    },
    {
      name: 'Class 2B',
      level: 'High school',
      subject: 'English Language',
      avatar: '/static/images/avatars/6.jpg'
    },
    {
      name: 'Class 3C',
      level: 'High school',
      subject: 'English Language',
      avatar: '/static/images/avatars/6.jpg'
    }
  ];

  return (
    <Card>
      <CardHeader title={`${user?.name}'s Classes`} />
      <Divider />
      <Box p={2}>
        <Grid container spacing={0}>
          {classes.map((_class) => (
            <Grid
              item
              sm={6}
              lg={4}
              xs={12}
              key={_class.name}
              sx={{ width: '100%' }}
            >
              <Button sx={{ color: '#223354' }}>
                <Box p={3} display="flex" alignItems="flex-start">
                  <Box>
                    <Typography gutterBottom variant="subtitle2">
                      {_class.subject}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      {_class.name}
                    </Typography>
                    <Typography color="text.primary" sx={{ pb: 2 }}>
                      {_class.level}
                    </Typography>
                    <Button variant="outlined" size="small">
                      View
                    </Button>
                  </Box>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
}

export default Classes;
