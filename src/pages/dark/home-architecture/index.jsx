import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import About from "@/components/Architecture/About";
import BgPattern from "@/components/Architecture/BgPattern";
import Blog from "@/components/Architecture/Blog";
import Clients from "@/components/Architecture/Clients";
import Footer from "@/components/Architecture/Footer";
import Header from "@/components/Architecture/Header";
import Intro from "@/components/Architecture/Intro";
import Portfolio from "@/components/Architecture/Portfolio";
import SectionImage from "@/components/Architecture/SectionImage";
import Services from "@/components/Architecture/Services";
import Testimonials from "@/components/Architecture/Testimonials";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import DarkFooter from "../dark-footer";

function HomeArchitecture() {
  useEffect(() => {
    document.body.classList.add("home-arch", "main-bg");
    return () => document.body.classList.remove("home-arch", "main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Architecture</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="position-re">
        <Header />
        <div className="block-pattern">
          <BgPattern />
          <Intro />
          <Clients />
          <Services />
        </div>
        <Portfolio />
        <About />
        <SectionImage />
        <Testimonials />
        <Blog />
      </main>
      <DarkFooter />
    </>
  );
}

HomeArchitecture.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeArchitecture;
