import React from "react";
import Expert from "../../components/HomeComponents/Expert";
import Explore from "../../components/HomeComponents/Explore";
import Grow from "../../components/HomeComponents/Grow";
import Project from "../../components/HomeComponents/Project";
import Uclukart from "../../components/HomeComponents/uclukart";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import {Helmet} from "react-helmet";
function Home() {
  return (
    <>
      <Navbar />
      <Grow />
      <Explore />
      <Expert />
      <Uclukart/>
      <Project/>
      <Footer/>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
    </>
  );
}

export default Home;
