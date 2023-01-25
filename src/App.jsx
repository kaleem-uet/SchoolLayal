import { useState } from 'react'
import { styled, Typography } from '@mui/material'
import Footer from './Components/Footer/Footer'
import AppBar from './Common/Header/AppBar'
import NavBar from './Common/Header/NavBar'
function App() {
  return (
    <>

        <NavBar/>
       <AppBar/>
       <Footer/>
    </>
  )
}

const CustomeTypo=styled(Typography)(({theme})=>({
 fontFamily:theme.typography.customFonts.Montserrat,
 fontWeight:"700"
}))
export default App
