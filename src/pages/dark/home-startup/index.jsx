import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Blog from "@/components/Startup/Blog";
import CallToAction from "@/components/Startup/CallToAction";
import Clients from "@/components/Startup/Clients";
import Footer from "@/components/Startup/Footer";
import Header from "@/components/Startup/Header";
import Intro from "@/components/Startup/Intro";
import Marq from "@/components/Startup/Marq";
import Portfolio from "@/components/Startup/Portfolio";
import Services from "@/components/Startup/ServicesContainer";
import Team from "@/components/Startup/Team";
import Testimonials from "@/components/Startup/Testimonials";
import DarkFooter from "../dark-footer";

function HomeStartup() {
  useEffect(() => {
    document.body.classList.add("home-startup", "main-bg");
    return () => document.body.classList.remove("home-startup", "main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Startup</title>
      </Head>

      <Loader />
      <Navbar noStatic mainBg />
      <main>
        <Header />
        <Intro />
        <Marq />
        <Services />
        <Portfolio />
        <Testimonials />
        <Team />
        <Clients />
        <Blog />
        <CallToAction />
      </main>
      <DarkFooter />
    </>
  );
}

HomeStartup.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeStartup;
