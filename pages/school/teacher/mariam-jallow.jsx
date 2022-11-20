import { Grid, Container } from '@mui/material';

import Head from 'next/head';
import Footer from 'src/components/Footer';
import SidebarLayout from 'src/layouts/SidebarLayout';

import RecentActivity from 'src/content/Management/Users/details/RecentActivity';
import Feed from 'src/content/Management/Users/details/Feed';
import PopularTags from 'src/content/Management/Users/details/PopularTags';
import MyCards from 'src/content/Management/Users/details/MyCards';
import Addresses from 'src/content/Management/Users/details/Addresses';

import ProfileCover from 'src/components/School/Teacher/ProfileCover';

function ManagementUserProfile() {
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
    reviews: 56
  };

  return (
    <>
      <Head>
        <title>Teacher - Profile</title>
      </Head>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ManagementUserProfile.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ManagementUserProfile;
