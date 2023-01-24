import { Link, styled, Typography } from "@mui/material";

export const FooterTypo=styled(Typography)(({theme})=>({
    fontFamily:theme.typography.customFonts.Montserrat,
    color:"#FFF",
    fontWeight:"500"
}))
export const FooterLink=styled(Link)(({theme})=>({
    fontFamily:theme.typography.customFonts.Montserrat,
    color:"#FFF",
    fontWeight:"400",
    cursor:"pointer",
}))