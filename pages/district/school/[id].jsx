import Head from 'next/head';
import { Grid, Container } from '@mui/material';

import SidebarLayout from 'src/layouts/SidebarLayout';

import Footer from 'src/components/Footer';
import TabComponent from 'src/components/District/School/tabs';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from 'src/components/District/School/PageHeader';
import SchoolSummary from 'src/components/District/School/SchoolSummary';
import DistrictSidebarLayout from 'src/layouts/DistrictSidebarLayout';

function School() {
  return (
    <>
      <Head>
        <title>School</title>
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
            <SchoolSummary />
            <TabComponent />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

School.getLayout = (page) => (
  <DistrictSidebarLayout>{page}</DistrictSidebarLayout>
);

export default School;
