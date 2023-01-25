import { Typography } from "@mui/material";
import React from "react";
const Nav = ["Home", "Product", "Pricing", "Contact"];
function NavList() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center",justifyContent:"space-around",width:"50%" }}
    >
     <Typography variant="h5">Home</Typography>
     <Typography variant="h5">Product</Typography>
     <Typography variant="h5">Pricing</Typography>
     <Typography variant="h5">Contact</Typography>

    </div>
  );
}

export default NavList;
