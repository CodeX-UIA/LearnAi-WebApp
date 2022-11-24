import React, { useState, useRef } from 'react';
import {
  Box,
  Select,
  Button,
  Popover,
  Checkbox,
  InputLabel,
  FormControl,
  FormControlLabel,
  MenuItem
} from '@mui/material';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const InputGroup2 = ({
  rating,
  control,
  courses,
  amenities,
  allCourses,
  safetyRating,
  basicAmenities,
  amenitiesRating,
  handleRatingChange,
  handleCoursesChange,
  handleAmenityChange,
  handleSafetyRatingChange
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
      <Controller
        name="amenitiesRating"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth {...field}>
            <InputLabel id="type_label">
              On Scale of 1 - 5 please rate the state of amenities you have in
              you school
            </InputLabel>
            <Select
              multiline
              name="amenitiesRating"
              value={amenitiesRating}
              label="Amenities Rating"
              labelId="amenities_label"
              sx={{ textAlign: 'left' }}
              onChange={handleRatingChange}
            >
              {rating?.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="safety"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth {...field}>
            <InputLabel id="safety_label">
              On Scale of 1 - 5 please rate the state of safety of your school,
              neighborhood, and surroundings
            </InputLabel>
            <Select
              multiline
              name="safety"
              value={safetyRating}
              label="Safety Rating"
              labelId="safety_label"
              sx={{ textAlign: 'left' }}
              onChange={handleSafetyRatingChange}
            >
              {rating?.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <Button
        ref={ref2}
        variant="text"
        onClick={handleCoursesOpen}
        sx={{ '&:hover': { backgroundColor: 'transparent' }, padding: 0 }}
      >
        <FormControl fullWidth>
          <InputLabel id="infrastructure_label">
            Select all the courses the school teaches
          </InputLabel>
          <Select
            sx={{ width: '100%', zIndex: -99, borderColor: '#BBBCBF' }}
            disabled
            value=""
            id="infrastructure"
            labelId="infrastructure_label"
            label="Choose all the courses available in your school"
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
