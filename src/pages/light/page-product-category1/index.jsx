import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Product from "@/components/InnerPages/Products/product";

import Footer from "@/components/HomeMain/Footer";
import Header from "@/components/InnerPages/Header";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function PageProductsCategory1() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "Dynamic Digital Products",
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
        <Product lightMode />
        {/* <Services />
        <ServicesTab /> */}
        {/* <FAQ /> */}
        {/* <CallToAction innerPageStyle /> */}
        <LightFooter  />
      </main>
    </>
  );
}

PageProductsCategory1.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageProductsCategory1;
