import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { Box, Button, Typography } from '@mui/material';

import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const AddMarkForm = ({}) => {
  const { handleSubmit, control } = useForm();

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
              Name
            </Typography>
            <Controller
              id="name"
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Name"
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
              Subject
            </Typography>
            <Controller
              id="subject"
              name="subject"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Subject"
                  {...field}
                />
              )}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: '16px', marginBottom: 1 }}>
              Mark
            </Typography>
            <Controller
              id="grade"
              name="grade"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  placeholder="Grade"
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
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

export default AddMarkForm;
