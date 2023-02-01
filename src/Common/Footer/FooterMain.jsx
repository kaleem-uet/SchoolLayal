import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { FooterLink, FooterTypo } from "../CustomTypo";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { styled } from "@mui/material";

function FooterMain() {
  return (
    <Wrapper color={"#26335D"}>
      <CustomContainer
        maxWidth="lg"  >
        <Grid
          container
          spacing={4}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid item md={2.4}  xs={12} sm={12}>
            <FooterTypo variant="h5" color="#FFF">Company Info</FooterTypo>
            <FooterColumn>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
            </FooterColumn>
          </Grid>
          <Grid item md={2.4}  xs={12} sm={12}>
            <FooterTypo variant="h5" color="#FFF">Legal</FooterTypo>
            <FooterColumn>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1"  underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1"  underLine="hover">
                Contact us
              </FooterLink>
            </FooterColumn>
          </Grid>{" "}
          <Grid item md={2.4}  xs={12} sm={12}>
            <FooterTypo variant="h5" color="#FFF">Features</FooterTypo>
            <FooterColumn>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
            </FooterColumn>
          </Grid>{" "}
          <Grid item md={2.4}  xs={12} sm={12}>
            <FooterTypo variant="h5" color="#FFF">Resources</FooterTypo>
            <FooterColumn>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
              <FooterLink variant="subtitle1" underLine="hover">
                Contact us
              </FooterLink>
            </FooterColumn>
          </Grid>{" "}
          <Grid item md={2.4}  xs={12} sm={12}>
            <FooterTypo variant="h5" color="#FFF">Get In Touch</FooterTypo>
            <FooterColumn>
              <IconAndTextContainer>
                <PhoneOutlinedIcon sx={{ color: "#FFF", marginRight: 1 }} />
                <FooterLink variant="subtitle1" underLine="hover">
                  (480) 555-0103
                </FooterLink>
              </IconAndTextContainer>
              <IconAndTextContainer>
                <LocationOnOutlinedIcon
                  sx={{ color: "#FFF", marginRight: 1 }}
                />
                <FooterLink variant="subtitle1" underLine="hover">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </FooterLink>
              </IconAndTextContainer>
              <IconAndTextContainer>
                <EmailOutlinedIcon sx={{ color: "#FFF", marginRight: 1 }} />
                <FooterLink variant="subtitle1" underLine="hover">
                  debra.holt@example.com
                </FooterLink>
              </IconAndTextContainer>
            </FooterColumn>
          </Grid>
        </Grid>
      </CustomContainer>
    </Wrapper>
  );
}

const IconAndTextContainer=styled('div')(({theme})=>({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
}))
const FooterColumn=styled('div')(({theme})=>({
  display: "flex", flexDirection: "column"
}))
const CustomContainer=styled(Container)(({theme})=>({
  alignItems: "center", justifyContent: "center", display: "flex"
}))
export default FooterMain;
