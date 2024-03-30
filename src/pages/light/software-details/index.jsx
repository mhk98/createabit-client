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
import LightFooter from "../light-footer";
import LightNavbar from "../light-navbar";

function SoftwareDetails(lightMode) {
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
      <LightNavbar />
      {/* <Menu /> */}
      <main className="main-bg">
        <Header />
        <About />
        <Content />
        <CallToAction />
      </main>
      <LightFooter />
    </>
  );
}

SoftwareDetails.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default SoftwareDetails;
