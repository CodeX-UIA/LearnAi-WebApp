import {
  Box,
  Grid,
  Tooltip,
  Container,
  IconButton,
  Typography
} from '@mui/material';

import Head from 'next/head';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

import SidebarLayout from 'src/layouts/SidebarLayout';
import PopularTags from 'src/content/Management/Users/details/PopularTags';

import Footer from 'src/components/Footer';
import Classes from 'src/components/School/Teacher/Classes';
import ProfileCover from 'src/components/School/Teacher/ProfileCover';
import AttentionCard from 'src/components/School/Teacher/AttentionCard';
import RecentActivity from 'src/components/School/Teacher/RecentActivity';

function Teacher() {
  const user = {
    savedCards: 7,
    name: 'Malick Jallow',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      "A positive and driven English teacher with 15 years' experience working with students in grades 6-12. Passionate about engaging students on all levels, enhancing their social experiences by encouraging group lessons and learning.",
    jobtitle: 'Teacher',
    location: 'Manjai Kunda, Gambia',
    experience: '15 years',
    reviews: 56,
    engagement: 2.3,
    impression: {
      thisMonth: 3.4,
      lastMonth: 3.9
    }
  };

  return (
    <>
      <Head>
        <title>Teacher - Profile</title>
      </Head>
      <Container sx={{ mt: 0 }}>
        <Grid item xs={12} mb={2} mt={2}>
          <Box display="flex" alignItems="center" mb={3}>
            <Tooltip arrow placement="top" title="Go back">
              <IconButton color="primary" sx={{ p: 2, mr: 2 }}>
                <ArrowBackTwoToneIcon />
              </IconButton>
            </Tooltip>
            <Box>
              <Typography variant="h3" component="h3" gutterBottom>
                Profile
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          {user?.impression?.thisMonth <= user?.impression?.lastMonth && (
            <Grid item xs={12} mb={4}>
              <AttentionCard user={user} />
            </Grid>
          )}
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12}>
              <RecentActivity user={user} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Classes user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Teacher.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Teacher;
