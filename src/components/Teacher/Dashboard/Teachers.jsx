import {
  Box,
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
  AvatarGroup
} from '@mui/material';

function Teachers({ data }) {
  return (
    <Grid xs={12} item>
      <Card
        sx={{
          px: 1
        }}
      >
        <CardContent
          sx={{
            '&:last-child': {
              padding: '0px',
              paddingBottom: '0px'
            }
          }}
        >
          <Box
            display="flex"
            padding="15px"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="p" sx={{ fontSize: '16px' }}>
              Teachers needing attention
            </Typography>
            <AvatarGroup max={5}>
              {data.map(({ fullName, imageUrl }) => (
                <Avatar key={fullName} alt={fullName} src={imageUrl} />
              ))}
            </AvatarGroup>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Teachers;
