import {
  Box,
  IconButton,
  Stack,
  styled,
  Typography,
  Rating,
} from "@mui/material";
import React from "react";
import Chip from "@mui/material/Chip";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
function LivePreview() {
  return (
    <Box
      sx={{
        width: "348px",
        height: "500px",
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
          <Typography variant="h6">sale</Typography>
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
            <Typography variant="h5" color="primary">
              Expert instruction
            </Typography>
            <div
              style={{
                width: 50,
                height: 26,
                backgroundColor: "#26335D",
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0px 7px 0px 5px",
              }}
            >
              <Rating name="customized-10" defaultValue={1} max={1} />

              <Typography variant="caption" color="#FFF">
                1.4
              </Typography>
            </div>
          </div>
          <Typography variant="h5" color="initial" sx={{ marginTop: 2 }}>
            Watch our Courses
          </Typography>
          <Typography
            variant="h5"
            color="#737373"
            sx={{ textAlign: "justify", marginTop: 2 }}
          >
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </Typography>
        </div>

          <CustomChip
            icon={<FileDownloadOutlinedIcon />}
            label="15 Sales"
            sx={{
              fontSize: 12,
            }}
          />
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
const CustomChip = styled(Chip)(({ theme }) => ({
  "& .MuiChip-label": {
    overflow: "visible",
  },
}));
export default LivePreview;
