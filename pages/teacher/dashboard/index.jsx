import Head from 'next/head';
import { Container, Grid } from '@mui/material';

import SidebarLayout from 'src/layouts/SidebarLayout';

import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import Attention from 'src/components/Teacher/Dashboard/Attention';
import GeneralStats from 'src/components/Teacher/Dashboard/GeneralStats';
import ClassRankings from 'src/components/Teacher/Dashboard/ClassRankings';
import StudentPerformance from 'src/components/Teacher/Dashboard/StudentPerformance';

import PageHeader from 'src/components/Teacher/Dashboard/PageHeader';
import TeacherLayout from 'src/layouts/TeacherLayout';

function Dashboard() {
  return (
    <>
      <Head>
        <title>LearnAI</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <StudentPerformance />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Dashboard.getLayout = (page) => <TeacherLayout>{page}</TeacherLayout>;

export default Dashboard;
