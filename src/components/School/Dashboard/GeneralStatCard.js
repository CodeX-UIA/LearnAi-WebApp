import { Card, Grid, Box, CardContent, Typography } from '@mui/material';

import { AvatarWrapper } from './styles';

function GeneralStatCard({ icon, title, value }) {
  return (
    <Grid xs={12} sm={6} md={3} item>
      <Card
        sx={{
          px: 1
        }}
      >
        <CardContent>
          <AvatarWrapper>{icon}</AvatarWrapper>
          <Box
            sx={{
              pt: 1
            }}
          >
            <Typography variant="h3" gutterBottom noWrap>
              {value}
            </Typography>
            <Typography variant="subtitle2" noWrap>
              {title}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default GeneralStatCard;
