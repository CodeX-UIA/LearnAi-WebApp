import React, { useRef, useState } from 'react';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import {
  Box,
  Tooltip,
  IconButton,
  Popover,
  Typography,
  Divider,
  Button
} from '@mui/material';
import AddMarkModal from 'src/components/School/Forms/AddMark/AddMarkModal';

const Add = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
    handleClose();
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <Tooltip arrow title="Add">
        <IconButton color="primary" ref={ref} onClick={handleOpen}>
          <AddTwoToneIcon />
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button sx={{ borderRadius: 0 }} onClick={handleModalOpen}>
            <Typography
              variant="body"
              sx={{ p: 1, color: '#646F87', fontWeight: 400 }}
            >
              Add Mark
            </Typography>
          </Button>
        </Box>
      </Popover>
      <AddMarkModal
        open={modalOpen}
        setOpen={setModalOpen}
        handleModalOpen={handleModalOpen}
        handleModalClose={handleModalClose}
      />
    </Box>
  );
};

export default Add;
