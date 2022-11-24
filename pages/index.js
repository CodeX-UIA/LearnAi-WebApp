import Head from 'next/head';
import { Box, Card, Button, styled, Container } from '@mui/material';

import Link from 'src/components/Link';
import Logo from 'src/components/LogoDark';
import Hero from 'src/content/Overview/Hero';
import BaseLayout from 'src/layouts/BaseLayout';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Head>
        <title>LearnAI</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box />
              <Box>
                <Button
                  sx={{ ml: 2 }}
                  component={Link}
                  variant="contained"
                  href="/auth/register"
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero />
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
