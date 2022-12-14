import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { format, subDays } from 'date-fns';
import {
  Box,
  Table,
  Tooltip,
  useTheme,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Button,
  Popover
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';

import Label from 'src/components/Label';

const applyFilters = (studentDetails, filters) => {
  return studentDetails.filter((studentDetail) => {
    let matches = true;

    if (filters.status && studentDetail.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (studentDetails, page, limit) => {
  return studentDetails.slice(page * limit, page * limit + limit);
};

const studentDetails = [
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'female',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  },
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'male',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  },
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'male',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  },
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'male',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  },
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'male',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  },
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'female',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  },
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'male',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  },
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'female',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  },
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'male',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  },
  {
    id: 'ameena001',
    status: 'continuing',
    studentID: 'ameena001',
    firstName: 'Ameena',
    class: '2A',
    gender: 'female',
    level: 'High School',
    dateStarted: subDays(new Date(), 55).getTime(),
    disability: 'none',
    lastName: 'Harsh'
  }
];

const StudentsTable = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [status, setStatus] = useState();
  const [filters, setFilters] = useState({
    status: null
  });

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredStudents = applyFilters(studentDetails, filters);
  const paginatedTeacherDetails = applyPagination(
    filteredStudents,
    page,
    limit
  );

  const getStatusLabel = (studentStatus) => {
    const map = {
      dropOut: {
        text: 'Drop Out',
        color: 'error'
      },
      continuing: {
        text: 'Continuing',
        color: 'primary'
      },
      graduate: {
        text: 'Graduate',
        color: 'warning'
      }
    };

    const { text, color } = map[studentStatus];

    return <Label color={color}>{text}</Label>;
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Disability</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>Date Started</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTeacherDetails.map((studentDetail) => {
              return (
                <TableRow hover key={studentDetail.id}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {studentDetail.firstName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {studentDetail.lastName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {studentDetail.studentID}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {studentDetail.gender}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {studentDetail.disability}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {studentDetail.class}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {studentDetail.level}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {format(studentDetail.dateStarted, 'MMM yyyy')}
                    </Typography>
                  </TableCell>

                  <TableCell align="right">
                    {getStatusLabel(studentDetail?.status)}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Change status" arrow>
                      <IconButton
                        ref={ref}
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        onClick={handleOpen}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="View student" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <Link
                          href={`/school/student/${studentDetail?.studentID}`}
                        >
                          <VisibilityTwoToneIcon fontSize="small" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
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
          <Button sx={{ borderRadius: 0, width: '100%' }}>
            <Typography
              variant="body"
              sx={{ px: 1, color: '#646F87', fontWeight: 400 }}
            >
              Dropped Out
            </Typography>
          </Button>
          <Button sx={{ borderRadius: 0, width: '100%' }}>
            <Typography
              variant="body"
              sx={{ px: 1, color: '#646F87', fontWeight: 400 }}
            >
              Graduated
            </Typography>
          </Button>
          <Button sx={{ borderRadius: 0, width: '100%' }}>
            <Typography
              variant="body"
              sx={{ px: 1, color: '#646F87', fontWeight: 400 }}
            >
              Transferred
            </Typography>
          </Button>
        </Box>
      </Popover>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredStudents.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </>
  );
};

StudentsTable.propTypes = {
  studentDetails: PropTypes.array.isRequired
};

StudentsTable.defaultProps = {
  studentDetails: []
};

export default StudentsTable;
