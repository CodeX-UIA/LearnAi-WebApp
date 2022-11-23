import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import SidebarLayout from 'src/layouts/SidebarLayout';

import StudentsTable from '../StudentsTable';

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
    <Box sx={{ width: '100%', padding: 0 }}>
      <Tabs
        value={value}
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChange}
        indicatorColor="primary"
        sx={{ marginX: 3, marginTop: 2 }}
      >
        <Tab label="All students" {...a11yProps(0)} />
        <Tab label="Passing" {...a11yProps(1)} />
        <Tab label="Failing" {...a11yProps(2)} />
        <Tab label="Dropped Out" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <StudentsTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StudentsTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StudentsTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StudentsTable />
      </TabPanel>
    </Box>
  );
}

TabComponent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default TabComponent;
