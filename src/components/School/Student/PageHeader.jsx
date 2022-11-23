import { Box, Tooltip, Typography } from '@mui/material';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

function PageHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
      }}
    >
      <Tooltip arrow placement="top" title="Go back">
        <Box sx={{ '&:hover': { opacity: 0.7 }, transition: '0.3s ease' }}>
          <ArrowBackTwoToneIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
        </Box>
      </Tooltip>
      <Box>
        <Typography variant="h3" component="h3" gutterBottom>
          Student
        </Typography>
      </Box>
    </Box>
  );
}

export default PageHeader;
