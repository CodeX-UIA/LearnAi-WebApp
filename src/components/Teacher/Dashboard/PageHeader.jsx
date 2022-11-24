import { Typography, Avatar, Grid, useTheme } from '@mui/material';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/placeholders/illustrations/businessman.svg'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="subtitle2">
          Enter marks for your students
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
