import React from "react";
import { HeroWrapper } from "../Wrapper/Wrapper";
import hero from "../../assets/hero.png";
import { Container, styled } from "@mui/material";
import NavBar from "../Header/NavBar";
import FeatureCard from "./FeatureCard";
function HeroSection() {
  return (
    <HeroWrapper>
      <img src={hero} style={{ width: "100%", height: "auto" }} />

      <div
        style={{
          position: "absolute",
          top: "0px",
          width:'100%',
          zIndex:1
        }}
      >

        <NavBar />

      </div>
      <Container maxWidth='lg'  style={{
        position:'absolute',
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-between',
        top:550,

      }}>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>

      </Container>
      {/* <Container maxWidth="md" sx={{position:'absolute'}}>
         </Container> */}
      {/* <CustomContainer  maxWidth="xl">
        </CustomContainer>
         <Container maxWidth="lg" sx={{position:'absolute',top:'572px',zIndex:1}}>
         </Container> */}
    </HeroWrapper>
  );
}

const CustomContainer = styled(Container)(({ theme }) => ({
  top: 0,
  position: "absolute",
  marginTop: 2,

}));
export default HeroSection;
