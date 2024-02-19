import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Testimonials from "@/components/DigitalAgency/Testimonials";
import Clients from "@/components/InnerPages/About/Clients";
import Intro from "@/components/InnerPages/About/Intro";
import Services from "@/components/InnerPages/About/Services";
import Story from "@/components/InnerPages/About/Story";
import Header from "@/components/InnerPages/Header";
import CallToAction from "@/components/Startup/CallToAction";
import Footer from "@/components/Startup/Footer";
import Team from "@/components/Startup/Team";
import DarkFooter from "../dark-footer";

function PageAbout() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHO WE ARE ?",
    title: "We're a digital agency based in Valencia.",
    text: "About Us",
  };

  return (
    <>
      <Head>
        <title>Createabit - About</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} />
        <Story />
        <Services />
        <Intro />
        <Testimonials mainColor />
        <Team />
        <Clients />
        <CallToAction innerPageStyle />
      </main>
      <DarkFooter />
    </>
  );
}

PageAbout.getLayout = (page) => <Layout>{page}</Layout>;

export default PageAbout;
