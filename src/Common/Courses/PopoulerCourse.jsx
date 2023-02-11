import { Container, Typography, Button, styled, Link } from "@mui/material";
import React from "react";
import thumb from "../../assets/thumb-concept-5.png";

function PopoulerCourse() {
  return (
    <Container sx={{ mt: 20 }}>
      <MainContainer>
        <div data-aos="fade-right">
          <div
            style={{
              width: 94,
              height: 7,
              background: " #E74040",
              borderRadius: 5,
              marginBottom: 20,
            }}
          />
          <HeadingTypo variant="h2">Our Popular Courses</HeadingTypo>
          <SubTypo variant="caption">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </SubTypo>
          <Link
            component="button"
            variant="body2"
            underline="hover"
            sx={{ marginTop: 5 }}
          >
            Learn more
          </Link>
        </div>
        <div data-aos="fade-left">
          <img src={thumb} />
        </div>
      </MainContainer>
    </Container>
  );
}

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down('md')]:{
    flexDirection:'column',
    marginTop:500
  }
}));
const HeadingTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.Montserrat,
  fontWeight: "700",
  marginBottom: 10,
}));

const SubTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.Montserrat,
  letterSpacing: 0.2,
  marginTop: 10,
}));
export default PopoulerCourse;
