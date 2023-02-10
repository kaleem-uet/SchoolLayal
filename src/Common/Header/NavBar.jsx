import {
  AppBar,
  Button,
  TextField,
  IconButton,
  Typography,
  styled,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "./Dropdown";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PagesIcon from "@mui/icons-material/Pages";
import BookIcon from "@mui/icons-material/Book";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CallIcon from "@mui/icons-material/Call";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const menuItems = ["Home","Product","Pricing","Contact"];
const dropDownItems = ["item1", "item2", "item3", "item4"];
const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);
function NavBar() {
  const [navDropdownEl, setNavDropdownEl] = useState(null);
  const handleOpen = (e) => setNavDropdownEl(e.currentTarget);
  const handleClose = () => setNavDropdownEl(false);
  const open = Boolean(navDropdownEl);
  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Pages", "Cart", "Blog", "Shop", "Contact"].map(
          (text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  console.log("this is index", text);
                }}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <HomeIcon color="primary" />
                  ) : index === 1 ? (
                    <PagesIcon color="primary" />
                  ) : index === 2 ? (
                    <ProductionQuantityLimitsIcon color="primary" />
                  ) : index === 3 ? (
                    <BookIcon color="primary" />
                  ) : index === 4 ? (
                    <ShoppingBasketIcon color="primary" />
                  ) :(
                    <CallIcon color="primary" />
                  )
                  }
                </ListItemIcon>
                <CustomListItemText primary={text} />

              </ListItemButton>


            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <NavContainer maxWidth="xl">
        <LogoTypography variant="h4" noWrap href="/">
          Brandname
        </LogoTypography>
        <MenuItemsBox>
          {menuItems.map((item) => (
            <MenuItemButton key={item} size="small" variant="text">
              {item}
            </MenuItemButton>
          ))}
        </MenuItemsBox>
        <RightSide>
        <MenuItemButton  size="small" variant="text">
        Login
            </MenuItemButton>
          <Button variant="contained" size="small" endIcon={<ArrowForwardIcon />}>
          JOIN US
          </Button>
        </RightSide>



        {/* Responsive Menu */}
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                size="large"
                color="primary"
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>

              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </Box>
      </NavContainer>
      <Dropdown
        items={dropDownItems}
        anchorel={navDropdownEl}
        open={open}
        handleClose={handleClose}
        areaLabelledBy={"home-button"}
      />
    </AppBar>
  );
}
/*
============ CONTAINER ==============
*/

const NavContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  placeItems: "center",
  justifyContent: "space-evenly",
  marginTop: "10px",
  alignItems:'center',
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    justifyContent: "space-between",
  },
}));

/*
============ LOGO ==============
*/

const LogoTypography = styled(Typography)(({ theme }) => ({
  marginRight: "30px",
  fontWeight: "700",
  color:'#FFF',
  fontFamily: theme.typography.customFonts.Montserrat,
}));

/*
============ MENU ITEMS ==============
*/

const MenuItemsBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  placeItems: "center",
  alignItems: "center",
  gap: "30px",
  [theme.breakpoints.down("md")]: {
    display: "none",
    gap: "5px",
  },
}));

const MenuItemButton = styled(Button)(({ theme }) => ({
  maxWidth: "64px",
  color:"#FFF",
  fontFamily: theme.typography.customFonts.Montserrat,
  fontWeight:'500',
  fontSize:16,
}));


const CustomListItemText = styled(ListItemText)(({ theme }) => ({
   "&.MuiListItemText-primary":{
         fontFamily: theme.typography.customFonts.Montserrat,
  fontSize: 16,
   }


}));
const RightSide=styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:'center',
  width: "225px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export default NavBar;
