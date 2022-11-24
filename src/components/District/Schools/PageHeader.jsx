import { Typography, Avatar, Grid, useTheme } from '@mui/material';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="flex-start" flexDirection="column">
      <Typography variant="h3" component="h3" gutterBottom>
        Schools
      </Typography>
      <Typography variant="subtitle2">
        A list of all the schools registered in the district
      </Typography>
    </Grid>
  );
}

export default PageHeader;
