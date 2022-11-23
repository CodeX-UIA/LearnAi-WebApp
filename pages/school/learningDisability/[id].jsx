import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Grid, Container, Card, Link } from '@mui/material';

import Footer from 'src/components/Footer';
import SidebarLayout from 'src/layouts/SidebarLayout';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from 'src/components/School/LearningDisability/PageHeader';

function LearningDisability() {
  const style = (theme) => ({
    padding: 4,
    width: '100%',
    boxShadow: 24,
    border: 'none',
    height: '100vh',
    bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white'
  });

  return (
    <>
      <Head>
        <title>Dyslexia</title>
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
            <Card>
              <Box sx={style}>
                <h2 fontSize={18} id="unstyled-modal-title">
                  What is dyslexia ?
                </h2>
                <p id="unstyled-modal-description">
                  <Typography sx={{ mb: 1 }}>
                    Dyslexia is a learning disorder that involves difficulty
                    reading due to problems identifying speech sounds and
                    learning how they relate to letters and words (decoding).
                    Also called a reading disability, dyslexia is a result of
                    individual differences in areas of the brain that process
                    language.
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    Dyslexia is not due to problems with intelligence, hearing
                    or vision. Most children with dyslexia can succeed in school
                    with tutoring or a specialized education program. Emotional
                    support also plays an important role.
                  </Typography>
                  <Typography>
                    Though there's no cure for dyslexia, early assessment and
                    intervention result in the best outcome. Sometimes dyslexia
                    goes undiagnosed for years and isn't recognized until
                    adulthood, but it's never too late to seek help.
                  </Typography>
                </p>
                <Box>
                  <h3 fontSize={16}>Symptoms of dyslexia</h3>
                  <ul>
                    <li>Difficulty reading, including reading aloud</li>
                    <li>Problems spelling</li>
                    <li>Avoiding activities that involve reading</li>
                    <li>
                      Mispronouncing names or words, or problems retrieving
                      words
                    </li>
                    <li>
                      Spending an unusually long time completing tasks that
                      involve reading or writing
                    </li>
                    <li>Slow and labor-intensive reading and writing</li>
                    <li>Difficulty summarizing a story</li>
                    <li>Trouble learning a foreign language</li>
                    <li>Difficulty doing math word problems</li>
                  </ul>
                </Box>
                <Box>
                  <h3 fontSize={16}>How to work with dyslexia</h3>
                  <ul>
                    <li>
                      Create a supportive and collaborative classroom culture
                    </li>
                    <li>Use multi sensory input and activities</li>
                    <li>Present new language in small and manageable chunks</li>
                    <li>Spend some time explicitly teaching exam strategies</li>
                    <li>
                      Offer lots of opportunities for students to recap and
                      review language
                    </li>
                  </ul>
                </Box>
                <Box>
                  <h3>Resources</h3>
                  <ul style={{ listStyleType: 'none' }}>
                    <li
                      style={{
                        gap: 4,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}
                    >
                      <Typography>Cambridge</Typography>
                      <Link href="https://www.cambridgeenglish.org/blog/ten-ways-to-support-learners-with-dyslexia/">
                        <a
                          style={{
                            display: 'flex',
                            height: 'max-content',
                            alignItems: 'center'
                          }}
                        >
                          <OpenInNewIcon sx={{ fontSize: '20px' }} />
                        </a>
                      </Link>
                    </li>
                    <li
                      style={{
                        gap: 4,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}
                    >
                      <Typography>Mayo Clinic</Typography>
                      <Link href="https://www.mayoclinic.org/diseases-conditions/dyslexia/symptoms-causes/syc-20353552">
                        <a
                          style={{
                            display: 'flex',
                            height: 'max-content',
                            alignItems: 'center'
                          }}
                        >
                          <OpenInNewIcon sx={{ fontSize: '20px' }} />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

LearningDisability.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default LearningDisability;
