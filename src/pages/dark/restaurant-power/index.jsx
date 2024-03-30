import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import DarkFooter from "../dark-footer";
import DarkNavbar from "../dark-navbar";
import Header from "@/components/BusinessSolution/ReataurantPower/Header";
import About from "@/components/BusinessSolution/ReataurantPower/About";
import Content from "@/components/BusinessSolution/ReataurantPower/Content";
import CallToAction from "@/components/BusinessSolution/ReataurantPower/CallToAction";

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
