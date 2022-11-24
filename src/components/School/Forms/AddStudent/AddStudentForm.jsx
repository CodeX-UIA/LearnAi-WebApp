import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

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

  const onSubmit = (data) => {
    console.log('data: ', data);
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
              id="firstName"
              name="firstName"
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
              id="lastName"
              name="lastName"
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
              Date Of Birth
            </Typography>
            <Controller
              id="dob"
              name="dob"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Date Of Birth"
                  {...field}
                />
              )}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Gender
            </Typography>
            <Controller
              id="gender"
              name="gender"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth {...field}>
                  <InputLabel id="type_label">Select..</InputLabel>
                  <Select
                    multiline
                    name="gender"
                    value={gender}
                    label="Gender"
                    labelId="gender_label"
                    sx={{ textAlign: 'left' }}
                    onChange={handleGenderChange}
                  >
                    <MenuItem key="male" value="male">
                      Male
                    </MenuItem>
                    <MenuItem key="female" value="female">
                      Female
                    </MenuItem>
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
              Family Size
            </Typography>
            <Controller
              id="familysize"
              name="familysize"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  placeholder="Family Size"
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
              Race
            </Typography>
            <Controller
              id="race"
              name="race"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth {...field}>
                  <InputLabel id="type_label">Select..</InputLabel>
                  <Select
                    name="race"
                    value={race}
                    label="Race"
                    labelId="race_label"
                    sx={{ textAlign: 'left' }}
                    onChange={handleRaceChange}
                  >
                    <MenuItem key="male" value="T">
                      Black
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      White
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      Asian
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      Other
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Parent Marital Status
            </Typography>
            <Controller
              id="Pstatus"
              name="Pstatus"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth {...field}>
                  <InputLabel id="type_label">Select..</InputLabel>
                  <Select
                    name="Pstatus"
                    value={pStatus}
                    label="Parent's Marital Status"
                    labelId="pStatus_label"
                    sx={{ textAlign: 'left' }}
                    onChange={handlePStatusChange}
                  >
                    <MenuItem key="male" value="T">
                      Married
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      Separated
                    </MenuItem>
                  </Select>
                </FormControl>
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
              Mother's profession
            </Typography>
            <Controller
              id="Mjob"
              name="Mjob"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Mother's profession"
                  {...field}
                />
              )}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Father's Profession
            </Typography>
            <Controller
              id="Fjob"
              name="Fjob"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Father's Profession"
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
              Mother Education Level
            </Typography>
            <Controller
              id="Medu"
              name="Medu"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth {...field}>
                  <InputLabel id="medu_label">Select..</InputLabel>
                  <Select
                    name="Medu"
                    value={medu}
                    label="Mother Education Level"
                    labelId="Medu_label"
                    sx={{ textAlign: 'left' }}
                    onChange={handleMeduChange}
                  >
                    <MenuItem key="male" value="T">
                      Below High School
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      High School Diploma
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      Undergraduate
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      Graduate
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Father Education Level
            </Typography>
            <Controller
              id="Fedu"
              name="Fedu"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth {...field}>
                  <InputLabel id="Fedu_label">Select..</InputLabel>
                  <Select
                    name="Fedu"
                    value={Fedu}
                    label="Father Education Level"
                    labelId="Fedu_label"
                    sx={{ textAlign: 'left' }}
                    onChange={handleFeduChange}
                  >
                    <MenuItem key="male" value="T">
                      Below High School
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      High School Diploma
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      Undergraduate
                    </MenuItem>
                    <MenuItem key="female" value="A">
                      Graduate
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
            Is the student disabled?
          </Typography>
          <Controller
            id="disabled"
            name="disabled"
            control={control}
            render={({ field }) => <Switch {...label} {...field} />}
          />
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
