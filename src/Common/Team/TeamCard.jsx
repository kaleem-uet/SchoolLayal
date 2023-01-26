import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import user from "../../assets/user.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

function TeamCard() {
  return (
    <CardWrapper>
      <img
        src={user}
        style={{
          width: "100%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 231,
          objectFit: "cover",
        }}
      />
      <div style={{marginTop:10,alignItems:"center",justifyContant:"center", display:"flex", flexDirection:"column"}}>
      <Typography variant="h4">Julian Jameson</Typography>
      <Typography variant="h6">Profession</Typography>
      </div>


      <div style={{ marginTop: 20 }}>
        <Stack direction={"row"} spacing={2}>
          <FacebookOutlinedIcon color="primary" />
          <InstagramIcon  color="primary"/>
          <TwitterIcon  color="primary"/>
        </Stack>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled("div")(({ theme }) => ({
  width: "238px",
  height: "340px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 13px 19px rgba(0, 0, 0, 0.07)",
  borderRadius: 20,
}));
export default TeamCard;
