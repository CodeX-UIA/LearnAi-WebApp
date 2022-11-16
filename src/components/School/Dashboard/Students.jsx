import {
  Box,
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
  AvatarGroup
} from '@mui/material';

function Students({ data }) {
  return (
    <Grid xs={12} item>
      <Card>
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
              Students needing attention
            </Typography>
            <AvatarGroup max={4}>
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

export default Students;
