import {
  Box,
  Card,
  List,
  Avatar,
  Divider,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Text from 'src/components/Text';
import Label from 'src/components/Label';

function ClassRankings() {
  return (
    <Card>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '21px',
          gap: 1
        }}
      >
        <Typography variant="h3" fontSize="16px">
          Class Ranking
        </Typography>
        <Typography variant="p">{'(grades)'}</Typography>
      </Box>
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt="class4A"
              src="/static/images/placeholders/illustrations/class1.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">Class 4A</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text>Highest Average</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Label>
              <ArrowUpwardIcon color="success" fontSize="5px" />
            </Label>
            <Typography variant="h4" noWrap pl={1}>
              96
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt="class4A"
              src="/static/images/placeholders/illustrations/class2.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">Class 3A</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text>Lowest Average</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Label>
              <ArrowDownwardIcon color="error" fontSize="5px" />
            </Label>
            <Typography variant="h4" noWrap pl={1}>
              87
            </Typography>
          </Box>
        </ListItem>
      </List>
    </Card>
  );
}

export default ClassRankings;
