import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import SidebarLayout from 'src/layouts/SidebarLayout';

import StudentReport from '../SchoolReport';
import StudentPerformance from '../SchoolPerformance';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function TabComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ width: '100%', paddingX: 3, mt: 4 }}>
      <StudentPerformance />
    </Card>
  );
}

TabComponent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default TabComponent;
