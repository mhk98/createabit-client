import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/Startup/Footer";

import Product from "@/components/InnerPages/Products/product";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function PageProducts() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "Web Development",
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
        {/* <Header data={headerMetadata} subBg={true} /> */}
        <Product />
        {/* <Services />
        <ServicesTab /> */}
        {/* <FAQ /> */}
        {/* <CallToAction innerPageStyle /> */}
      </main>
      <LightFooter />
    </>
  );
}

PageProducts.getLayout = (page) => <Layout>{page}</Layout>;

export default PageProducts;
