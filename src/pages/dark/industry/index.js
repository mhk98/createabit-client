import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Industry from "@/components/InnerPages/Industry/Industry";
import DarkFooter from "../dark-footer";
import DarkNavbar from "../dark-navbar";

function IndustryProduct() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "INDUSTRY",
  };

  return (
    <>
      <Head>
        <title>Createabit - Grocery</title>
      </Head>

      <Loader />
      <DarkNavbar></DarkNavbar>
      <main>
        <Industry />
      </main>
      <DarkFooter />
    </>
  );
}

IndustryProduct.getLayout = (page) => <Layout>{page}</Layout>;

export default IndustryProduct;
