import Head from 'next/head';
import { Grid, Container } from '@mui/material';

import Footer from 'src/components/Footer';
import SidebarLayout from 'src/layouts/SidebarLayout';
import StudentsComponent from 'src/components/School/Students/Students';

function Students() {
  return (
    <>
      <Head>
        <title>Students</title>
      </Head>
      <Container sx={{ mt: 3 }}>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <Grid item xs={12}>
            <StudentsComponent />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Students.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Students;
