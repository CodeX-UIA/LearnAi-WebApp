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
        id="goal"
        name="goal"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ width: '100%' }}
            label="What is your average grade you aim to attain for this school year?"
            placeholder="Enter .."
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            {...field}
          />
        )}
      />
    </Box>
  );
};

export default InputGroup2;
