import React from 'react'
import Addpage from '../../components/AddComponens'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import {Helmet} from "react-helmet";

function Add() {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
            </Helmet>
    <Navbar/>
    <Addpage/>
    <Footer/>
    </>
    
  )
}

export default Add