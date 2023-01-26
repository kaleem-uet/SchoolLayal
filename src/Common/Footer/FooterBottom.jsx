import React from 'react'
import { BtnWrapper, Wrapper } from '../Wrapper/Wrapper'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import Container from '@mui/material/Container'
import { styled, Typography ,Stack} from '@mui/material';
import { FooterTypo } from '../CustomTypo';
function FooterBottom() {
  return (
   <Wrapper color={"#FAFAFA"}>
       <CustomContainer maxWidth="lg">
         <div>
           <FooterTypo variant='h6' color={"#000"}>
           Made With Love By Figmaland All Right Reserved
           </FooterTypo>
         </div>
         <Stack direction='row' spacing={2}>
           <FacebookRoundedIcon sx={IconStyle}/>
           <InstagramIcon sx={IconStyle}/>
           <TwitterIcon sx={IconStyle}/>
         </Stack>
       </CustomContainer>

   </Wrapper>
  )
}

const IconStyle=(({
  color:"#FF6551",cursor:"pointer"
}));
const CustomContainer=styled(Container)(({theme})=>({
  display:"flex", alignItems:"center",
  justifyContent:"space-between"
}))
export default FooterBottom