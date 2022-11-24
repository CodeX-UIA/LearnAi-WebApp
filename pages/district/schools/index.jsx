import Head from 'next/head';
import { Grid, Container } from '@mui/material';

import Footer from 'src/components/Footer';
import SchoolComponent from 'src/components/District/Schools/Schools';
import DistrictSidebarLayout from 'src/layouts/DistrictSidebarLayout';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from 'src/components/District/Schools/PageHeader';

function Schools() {
  return (
    <>
      <Head>
        <title>Schools</title>
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
            <SchoolComponent />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Schools.getLayout = (page) => (
  <DistrictSidebarLayout>{page}</DistrictSidebarLayout>
);

export default Schools;
