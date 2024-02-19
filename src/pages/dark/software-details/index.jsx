import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import About from "@/components/InnerPages/SoftwareDetails/About";
import CallToAction from "@/components/InnerPages/SoftwareDetails/CallToAction";
import Content from "@/components/InnerPages/SoftwareDetails/Content";
import Header from "@/components/InnerPages/SoftwareDetails/Header";
import DarkFooter from "../dark-footer";
import DarkNavbar from "../dark-navbar";

function SoftwareDetails() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Software Details</title>
      </Head>

      <Loader />
      <DarkNavbar />
      {/* <Menu /> */}
      <main className="main-bg">
        <Header />
        <About />
        <Content />
        <CallToAction />
      </main>
      <DarkFooter />
    </>
  );
}

SoftwareDetails.getLayout = (page) => <Layout>{page}</Layout>;

export default SoftwareDetails;
