import Head from 'next/head';
import { Container, Grid } from '@mui/material';

import SidebarLayout from 'src/layouts/SidebarLayout';

import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import Attention from 'src/components/School/Dashboard/Attention';
import GeneralStats from 'src/components/School/Dashboard/GeneralStats';
import ClassRankings from 'src/components/School/Dashboard/ClassRankings';
import StudentPerformance from 'src/components/School/Dashboard/StudentPerformance';

import PageHeader from 'src/content/Dashboard/PageHeader';

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
          <Grid item lg={12}>
            <GeneralStats />
          </Grid>
          <Grid item xs={12}>
            <StudentPerformance />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Attention />
          </Grid>
          <Grid item lg={4} xs={12}>
            <ClassRankings />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Dashboard.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Dashboard;
