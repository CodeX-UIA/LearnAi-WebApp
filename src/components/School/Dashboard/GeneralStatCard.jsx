import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Card, Grid, Box, CardContent, Typography } from '@mui/material';

import Label from 'src/components/Label';

import { AvatarWrapper } from './styles';

function GeneralStatCard({ icon, title, value, extra }) {
  return (
    <Grid xs={12} sm={6} md={3} item>
      <Card
        sx={{
          px: 1
        }}
      >
        <CardContent
          sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}
        >
          <AvatarWrapper>{icon}</AvatarWrapper>
          <Box
            sx={{
              pt: 1
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Typography variant="h3" gutterBottom noWrap pr={2}>
                {value}
              </Typography>
              {extra && (
                <Label color={extra?.trending === 'up' ? 'error' : 'success'}>
                  {extra?.trending === 'up' ? (
                    <TrendingUpIcon />
                  ) : (
                    <TrendingDownIcon />
                  )}
                </Label>
              )}
            </Box>
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
