import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import SidebarLayout from 'src/layouts/SidebarLayout';

import StudentReport from '../StudentReport';
import StudentPerformance from '../StudentPerformance';

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
    <Card sx={{ width: '100%', padding: 0, mt: 4 }}>
      <Tabs
        value={value}
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChange}
        indicatorColor="primary"
        sx={{ marginX: 3, marginTop: 2 }}
      >
        <Tab label="Student performance" {...a11yProps(0)} />
        <Tab label="Classes" {...a11yProps(1)} />
        <Tab label="Reviews" {...a11yProps(2)} />
        <Tab label="Report" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <StudentPerformance />
      </TabPanel>
      <TabPanel value={value} index={1}>
        jjjj
      </TabPanel>
      <TabPanel value={value} index={2}>
        nbhvh{/* <StudentsTable /> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StudentReport />
      </TabPanel>
    </Card>
  );
}

TabComponent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default TabComponent;
