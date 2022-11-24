import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const InputGroup1 = ({
  type,
  control,
  language,
  languages,
  schoolTypes,
  handleTypeChange,
  handleLanguageChange
}) => {
  return (
    <Box
      sx={{
        mt: 4,
        gap: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Controller
        id="districtName"
        name="districtName"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ width: '100%' }}
            label="District Name"
            placeholder="Enter name"
            multiline
            {...field}
          />
        )}
      />
      <Controller
        id="code"
        name="code"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ width: '100%' }}
            label="Code"
            placeholder="Enter district code"
            multiline
            {...field}
          />
        )}
      />
      <Controller
        name="headquarters"
        control={control}
        render={({ field }) => (
          <TextField
            multiline
            {...field}
            id="headquarters"
            label="Headquarters"
            sx={{ width: '100%' }}
            placeholder="Enter Headquarters"
          />
        )}
      />
      <Controller
        name="numOfSchools"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="numOfSchools"
            label="Number Of Schools"
            sx={{ width: '100%' }}
            placeholder="Enter Number Of Schools"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
          />
        )}
      />
    </Box>
  );
};

export default InputGroup1;
