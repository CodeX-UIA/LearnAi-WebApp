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
        id="schoolName"
        name="schoolName"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ width: '100%' }}
            label="School Name"
            placeholder="Enter name"
            multiline
            {...field}
          />
        )}
      />
      <Controller
        id="email"
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ width: '100%' }}
            label="Email"
            placeholder="Enter school email"
            multiline
            {...field}
          />
        )}
      />
      <Controller
        name="schoolID"
        control={control}
        render={({ field }) => (
          <TextField
            multiline
            {...field}
            id="schoolID"
            label="School ID"
            sx={{ width: '100%' }}
            placeholder="Enter school ID"
          />
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth {...field}>
            <InputLabel id="type_label">School Type</InputLabel>
            <Select
              multiline
              name="type"
              value={type}
              label="School Type"
              labelId="type_label"
              sx={{ textAlign: 'left' }}
              onChange={handleTypeChange}
            >
              {schoolTypes?.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="language"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth {...field}>
            <InputLabel id="language_label">Language</InputLabel>
            <Select
              multiline
              name="language"
              value={language}
              label="Language"
              labelId="language_label"
              sx={{ textAlign: 'left' }}
              onChange={handleLanguageChange}
            >
              {languages?.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <TextField
            multiline
            {...field}
            id="phone"
            label="Phone Number"
            sx={{ width: '100%' }}
            placeholder="Enter school phone number"
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <TextField
            multiline
            {...field}
            id="address"
            address={3}
            label="Address"
            sx={{ width: '100%' }}
            placeholder="Enter school address"
          />
        )}
      />
    </Box>
  );
};

export default InputGroup1;
