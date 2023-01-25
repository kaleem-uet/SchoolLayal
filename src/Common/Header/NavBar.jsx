import { Box, IconButton, Typography ,Stack} from "@mui/material";
import React from "react";
import { BtnWrapper } from "../Wrapper/Wrapper";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import NavList from "./NavList";
function NavBar() {
  return (
    <Box
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row"
          sx={{ display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width:"50%",
            }}>
        <Typography variant="h3" >Brandname</Typography>

        <div
          style={{
            marginLeft:100,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width:"60%",
            justifyContent:"space-between"
          }}
        >
          <Typography variant="h5">Home</Typography>
          <Typography variant="h5">Product</Typography>
          <Typography variant="h5">Pricing</Typography>
          <Typography variant="h5">Contact</Typography>
        </div>
      </Stack>

      <Stack direction='row' sx={{
        display:"flex",
        alignItems:"center",

      }}>
      <div style={{marginRight:'5%',cursor:"pointer"}}>
      <Typography variant="h5">
        Login
      </Typography>
      </div>



        <IconButton
          style={{
            width: "130px",
            height: "auto",
            // padding:15,
            fontSize: 14,
            padding: "15px 15px",
            border: "1px solid #E6E6E6",
            borderRadius: 5,
            fontWeight: "700",
            // borderRadius: "0px 5px 5px 0px",
            backgroundColor: "#FF6551",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#FFF",
          }}
        >
          JOIN US
          <TrendingFlatIcon sx={{ marginLeft: 2 }} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default NavBar;
