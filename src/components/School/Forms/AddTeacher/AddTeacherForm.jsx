import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  FormControl,
  Button
} from '@mui/material';

import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import Switch from '@mui/material/Switch';

const SetProfileForm = ({}) => {
  const router = useRouter();

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [medu, setMedu] = React.useState();
  const [Fedu, setFedu] = React.useState();
  const [race, setRace] = React.useState('');
  const [gender, setGender] = React.useState();
  const [pStatus, setPStatus] = React.useState();

  const { handleSubmit, control, setValue } = useForm();

  const handleMeduChange = (event) => {
    setMedu(event.target.value);
    setValue(event.target.name, event.target.value);
  };

  const handleFeduChange = (event) => {
    setFedu(event.target.value);
    setValue(event.target.name, event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setValue(event.target.name, event.target.value);
  };

  const handlePStatusChange = (event) => {
    setPStatus(event.target.value);
    setValue(event.target.name, event.target.value);
  };

  const handleRaceChange = (event) => {
    setRace(event.target.value);
    setValue(event.target.name, event.target.value);
  };

  const onSubmit = async (data) => {
    console.log(data);
    let da = await axios.post(
      'http://localhost:3000/api/controller/registerstudent',
      { data }
    );
    console.log(da);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Box
        sx={{
          mt: 4,
          gap: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            gap: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              First Name
            </Typography>
            <Controller
              id="fname"
              name="fname"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="First Name"
                  {...field}
                />
              )}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Last Name
            </Typography>
            <Controller
              id="lname"
              name="lname"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Last Name"
                  {...field}
                />
              )}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Teacher ID
            </Typography>
            <Controller
              id="teacherID"
              name="teacherID"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Teacher ID"
                  {...field}
                />
              )}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Qualification
            </Typography>
            <Controller
              id="qualification"
              name="qualification"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth {...field}>
                  <InputLabel id="type_label">Select..</InputLabel>
                  <Select
                    multiline
                    name="qualification"
                    value={gender}
                    label="qualification"
                    labelId="gender_label"
                    sx={{ textAlign: 'left' }}
                    onChange={handleGenderChange}
                  >
                    <MenuItem value="masters">Masters Degree</MenuItem>
                    <MenuItem value="pHD">Post Doctoral Degree</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>
        </Box>

        <Box
          sx={{
            gap: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Address
            </Typography>
            <Controller
              id="address"
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Address"
                  {...field}
                />
              )}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Phone Number
            </Typography>
            <Controller
              id="phone"
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Phone Number"
                  {...field}
                />
              )}
            />
          </Box>
        </Box>
        <Box
          sx={{
            mt: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <Button variant="contained" sx={{ width: '100%' }} type="submit">
            Save
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default SetProfileForm;
