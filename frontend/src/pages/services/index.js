import React from 'react'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import {Helmet} from "react-helmet";

function Services() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Services</title>
            </Helmet>
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default Services