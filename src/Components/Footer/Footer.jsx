import { Box } from "@mui/material";
import React from "react";
import FooterBottom from "../../Common/Footer/FooterBottom";
import FooterMain from "../../Common/Footer/FooterMain";
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function Footer() {
  return (
    // <Box
    // component="footer">
    //   <FooterMain />
    //   <FooterBottom />
    // </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          mt: 'auto',
        }}
      >
<FooterMain />
      <FooterBottom />
      </Box>
    </Box>
  );
}

export default Footer;
