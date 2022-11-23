import Head from 'next/head';
import { Grid, Container } from '@mui/material';

import Footer from 'src/components/Footer';
import SidebarLayout from 'src/layouts/SidebarLayout';
import TeachersComponent from 'src/components/School/Teachers/Teachers';

function Teachers() {
  return (
    <>
      <Head>
        <title>Teachers</title>
      </Head>
      <Container sx={{ mt: 3 }}>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <Grid item xs={12}>
            <TeachersComponent />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Teachers.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Teachers;
