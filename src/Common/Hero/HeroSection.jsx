import { useEffect } from "react";
import { HeroWrapper } from "../Wrapper/Wrapper";
import hero from "../../assets/hero.png";
import {
  Container,
  styled,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import NavBar from "../Header/NavBar";
import FeatureCard from "./FeatureCard";
import sectionimg from "../../assets/section1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import single from "../../assets/single.png";
import PopoulerCourse from "../Courses/PopoulerCourse";

const scrollCounter = document.querySelector('.js-scroll-counter');

window.addEventListener('scroll', function() {
  scrollCounter.innerHTML = window.pageYOffset;
});
AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});


function HeroSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
    class="js-scroll-counter scroll-counter"
      style={{
        height: "100%",
      }}
    >
      <div
      class="aos-all"
        style={{
          backgroundImage: `url(${hero})`,
          height: "100vh",
          width: "auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <NavBar />
        <CustomeContainer >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Caption variant="h6" data-aos="flip-right">
              Online training
            </Caption>
            <HeadingTypo variant="h2" data-aos="fade-down">
              Best Learning Opportunities
            </HeadingTypo>
            <SubTypo variant="h6" data-aos="flip-left">
              Our goal is to make online education work for everyone
            </SubTypo>
            <BtnContainer data-aos="fade-right">
              <Button variant="contained" color="primary">
                Join Us
              </Button>
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            </BtnContainer>
          </div>

          <HeroImage data-aos="fade-left">
            <img
              src={sectionimg}
              style={{
                width: 400,
                height: 400,
              }}
            />
          </HeroImage>
          <CustomeImg src={single} />
        </CustomeContainer>
        <Container sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            <Grid
              item
              md={4}
              xs={12}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="5000"
            >
              <FeatureCard />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              <FeatureCard />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="5000"
            >
              <FeatureCard />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

const HeadingTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.Montserrat,
  fontWeight: "700",
  color: "#FFFF",
}));

const SubTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.Montserrat,
  color: "#FFFF",
  lineHeight: 5,
  /* or 150% */

  letterSpacing: 0.2,
}));
const Caption = styled(Typography)(({ theme }) => ({
  /* h5 */

  fontWeight: "700",
  fontSize: 16,
  lineHeight: 5,
  /* identical to box height, or 150% */

  letterSpacing: 0.1,

  /* primary-color */

  color: "#FF6551",
}));
const CustomeContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 20,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const CustomeImg = styled("img")(({ theme }) => ({
  width: "auto",
  height: 50,
  position: "absolute",
  right: -30,
  top: 50,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const HeroImage = styled("div")(({ theme }) => ({
  width: 428,
  height: 428,
  background: "#00087E",
  borderRadius: "0px 111.639px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const BtnContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 30,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
export default HeroSection;
