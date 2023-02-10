import { useEffect } from "react";
import { HeroWrapper } from "../Wrapper/Wrapper";
import hero from "../../assets/hero.png";
import { Container, styled } from "@mui/material";
import NavBar from "../Header/NavBar";
import FeatureCard from "./FeatureCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
function HeroSection() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
   <div style={{
    height:'100%',
   }}>
    <div
    style={{
  backgroundImage: `url(${hero})`,
  height: "100vh",
  width:'auto',
  backgroundPosition: "center",
  backgroundRepeat:"no-repeat",
  backgroundSize: "cover",
  position: "relative",
    }}
    >
    <Container maxWidth="md" data-aos="fade-up">
       <NavBar/>
    </Container>
    </div>
   </div>
  );
}

export default HeroSection;
