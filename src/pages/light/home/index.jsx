import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
//= Packages
//= Layout
import Layout from "@/layouts/default";
//= Components

import Loader from "@/components/Common/Loader";
import HzScroll from "@/components/CreativeAgency/HorizontalScroll";
import Portfolio from "@/components/Freelancer/Portfolio";
import About from "@/components/HomeMain/About";
import Blog from "@/components/HomeMain/Blog";
import Clients from "@/components/HomeMain/Clients";

import Header from "@/components/HomeMain/Header";
import LightFooter from "@/components/HomeMain/LightFooter";
import Marq from "@/components/HomeMain/Marq";
import Services from "@/components/HomeMain/Services";
import ServicesTabs from "@/components/HomeMain/ServicesTabs";

import Testimonials from "@/components/HomeMain/Testimonials";
import LightNavbar from "../light-navbar";
import PortfolioClassicGrid2Light from "../portfolio-grid-2";
import PortfolioClassicGrid3 from "../portfolio-grid-3";

function HomeCreativeAgencyLight() {
  useEffect(() => {
    document.body.classList.add("sub-bg");
    return () => document.body.classList.remove("sub-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Creative Agency</title>
      </Head>

      <Loader />

      <div id="smooth-wrapper">
        <LightNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header lightMode />
            <About />
            <Portfolio />
            <PortfolioClassicGrid2Light />
            <PortfolioClassicGrid3 />
            <Marq />
            <Clients lightMode />
            <Services lightMode />
            {/* <Works /> */}
            <ServicesTabs lightMode />
            <Testimonials lightMode />
            <HzScroll lightMode />
            <Blog />
          </main>
          <LightFooter lightMode />
        </div>
      </div>
    </>
  );
}

HomeCreativeAgencyLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeCreativeAgencyLight;
