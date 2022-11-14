import Head from 'next/head';
import { Container, Grid } from '@mui/material';

import SidebarLayout from 'src/layouts/SidebarLayout';

import GeneralStats from 'src/components/School/Dashboard/GeneralStats';
import StudentPerformance from 'src/components/School/Dashboard/StudentPerformance';

import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from 'src/content/Dashboards/Crypto/PageHeader';

import Wallets from 'src/content/Dashboards/Crypto/Wallets';
import WatchList from 'src/content/Dashboards/Crypto/WatchList';
import AccountBalance from 'src/content/Dashboards/Crypto/AccountBalance';
import AccountSecurity from 'src/content/Dashboards/Crypto/AccountSecurity';

function DashboardCrypto() {
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
          <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
