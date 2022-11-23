import { useRouter } from 'next/router';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

function PageHeader() {
  const router = useRouter();

  return (
    <Box
      sx={{
        gap: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <Tooltip arrow placement="top" title="Go back">
        <Button
          variant="text"
          sx={{
            padding: 0,
            minWidth: 0,
            transition: '0.3s ease',
            '&:hover': { opacity: 0.7 }
          }}
          onClick={() => router.back()}
        >
          <ArrowBackTwoToneIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
        </Button>
      </Tooltip>
      <Box>
        <Typography variant="h3" component="h3" gutterBottom>
          Dyslexia
        </Typography>
      </Box>
    </Box>
  );
}

export default PageHeader;
