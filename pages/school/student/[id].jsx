import Head from 'next/head';
import { Grid, Container } from '@mui/material';

import SidebarLayout from 'src/layouts/SidebarLayout';

import Footer from 'src/components/Footer';
import TabComponent from 'src/components/School/Student/tabs';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from 'src/components/School/Student/PageHeader';
import StudentSummary from 'src/components/School/Student/StudentSummary';

function Student() {
  return (
    <>
      <Head>
        <title>Student</title>
      </Head>
      <PageTitleWrapper className="MuiPageTitle-wrapper-page">
        <PageHeader />
      </PageTitleWrapper>
      <Container sx={{ mt: 3 }}>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <Grid item xs={12}>
            <StudentSummary />
            <TabComponent />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Student.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Student;
