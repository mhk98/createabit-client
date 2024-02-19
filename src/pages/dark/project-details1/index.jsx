import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import CallToAction from "@/components/InnerPages/ProjectDetails/CallToAction";
import Content from "@/components/InnerPages/ProjectDetails/Content";
import Header from "@/components/InnerPages/ProjectDetails/Header";
import DarkNavbar from "../dark-navbar";

function ProjectDetails() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Project Details</title>
      </Head>

      <Loader />
      <DarkNavbar />
      <main>
        <Header />
        <Content />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

ProjectDetails.getLayout = (page) => <Layout>{page}</Layout>;

export default ProjectDetails;
