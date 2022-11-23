import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
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
  TablePagination
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
  const [filters, setFilters] = useState({
    status: null
  });

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

  const getStatusLabel = (cryptoOrderStatus) => {
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

    const { text, color } = map[cryptoOrderStatus];

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
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
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
