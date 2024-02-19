import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Header";
import Product2 from "@/components/InnerPages/Products/product2";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

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
      <LightNavbar></LightNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Product2 lightMode />
        {/* <Services />
        <ServicesTab /> */}
        {/* <FAQ /> */}
        {/* <CallToAction innerPageStyle /> */}
        <LightFooter />
      </main>
    </>
  );
}

PageProductsCategory3.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageProductsCategory3;
