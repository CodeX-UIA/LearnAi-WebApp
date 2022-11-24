import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import SetProfileForm from './AddMarkForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

export default function AddMarkModal({ open, handleModalClose }) {
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600, maxHeight: 700, overflow: 'scroll' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <h2 id="child-modal-title">Add Grade</h2>
            <Button onClick={handleModalClose}>
              <CloseTwoToneIcon />
            </Button>
          </Box>
          <SetProfileForm />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
