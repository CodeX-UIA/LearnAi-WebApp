import React, { useState, useRef } from 'react';
import {
  Box,
  Select,
  Button,
  Popover,
  Checkbox,
  InputLabel,
  FormControl,
  FormControlLabel
} from '@mui/material';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const InputGroup2 = ({
  control,
  courses,
  amenities,
  allCourses,
  basicAmenities,
  handleCoursesChange,
  handleAmenityChange
}) => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const [coursesOpen, setCoursesOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);

  const handleAmenitiesOpen = () => {
    setAmenitiesOpen(true);
  };

  const handleAmenitiesClose = () => {
    setAmenitiesOpen(false);
  };

  const handleCoursesOpen = () => {
    setCoursesOpen(true);
  };

  const handleCoursesClose = () => {
    setCoursesOpen(false);
  };
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
        id="enrolledStudents"
        name="enrolledStudents"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ width: '100%' }}
            label="Enrolled students"
            placeholder="Enter number"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            {...field}
          />
        )}
      />
      <Controller
        id="teachers"
        name="teachers"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ width: '100%' }}
            label="Employed Teachers"
            placeholder="Enter number"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            {...field}
          />
        )}
      />
      <Button
        ref={ref}
        variant="text"
        onClick={handleAmenitiesOpen}
        sx={{ '&:hover': { backgroundColor: 'transparent' }, padding: 0 }}
      >
        <FormControl fullWidth>
          <InputLabel id="infrastructure_label">
            Select all the facilities available and in good condition in your
            school
          </InputLabel>
          <Select
            sx={{ width: '100%', zIndex: -99, borderColor: '#BBBCBF' }}
            disabled
            value=""
            id="infrastructure"
            labelId="infrastructure_label"
            label="Choose all the facilities available in your school"
          ></Select>
        </FormControl>
      </Button>
      <Button
        ref={ref2}
        variant="text"
        onClick={handleCoursesOpen}
        sx={{ '&:hover': { backgroundColor: 'transparent' }, padding: 0 }}
      >
        <FormControl fullWidth>
          <InputLabel id="infrastructure_label">
            Select all the facilities available and in good condition in your
            school
          </InputLabel>
          <Select
            sx={{ width: '100%', zIndex: -99, borderColor: '#BBBCBF' }}
            disabled
            value=""
            id="infrastructure"
            labelId="infrastructure_label"
            label="Choose all the facilities available in your school"
          ></Select>
        </FormControl>
      </Button>
      <Popover
        anchorEl={ref.current}
        onClose={handleAmenitiesClose}
        open={amenitiesOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{ paddingY: 2000 }}
      >
        {basicAmenities?.map(({ value, label }) => (
          <Box key={value} sx={{ paddingX: 2 }}>
            <FormControlLabel
              name={value}
              control={
                <Checkbox
                  name={value}
                  checked={amenities[value] === true}
                  onChange={handleAmenityChange}
                />
              }
              label={label}
            />
          </Box>
        ))}
      </Popover>
      <Popover
        anchorEl={ref2.current}
        onClose={handleCoursesClose}
        open={coursesOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{ paddingY: 2000 }}
      >
        {allCourses?.map(({ value, label }) => (
          <Box key={value} sx={{ paddingX: 2 }}>
            <FormControlLabel
              name={value}
              control={
                <Checkbox
                  name={value}
                  onChange={handleCoursesChange}
                  checked={courses[value] === true}
                />
              }
              label={label}
            />
          </Box>
        ))}
      </Popover>
    </Box>
  );
};

export default InputGroup2;
