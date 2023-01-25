import { styled, Typography } from '@mui/material'
import React from 'react'
import { BtnWrapper } from '../Wrapper/Wrapper'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
function AppBar() {
  return (
    <div style={{display:"flex",alignItems:"center",flexDirection:"row"}}>
 <FormControl sx={{ width: '400px' }}>
        <CustomInput placeholder="Your Email" sx={{backgroundColor:"#E6E6E6"}} />
      </FormControl>
      <BtnWrapper>
         <Typography variant='h4' color="#FFF">
          Subscribe
         </Typography>
       </BtnWrapper>
    </div>

  )
}

const CustomInput=styled(OutlinedInput)(({theme})=>({
  "&.MuiOutlinedInput-root":{

  },
  "& .MuiOutlinedInput-input":{
    fontSize:14,
  }
}))
export default AppBar