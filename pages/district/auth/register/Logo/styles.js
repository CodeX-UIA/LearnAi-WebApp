import { styled } from '@mui/material';

import Link from 'src/components/Link';

export const LogoWrapper = styled(Link)(
  ({ theme }) => `
    display: flex;
    width: max-content;
    margin: 0 auto;
    text-decoration: none;
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};
`
);
