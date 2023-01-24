import { useState } from 'react'
import { styled, Typography } from '@mui/material'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
      <Footer/>
    </>
  )
}

const CustomeTypo=styled(Typography)(({theme})=>({
 fontFamily:theme.typography.customFonts.Montserrat,
 fontWeight:"700"
}))
export default App
