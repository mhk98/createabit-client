import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import IntelligentTech4 from "@/components/InnerPages/Intelligent/IntelligentTech4";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function PageProductShop1() {
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
      <LightNavbar></LightNavbar>
      <main>
        <IntelligentTech4></IntelligentTech4>
      </main>
      <LightFooter />
    </>
  );
}

PageProductShop1.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageProductShop1;
