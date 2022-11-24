import Head from 'next/head';
import { Box, Card, Container, Grid, Typography } from '@mui/material';

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
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
          sx={{ mt: 1 }}
        >
          <Grid item lg={12}>
            <Card sx={{ padding: 2 }}>
              <Box
                sx={{
                  backgroundColor: '#F1F4F8',
                  padding: 1,
                  borderRadius: 1,
                  marginBottom: 2
                }}
              >
                <Typography variant="body" sx={{ fontSize: 22 }}>
                  Predictions on student performance
                </Typography>
              </Box>
              <Box
                sx={{
                  gap: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                lg={12}
              >
                <iframe
                  style={{
                    background: '#21313C',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)'
                  }}
                  width="100%"
                  height="300"
                  src="https://charts.mongodb.com/charts-sih-tdvlv/embed/charts?id=637f4e9f-9283-4cac-8cb4-96928b609175&maxDataAge=3600&theme=dark&autoRefresh=true"
                ></iframe>
                <iframe
                  style={{
                    background: '#21313C',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)'
                  }}
                  width="100%"
                  height="300"
                  src="https://charts.mongodb.com/charts-sih-tdvlv/embed/charts?id=637f63ff-86af-4870-8b43-c00c49f82155&maxDataAge=3600&theme=dark&autoRefresh=true"
                ></iframe>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={12}>
            <Card sx={{ padding: 2 }}>
              <Box
                sx={{
                  backgroundColor: '#F1F4F8',
                  padding: 1,
                  borderRadius: 1,
                  marginBottom: 2
                }}
              >
                <Typography variant="body" sx={{ fontSize: 22 }}>
                  Factors affecting student's performance
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                lg={12}
              >
                <iframe
                  style={{
                    background: '#21313C',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)'
                  }}
                  width="100%"
                  height="200"
                  src="https://charts.mongodb.com/charts-sih-tdvlv/embed/charts?id=637f549b-9283-46e6-8376-96928b666079&maxDataAge=3600&theme=dark&autoRefresh=true"
                ></iframe>
                <iframe
                  style={{
                    background: '#21313C',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)'
                  }}
                  width="100%"
                  height="200"
                  src="https://charts.mongodb.com/charts-sih-tdvlv/embed/charts?id=637f52ad-8b22-458f-82bc-b92f6b16886f&maxDataAge=3600&theme=dark&autoRefresh=true"
                ></iframe>
                <iframe
                  style={{
                    background: '#21313C',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)'
                  }}
                  width="100%"
                  height="200"
                  src="https://charts.mongodb.com/charts-sih-tdvlv/embed/charts?id=637f578a-4595-4c01-8f16-5b5e97259c82&maxDataAge=3600&theme=dark&autoRefresh=true"
                ></iframe>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Dashboard.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Dashboard;
