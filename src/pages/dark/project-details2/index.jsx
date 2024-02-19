import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import About from "@/components/InnerPages/ProjectDetails2/About";
import CallToAction from "@/components/InnerPages/ProjectDetails2/CallToAction";
import Content from "@/components/InnerPages/ProjectDetails2/Content";
import Header from "@/components/InnerPages/ProjectDetails2/Header";
import DarkNavbar from "../dark-navbar";

function ProjectDetails2() {
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
      {/* <Menu /> */}
      <main className="main-bg">
        <Header />
        <About />
        <Content />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

ProjectDetails2.getLayout = (page) => <Layout>{page}</Layout>;

export default ProjectDetails2;
