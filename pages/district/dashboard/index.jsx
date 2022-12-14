import Head from 'next/head';
import { Container, Grid } from '@mui/material';

import SidebarLayout from 'src/layouts/SidebarLayout';

import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import Attention from 'src/components/District/Dashboard/Attention';
import GeneralStats from 'src/components/District/Dashboard/GeneralStats';
import ClassRankings from 'src/components/District/Dashboard/ClassRankings';
import StudentPerformance from 'src/components/District/Dashboard/StudentPerformance';

import DistrictSidebarLayout from 'src/layouts/DistrictSidebarLayout';
import PageHeader from 'src/components/District/Dashboard/PageHeader';
import SingleLayout from 'src/layouts/SingleLayout';

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
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Dashboard.getLayout = (page) => <SingleLayout>{page}</SingleLayout>;

export default Dashboard;
