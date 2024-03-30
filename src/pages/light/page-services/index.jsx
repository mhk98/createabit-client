import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import ServicesTab from "@/components/DigitalAgency/ServicesTab";
import Header from "@/components/InnerPages/Header";
import Portfolio from "@/components/InnerPages/Services/Portfolio";
import CallToAction from "@/components/Startup/CallToAction";
import LightFooter from "../light-footer";
import LightNavbar from "../light-navbar";
import Products from "@/components/InnerPages/Products/products";

function PageServicesLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "SERVICES",
  };

  return (
    <>
      <Head>
        <title>Createabit - Services</title>
      </Head>

      <Loader />
      {/* <Navbar mainBg lightMode /> */}
      <LightNavbar></LightNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        {/* <Services lightMode /> */}
        <Products />
        <ServicesTab lightMode />
        {/* <FAQ /> */}
        <CallToAction innerPageStyle />
      </main>
      <LightFooter />
    </>
  );
}

PageServicesLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageServicesLight;
