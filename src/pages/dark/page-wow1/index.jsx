import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import Footer from "@/components/HomeMain/Footer";
import Wow1 from "@/components/InnerPages/Wow/Wow1";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";

// import ProductShop1 from "@/components/InnerPages/Shop/productShop1";

function PageWow1() {
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
      <DarkNavbar />
      <main>
        <Wow1></Wow1>
      </main>
      <DarkFooter />
    </>
  );
}

PageWow1.getLayout = (page) => <Layout>{page}</Layout>;

export default PageWow1;
