import { Container, styled, Typography } from "@mui/material";
import React from "react";

function Visitor() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <CustomeTab data-aos="zoom-in">
        <CustomeTypo variant="h1" color="primary">
          15K
        </CustomeTypo>
        <CustomeTypo variant="h5">Happy Customers</CustomeTypo>
      </CustomeTab>
      <CustomeTab data-aos="zoom-in-up">
        <CustomeTypo variant="h1" color="primary">
          156K
        </CustomeTypo>
        <CustomeTypo variant="h5">Happy Customers</CustomeTypo>
      </CustomeTab>
      <CustomeTab data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <CustomeTypo variant="h1" color="primary">
          157K
        </CustomeTypo>
        <CustomeTypo variant="h5">Happy Customers</CustomeTypo>
      </CustomeTab>
      <CustomeTab data-aos="fade-up" data-aos-anchor-placement="top-center">
        <CustomeTypo variant="h1" color="primary">
          156K
        </CustomeTypo>
        <CustomeTypo variant="h5">Happy Customers</CustomeTypo>
      </CustomeTab>
    </Container>
  );
}

const CustomeTypo = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontFamily: theme.typography.customFonts.Montserrat,
}));
const CustomeTab = styled("div")((theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export default Visitor;
