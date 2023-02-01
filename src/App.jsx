import { useState } from "react";
import { styled, Typography } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import AppBar from "./Common/Header/AppBar";
import NavBar from "./Common/Header/NavBar";
import TeamCard from "./Common/Team/TeamCard";
import CourseCard from "./Common/Courses/CourseCard";
import LivePreview from "./Common/Courses/LivePreview";
import FeatureCard from "./Common/Hero/FeatureCard";
import HeroSection from "./Common/Hero/HeroSection";
function App() {
  return (
    <>
     <HeroSection/>
      {/* 
      <AppBar />
      <div style={{ margin: 30 }}>
        <TeamCard />
      </div>
      <div style={{ margin: 30 }}>
        <CourseCard/>
      </div>
      <div style={{ margin: 30 }}>
        <LivePreview/>
      </div>
      <div style={{ margin: 30 }}>
        <FeatureCard/>
      </div> */}
      <Footer />
    </>
  );
}

const CustomeTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.Montserrat,
  fontWeight: "700",
}));
export default App;
