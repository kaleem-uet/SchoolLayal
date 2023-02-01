import {
  Box,
  IconButton,
  Stack,
  styled,
  Typography,
  Rating,
  Button,
  ButtonBase,
} from "@mui/material";
import React from "react";
import Chip from "@mui/material/Chip";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
function LivePreview() {
  return (
    <Box
      sx={{
        width: "348px",
        height: "545px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 13px 19px rgba(0, 0, 0, 0.07)",
      }}
    >
      <div style={{ width: "100%", height: "250px", position: "relative" }}>
        <img
          src={
            "https://cdn.pixabay.com/photo/2010/12/13/09/59/colored-pencils-2063_960_720.jpg"
          }
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            width: "auto",

            height: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 7,
            backgroundColor: "red",
            color: "#FFf",
            position: "absolute",
            top: 20,
            left: 20,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "3px",
          }}
        >
          <CustomTypo width="400" variant="h6">
            sale
          </CustomTypo>
        </div>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 10,
            left: "50%",
            right: "50%",
          }}
        >
          <BtnCustom>
            <FavoriteBorderOutlinedIcon />
          </BtnCustom>
          <BtnCustom>
            <ShoppingCartOutlinedIcon />
          </BtnCustom>
          <BtnCustom>
            <RemoveRedEyeRoundedIcon />
          </BtnCustom>
        </Stack>
        <div style={{ padding: 10 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomTypo width="600" variant="h5" color="primary">
              Expert instruction
            </CustomTypo>
            <RaittingContainer>
              <Rating name="customized-10" defaultValue={1} max={1} readOnly />
              <CustomTypo width="400" variant="caption" color="#FFF">
                1.4
              </CustomTypo>
            </RaittingContainer>
          </div>
          <CustomTypo
            color="#252B42"
            width="600"
            variant="h5"
            sx={{ marginTop: 2 }}
          >
            Watch our Courses
          </CustomTypo>
          <CustomTypo variant="h5" color="#737373" width="400">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </CustomTypo>
          <CustomChip icon={<FileDownloadOutlinedIcon />} label="15 Sales" />
          <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
            <CustomTypo width="600" color="#BDBDBD" variant="h5">
              $16.48
            </CustomTypo>
            <CustomTypo width="600" color="#2435A1" variant="h5">
              {" "}
              $6.48
            </CustomTypo>
          </Stack>
          <CustomBtn>
            <CustomTypo width="600" variant="h6">
              Learn More
            </CustomTypo>
            <NavigateNextIcon sx={{ fontWidth: "700" }} />
          </CustomBtn>
        </div>
      </div>
    </Box>
  );
}

const BtnCustom = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#FFF",
  "&:hover": {
    backgroundColor: "#C0C0C0",
  },
}));

const CustomTypo = styled(Typography)(({ theme, color, width }) => ({
  textAlign: "justify",
  marginTop: 2,
  color: color,
  fontWeight: width,
  fontFamily: theme.typography.customFonts.Montserrat,
}));

const CustomChip = styled(Chip)(({ theme }) => ({
  "& .MuiChip-label": {
    overflow: "visible",
  },
  cursor: "pointer",
  marginTop: 2,
  fontFamily: theme.typography.customFonts.Montserrat,
  fontSize: 14,
}));

const CustomBtn = styled("div")({
  marginTop: 5,
  borderStyle: "solid",
  borderWidth: 1,
  width: "40%",
  padding: 10,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-around",
  cursor: "pointer",
  borderRadius: 25,
  color: "#FF6551",
  borderColor: "#FF6551",
  "&:hover": {
    backgroundColor: "#FF6551",
    color: "#fff",
  },
});
const RaittingContainer = styled('div')(({theme})=>({
  width: 50,
  height: 26,
  backgroundColor: "#26335D",
  borderRadius: 20,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 7px 0px 5px",
}));
export default LivePreview;
