import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import course from "../../assets/course.png";
import Rating from "@mui/material/Rating";
function CourseCard() {
  return (
    <Box
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={course}
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <Typography variant="h6" sx={{ textAlign: "center", letterSpacing: "0.2px",color:"#737373"}}>
        Slate helps you see how many more days you need to work to reach your
        financial goal for the month and year.
      </Typography>
   <Stack direction="column" sx={{alignItems:"center",marginTop:2}}>
      <Rating name="read-only" value={5} readOnly />

       <Typography variant="h4" style={{color:"#252B42",marginTop:5}}>Regina Miles</Typography>
       <Typography variant="h6" style={{color:"#252B42",marginTop:5}}>Designer</Typography>
   </Stack>


    </Box>
  );
}

export default CourseCard;
