import { useContext } from 'react';
import { useRouter } from 'next/router';

import { List, ListSubheader } from '@mui/material';

import { MenuWrapper, SubMenuWrapper } from './styles';

import { districtRoutes } from 'src/utils/routes';
import MenuItem from 'src/components/SidebarMenu/MenuItem';
import { SidebarContext } from 'src/contexts/SidebarContext';

function SidebarMenu() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { closeSidebar } = useContext(SidebarContext);

  const getRoutes = () =>
    districtRoutes.map((route) => {
      return (
        route?.sidebarContent &&
        !route?.innerContent && (
          <MenuItem
            route={route}
            key={route.path}
            currentRoute={currentRoute}
            closeSidebar={closeSidebar}
          />
        )
      );
    });

  return (
    <>
      <MenuWrapper>
        <SubMenuWrapper>
          <List component="div" sx={{ mt: '30px' }}>
            {getRoutes()}
          </List>
        </SubMenuWrapper>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
