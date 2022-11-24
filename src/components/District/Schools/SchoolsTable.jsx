import { useState } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  Button
} from '@mui/material';

import Label from 'src/components/Label';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Link from 'next/link';

const getStatusLabel = (cryptoOrderStatus) => {
  const map = {
    failed: {
      text: 'Failed',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color } = map[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (data, filters) => {
  return data.filter((school) => {
    let matches = true;

    if (filters.status && school.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (data, page, limit) => {
  return data.slice(page * limit, page * limit + limit);
};

const SchoolsTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [filters, setFilters] = useState({
    status: null
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];

  const handleStatusChange = (e) => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(data, filters);
  const paginateddata = applyPagination(filteredCryptoOrders, page, limit);
  const theme = useTheme();

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ paddingX: 3, paddingY: 2 }}>Name</TableCell>
              <TableCell>School ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Rank</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginateddata.map((school) => {
              return (
                <TableRow hover key={school.id}>
                  <TableCell sx={{ paddingX: 3, paddingY: 2 }}>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {school.name}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ paddingX: 3, paddingY: 2 }}>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {school.id}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ paddingX: 3, paddingY: 2 }}>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {school.email}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ paddingX: 3, paddingY: 2 }}>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {school.phone}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ paddingX: 3, paddingY: 2 }}>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {school.rank}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ paddingX: 3, paddingY: 2 }}>
                    <Button>
                      <Link href={`/district/school/${school.id}`}>
                        <a style={{ textDecoration: 'none', color: '#5568FF' }}>
                          View
                        </a>
                      </Link>
                    </Button>
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
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

SchoolsTable.propTypes = {
  data: PropTypes.array.isRequired
};

SchoolsTable.defaultProps = {
  data: []
};

export default SchoolsTable;
