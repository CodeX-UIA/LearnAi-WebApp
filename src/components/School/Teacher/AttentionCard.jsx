import { Box, Card, styled, Avatar, useTheme, Typography } from '@mui/material';

import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.error.lighter};
      color: red;
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
`
);

function AttentionCard({ user }) {
  const theme = useTheme();

  return (
    <Card>
      <Box px={2} py={2} display="flex" alignItems="center">
        <AvatarPrimary>
          <WarningTwoToneIcon />
        </AvatarPrimary>
        <Box pl={2} flex={1} alignItems="center">
          <Typography sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}>
            {user?.name}'s reviews have been very low lately. Take a look.
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default AttentionCard;
