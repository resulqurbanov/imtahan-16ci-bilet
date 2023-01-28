import React from 'react'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import {Helmet} from "react-helmet";

function Contact() {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
            </Helmet>
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default Contact