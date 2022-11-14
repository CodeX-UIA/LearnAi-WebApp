import { useRef, useState } from 'react';

import NextLink from 'next/link';

import {
  Box,
  List,
  Button,
  Avatar,
  Hidden,
  Divider,
  ListItem,
  Popover,
  ListItemText
} from '@mui/material';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';

const Link = ({}) => {
  return (
    <NextLink href="/management/profile" passHref>
      <ListItem button>
        <AccountBoxTwoToneIcon fontSize="small" />
        <ListItemText primary="My Profile" />
      </ListItem>
    </NextLink>
  );
};

export default Link;
