import React from 'react'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import {Helmet} from "react-helmet";

function Pages() {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Pages</title>
            </Helmet>
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default Pages