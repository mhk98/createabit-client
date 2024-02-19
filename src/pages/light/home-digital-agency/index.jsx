import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import LinesTwo from "@/components/Common/LinesTwo";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Approach from "@/components/DigitalAgency/Approach";
import Block from "@/components/DigitalAgency/Block";
import Blog from "@/components/DigitalAgency/Blog";
import CallToAction from "@/components/DigitalAgency/CallToAction";
import Clients from "@/components/DigitalAgency/Clients";
import Header from "@/components/DigitalAgency/Header";
import Portfolio from "@/components/DigitalAgency/Portfolio";
import Price from "@/components/DigitalAgency/Price";
import Services from "@/components/DigitalAgency/Services";
import ServicesTab from "@/components/DigitalAgency/ServicesTab";
import Testimonials from "@/components/DigitalAgency/Testimonials";
import LightFooter from "@/components/HomeMain/LightFooter";

function HomeDigitalAgencyLight() {
  useEffect(() => {
    document.body.classList.add("home-digital", "main-bg");
    return () => document.body.classList.remove("home-digital", "main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Digital Agency</title>
      </Head>

      <Loader />
      <LinesTwo />
      <Navbar mainBg lightMode />
      <Header lightMode />
      <main className="position-re">
        <Services lightMode />
        <Block lightMode />
        <Portfolio />
        <Price />
        <ServicesTab lightMode />
        <Clients lightMode />
        <Testimonials />
        <Approach />
        <CallToAction lightMode />
        <Blog />
      </main>
      <LightFooter />
    </>
  );
}

HomeDigitalAgencyLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeDigitalAgencyLight;
