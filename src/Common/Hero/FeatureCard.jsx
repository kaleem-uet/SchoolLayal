import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
function FeatureCard() {
  return (
    <Box
      direction="column"
      sx={{
        width: 'auto',
        height: 180,
        backgroundColor:'#FFF',
        padding: "35px 40px 35px 40px",
        boxShadow: "0px 13px 19px rgba(0, 0, 0, 0.07)",

      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          backgroundColor: "#FF6551",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SchoolIcon fontSize="large" sx={{ color: "#FFF" }} />
      </div>
      <Typography variant="h3">training Courses</Typography>
       {/* <div
       style={{
        width:50,
        height:2,
        backgroundColor:"#E74040"
       }}
       > </div> */}
       <Divider sx={{marginTop:2,marginBottom:2}}/>
      <Typography variant="h6">
        The gradual accumulation of information about atomic and small-scale
        behaviour...
      </Typography>
    </Box>
  );
}

export default FeatureCard;
