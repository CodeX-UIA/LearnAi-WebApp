import NextLink from 'next/link';

import { Box, Slide, Popover } from '@mui/material';

function LearningDisabilityDetailsModal({ open, handleClose }) {
  const style = (theme) => ({
    width: 400,
    boxShadow: 24,
    border: 'none',
    height: '100vh',
    padding: '16px 0px 24px 32px',
    bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white'
  });

  return (
    <Popover
      onClose={handleClose}
      open={open}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Slide direction="left" in={open} mountOnEnter unmountOnExit>
        <Box sx={style}>
          <h2 id="unstyled-modal-title">Dyslexia</h2>
          <p id="unstyled-modal-description">
            Aliquid amet deserunt dncbd dhdhbh dhbdhbd dhbdhdbhd dhbdhbd kabgs
            bhjuew vefwdcbsd jvdweew ewje ejgueggeh ejhdbgvfhd edgewuguew
            wdhuguew iqquee eguyewygh ewguhgwwr earum!
          </p>
          <Box>
            <h3>Some factors that affect dyslexia</h3>
            <ul>
              <li>dnnjdnjn</li>
              <li>dnnjdnjn</li>
              <li>dnnjdnjn</li>
            </ul>
          </Box>
          <Box>
            <h3>How to work with dyslexia</h3>
            <ul>
              <li>dnnjdnjn</li>
              <li>dnnjdnjn</li>
              <li>dnnjdnjn</li>
            </ul>
          </Box>
          <Box>
            <h3>Resources</h3>
            <ul>
              <li>dnnjdnjn</li>
              <li>dnnjdnjn</li>
              <li>dnnjdnjn</li>
            </ul>
          </Box>
        </Box>
      </Slide>
    </Popover>
  );
}

export default LearningDisabilityDetailsModal;
