import React from "react";
import { Wrapper } from "../../Common/Wrapper/Wrapper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { FooterLink, FooterTypo } from "../../Common/CustomTypo";

function Footer() {
  return (
    <Wrapper>
      <Container
        maxWidth="lg"
        sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
      >
        <Grid
          container
          spacing={0}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid items md={2.4}>
            <FooterTypo variant="h5">Company Info</FooterTypo>
             <div style={{display:"flex",flexDirection:"column"}}>
             <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              
             </div>
              
          </Grid>
          <Grid items md={2.4}>
            <FooterTypo variant="h5">Legal</FooterTypo>
            <div style={{display:"flex",flexDirection:"column"}}>
             <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              
             </div>
              
          </Grid>{" "}
          <Grid items md={2.4}>
            <FooterTypo variant="h5">Features</FooterTypo>
            <div style={{display:"flex",flexDirection:"column"}}>
             <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              
             </div>
              
          </Grid>{" "}
          <Grid items md={2.4}>
            <FooterTypo variant="h5">Resources</FooterTypo>
            <div style={{display:"flex",flexDirection:"column"}}>
             <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              
             </div>
              
          </Grid>{" "}
          <Grid items md={2.4}>
            <FooterTypo variant="h5">Get In Touch</FooterTypo>
            <div style={{display:"flex",flexDirection:"column"}}>
             <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover" >
                  Contact us
              </FooterLink>
              
             </div>
              
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Footer;
