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
import Footer from "@/components/Corporate/Footer";
import Header from "@/components/Corporate/Header";
import Marq from "@/components/Corporate/Marq";
import Numbers from "@/components/Corporate/Numbers";
import Portfolio from "@/components/Corporate/Portfolio";
import Pricing from "@/components/Corporate/Pricing";
import Services from "@/components/Corporate/Services";
import Testimonials from "@/components/Corporate/Testimonials";
import DarkFooter from "../dark-footer";

function HomeCorporate() {
  useEffect(() => {
    document.body.classList.add("home-corp");
    return () => document.body.classList.remove("home-corp");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Corporate</title>
      </Head>

      <Loader />
      <LinesTwo />
      <Navbar />
      <main className="main-bg">
        <Header />
        <Services />
        <About />
        <Marq />
        <Portfolio />
        <Numbers />
        <Testimonials />
        <Block />
        <Pricing />
        <Blog />
      </main>
      <DarkFooter />
    </>
  );
}

HomeCorporate.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeCorporate;
