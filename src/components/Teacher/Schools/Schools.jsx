import { Card } from '@mui/material';

import SchoolsTable from './SchoolsTable';

function SchoolsComponent() {
  const data = [
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    },
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    },
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    },
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    },
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    },
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    },
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    },
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    },
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    },
    {
      id: 'FFG99HGG',
      status: 'approved',
      name: 'Gambia Methodist Academy',
      email: 'gmb@gambia.com',
      phone: '494747487484',
      rank: '3'
    }
  ];

  return (
    <Card>
      <SchoolsTable data={data} />
    </Card>
  );
}

export default SchoolsComponent;
