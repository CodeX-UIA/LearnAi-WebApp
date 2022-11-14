import { useContext } from 'react';
import { useRouter } from 'next/router';

import { List, ListSubheader } from '@mui/material';

import { MenuWrapper, SubMenuWrapper } from './styles';

import routes from 'src/utils/routes';
import MenuItem from 'src/components/SidebarMenu/MenuItem';
import { SidebarContext } from 'src/contexts/SidebarContext';

function SidebarMenu() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { closeSidebar } = useContext(SidebarContext);

  const getRoutes = () =>
    routes.map((route) => {
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

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Accounts
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              {routes.map((route) => {
                return (
                  route?.sidebarContent &&
                  route?.innerContent && (
                    <MenuItem
                      route={route}
                      key={route.path}
                      currentRoute={currentRoute}
                      closeSidebar={closeSidebar}
                    />
                  )
                );
              })}
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
