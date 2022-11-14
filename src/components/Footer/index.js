import { Box, Container, Link, Typography, styled } from '@mui/material';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        alignItems="center"
        justifyContent="space-between"
        display={{ xs: 'block', md: 'flex' }}
        textAlign={{ xs: 'center', md: 'left' }}
      >
        <Box>
          <Typography variant="subtitle1">&copy; 2022 - LearnAI</Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 }
          }}
          variant="subtitle1"
        >
          Crafted by{' '}
          <Link href="/" target="_blank" rel="noopener noreferrer">
            codeX
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
