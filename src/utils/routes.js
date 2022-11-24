import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import GridViewIcon from '@mui/icons-material/GridView';

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';

export const districtRoutes = [
  {
    name: 'Dashboard',
    sidebarContent: true,
    path: '/district/dashboard',
    icon: <GridViewIcon />
  },
  {
    name: 'Schools',
    sidebarContent: true,
    path: '/district/schools',
    icon: <SchoolIcon />
  }
];

const routes = [
  {
    name: 'Dashboard',
    sidebarContent: true,
    path: '/school/dashboard',
    icon: <GridViewIcon />
  },
  {
    name: 'Teachers',
    sidebarContent: true,
    path: '/school/teachers',
    icon: <SchoolIcon />
  },
  {
    name: 'Students',
    sidebarContent: true,
    path: '/school/students',
    icon: <GroupIcon />
  },
  {
    name: 'Subjects',
    sidebarContent: true,
    path: '/school/subjects',
    icon: <ScienceIcon />
  },
  {
    name: 'Profile',
    innerContent: true,
    sidebarContent: true,
    path: '/school/management/profile',
    icon: <AccountCircleTwoToneIcon />
  },
  {
    innerContent: true,
    sidebarContent: true,
    name: 'Account Settings',
    icon: <DisplaySettingsTwoToneIcon />,
    path: '/school/management/profile/settings'
  }
];

export default routes;
