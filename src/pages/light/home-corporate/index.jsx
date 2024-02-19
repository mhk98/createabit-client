import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import LinesTwo from "@/components/Common/LinesTwo";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import About from "@/components/Corporate/About";
import Block from "@/components/Corporate/Block";
import Blog from "@/components/Corporate/Blog";
import Header from "@/components/Corporate/Header";
import Marq from "@/components/Corporate/Marq";
import Numbers from "@/components/Corporate/Numbers";
import Portfolio from "@/components/Corporate/Portfolio";
import Pricing from "@/components/Corporate/Pricing";
import Services from "@/components/Corporate/Services";
import Testimonials from "@/components/Corporate/Testimonials";
import LightFooter from "@/components/HomeMain/LightFooter";

function HomeCorporateLight() {
  useEffect(() => {
    document.body.classList.add("home-corp", "main-bg");
    return () => document.body.classList.remove("home-corp", "main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Corporate</title>
      </Head>

      <Loader />
      <LinesTwo />
      <Navbar lightMode />
      <main className="main-bg">
        <Header />
        <Services lightMode />
        <About lightMode />
        <Marq />
        <Portfolio />
        <Numbers />
        <Testimonials lightMode />
        <Block lightMode />
        <Pricing />
        <Blog />
      </main>
      <LightFooter lightMode />
    </>
  );
}

HomeCorporateLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeCorporateLight;
