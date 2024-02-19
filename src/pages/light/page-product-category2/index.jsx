import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import Footer from "@/components/HomeMain/Footer";
import Header from "@/components/InnerPages/Header";
import Product1 from "@/components/InnerPages/Products/product1";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function PageProductsCategory2() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "Intelligent TECH Products",
  };

  return (
    <>
      <Head>
        <title>Createabit - Services</title>
      </Head>

      <Loader />
      {/* <Navbar mainBg /> */}
      <LightNavbar></LightNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Product1 lightMode />
        {/* <Services />
        <ServicesTab /> */}
        {/* <FAQ /> */}
        {/* <CallToAction innerPageStyle /> */}
        <LightFooter  />
      </main>
    </>
  );
}

PageProductsCategory2.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageProductsCategory2;
