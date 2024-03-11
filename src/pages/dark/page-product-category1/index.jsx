import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Header";
import Product from "@/components/InnerPages/Products/product";
import DarkFooter from "../dark-footer";
import DarkNavbar from "../dark-navbar";

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
      <DarkNavbar></DarkNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Product />
        {/* <Services />
        <ServicesTab /> */}
        {/* <FAQ /> */}
        {/* <CallToAction innerPageStyle /> */}
        <DarkFooter />
      </main>
    </>
  );
}

PageProductsCategory1.getLayout = (page) => <Layout>{page}</Layout>;

export default PageProductsCategory1;
