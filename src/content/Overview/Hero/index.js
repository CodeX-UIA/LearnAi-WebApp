import {
  Box,
  Grid,
  Button,
  styled,
  Container,
  Typography
} from '@mui/material';

import Link from 'src/components/Link';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
  font-weight: bold;
  border-radius: 30px;
  display: inline-block;
  text-transform: uppercase;
  margin-bottom: ${theme.spacing(2)};
  font-size: ${theme.typography.pxToRem(11)};
  color: ${theme.palette.success.contrastText};
  background-color: ${theme.colors.success.main};
  padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 1.0.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Student Analytic
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Student Analaytics to make use off student data to improve student
          </TypographyH2>
          <Button
            component={Link}
            href="/school/dashboard"
            size="large"
            variant="contained"
          >
            Enter Dashboard
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
