import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import CallToAction from "@/components/InnerPages/AboutUs/CallToAction";
import Story from "@/components/InnerPages/AboutUs/Story";
import Header from "@/components/InnerPages/Header";
import LightFooter from "../light-footer";
import LightNavbar from "../light-navbar";

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
      <LightNavbar mainBg />
      <main>
        <Header data={headerMetadata} />
        <Story />
        {/* <Services /> */}
        {/* <Intro /> */}
        {/* <Testimonials mainColor /> */}
        {/* <Team /> */}
        {/* <Clients /> */}
        <CallToAction innerPageStyle />
      </main>
      <LightFooter />
    </>
  );
}

PageAbout.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageAbout;
