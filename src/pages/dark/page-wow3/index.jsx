import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import Wow3 from "@/components/InnerPages/Wow/Wow3";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";

function PageWow3() {
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
        <Wow3></Wow3>
      </main>
      <DarkFooter />
    </>
  );
}

PageWow3.getLayout = (page) => <Layout>{page}</Layout>;

export default PageWow3;
