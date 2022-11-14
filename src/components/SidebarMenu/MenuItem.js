import NextLink from 'next/link';
import { Button, ListItem } from '@mui/material';

function MenuItem({ route, currentRoute, closeSidebar }) {
  const { name, path, icon } = route || {};

  return (
    <ListItem component="div" key={path}>
      <NextLink href={path} passHref>
        <Button
          component="a"
          disableRipple
          startIcon={icon}
          onClick={closeSidebar}
          className={currentRoute === path ? 'active' : ''}
        >
          {name}
        </Button>
      </NextLink>
    </ListItem>
  );
}

export default MenuItem;
