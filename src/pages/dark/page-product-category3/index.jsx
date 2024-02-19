import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import Header from "@/components/InnerPages/Header";
import Product2 from "@/components/InnerPages/Products/product2";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";

function PageProductsCategory3() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "INTERACTIVE WOW PRODUCTION",
  };

  return (
    <>
      <Head>
        <title>Createabit - Services</title>
      </Head>

      <Loader />
      {/* <Navbar mainBg /> */}
      <DarkNavbar></DarkNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Product2 />
        {/* <Services />
        <ServicesTab /> */}
        {/* <FAQ /> */}
        {/* <CallToAction innerPageStyle /> */}
        <DarkFooter />
      </main>
    </>
  );
}

PageProductsCategory3.getLayout = (page) => <Layout>{page}</Layout>;

export default PageProductsCategory3;
