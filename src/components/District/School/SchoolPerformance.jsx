import { useState } from 'react';
import {
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  Typography
} from '@mui/material';

import FinalGrades from './FinalGrades';
import PerformanceChart from './PerformanceChart';

function StudentPerformance() {
  const [filters, setFilters] = useState({
    status: null
  });

  const statusOptions = [
    {
      id: 'term121',
      name: 'Term 1 (2021)'
    },
    {
      id: 'term122',
      name: 'Term 2 (2021)'
    },
    {
      id: 'term123',
      name: 'Term 3 (2021)'
    },
    {
      id: 'term124',
      name: 'Term 1 (2022)'
    }
  ];

  const handleStatusChange = (e) => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  return (
    <Box sx={{ width: '100%', pt: 3 }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontSize: 18 }}>
            Student's performances
          </Typography>
        </Box>
        <Box width={180}>
          <FormControl
            sx={{ padding: 0, borderColor: 'red' }}
            fullWidth
            variant="outlined"
          >
            <Select
              sx={{ padding: 2, height: '10px' }}
              value={filters.status || 'term124'}
              onChange={handleStatusChange}
              autoWidth
            >
              {statusOptions.map((statusOption) => (
                <MenuItem key={statusOption.id} value={statusOption.id}>
                  {statusOption.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid columnSpacing={5} container sx={{ mt: 3 }}>
        <Grid item xs={12} md={9}>
          <Box>
            <PerformanceChart />
          </Box>
        </Grid>
        <FinalGrades />
      </Grid>
    </Box>
  );
}

export default StudentPerformance;
