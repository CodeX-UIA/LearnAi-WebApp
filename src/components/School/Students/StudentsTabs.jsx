import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@mui/material';

import TabPanel from './tabs';

const StudentsTabs = () => {
  return (
    <Card>
      <TabPanel />
    </Card>
  );
};

StudentsTabs.propTypes = {
  studentDetails: PropTypes.array.isRequired
};

StudentsTabs.defaultProps = {
  studentDetails: []
};

export default StudentsTabs;
