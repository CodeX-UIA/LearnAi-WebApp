import {
  Box,
  Card,
  styled,
  Avatar,
  Button,
  Divider,
  useTheme,
  Typography,
  CardHeader
} from '@mui/material';

import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ConnectWithoutContactTwoToneIcon from '@mui/icons-material/ConnectWithoutContactTwoTone';

import Label from 'src/components/Label';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
`
);

function RecentActivity({ user }) {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title="Recent Activity" />
      <Divider />
      <Button
        sx={{
          p: 2,
          width: '100%',
          display: 'flex',
          borderRadius: 0,
          fontWeight: '400',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <AvatarPrimary>
            <ThumbUpTwoToneIcon />
          </AvatarPrimary>
          <Box pl={2} flex={1}>
            <Typography
              variant="body"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`,
                color: '#999FAF'
              }}
            >
              Overall impression
            </Typography>

            <Box
              variant="body"
              sx={{
                pt: 0.5
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Typography variant="h3" gutterBottom noWrap pr={2}>
                  {user?.impression?.thisMonth}
                </Typography>
                {user?.impression?.thisMonth && (
                  <Label
                    color={
                      user?.impression?.thisMonth <= user?.impression?.lastMonth
                        ? 'error'
                        : 'success'
                    }
                  >
                    <TrendingDownIcon />
                  </Label>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Button>
      <Divider />
      <Button
        sx={{
          p: 2,
          width: '100%',
          borderRadius: 0,
          display: 'flex',
          fontWeight: '400',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <AvatarPrimary>
            <ConnectWithoutContactTwoToneIcon />
          </AvatarPrimary>
          <Box pl={2} flex={1}>
            <Typography
              variant="body"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`,
                color: '#999FAF'
              }}
            >
              Engagement
            </Typography>

            <Box
              variant="body"
              sx={{
                pt: 0.5
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Typography variant="h3" gutterBottom noWrap pr={2}>
                  {user?.engagement}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Button>
      <Divider />
      <Button
        sx={{
          p: 2,
          width: '100%',
          display: 'flex',
          borderRadius: 0,
          fontWeight: '400',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <AvatarPrimary>
            <StarTwoToneIcon />
          </AvatarPrimary>
          <Box pl={2} flex={1}>
            <Typography
              variant="body"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`,
                color: '#999FAF'
              }}
            >
              Reviews
            </Typography>

            <Box
              sx={{
                pt: 0.5
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Typography variant="h3" gutterBottom noWrap pr={2}>
                  {user?.reviews}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Button>
      <Divider />
    </Card>
  );
}

export default RecentActivity;
