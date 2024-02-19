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

function HomeStartupLight() {
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
      <Navbar noStatic mainBg lightMode />
      <main>
        <Header lightMode />
        <Intro />
        <Marq />
        <Services />
        <Portfolio />
        <Testimonials lightMode />
        <Team />
        <Clients lightMode />
        <Blog />
        <CallToAction />
      </main>
      <Footer lightMode />
    </>
  );
}

HomeStartupLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeStartupLight;
