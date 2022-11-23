import { Card } from '@mui/material';

import TeachersTable from './TeachersTable';

function TeachersComponent() {
  const teacherDetails = [
    {
      id: 'malick-jallow',
      status: 'completed',
      teacherID: 'VUVX709ET7BY',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    },
    {
      id: 'malick-jallow',
      status: 'completed',
      teacherID: '23M3UOG65G8K',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    },
    {
      id: 'malick-jallow',
      status: 'failed',
      teacherID: 'F6JHK65MS818',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    },
    {
      id: 'malick-jallow',
      status: 'completed',
      teacherID: 'QJFAI7N84LGM',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    },
    {
      id: 'malick-jallow',
      status: 'completed',
      teacherID: 'BO5KFSYGC0YW',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    },
    {
      id: 'malick-jallow',
      status: 'completed',
      teacherID: '6RS606CBMKVQ',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    },
    {
      id: 'malick-jallow',
      status: 'pending',
      teacherID: '479KUYHOBMJS',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    },
    {
      id: 'malick-jallow',
      status: 'completed',
      teacherID: 'W67CFZNT71KR',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    },
    {
      id: 'malick-jallow',
      status: 'completed',
      teacherID: '63GJ5DJFKS4H',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    },
    {
      id: 'malick-jallow',
      status: 'failed',
      teacherID: '17KRZHY8T05M',
      firstName: 'Harsh',
      department: 'English',
      phone: '494747487484',
      officeNumber: 'PB204',
      lastName: 'Harsh'
    }
  ];

  return (
    <Card>
      <TeachersTable teacherDetails={teacherDetails} />
    </Card>
  );
}

export default TeachersComponent;
