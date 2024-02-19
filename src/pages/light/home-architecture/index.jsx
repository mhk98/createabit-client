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
import Header from "@/components/Architecture/Header";
import Intro from "@/components/Architecture/Intro";
import Portfolio from "@/components/Architecture/Portfolio";
import SectionImage from "@/components/Architecture/SectionImage";
import Services from "@/components/Architecture/Services";
import Testimonials from "@/components/Architecture/Testimonials";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import LightFooter from "@/components/HomeMain/LightFooter";

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
      <Navbar mainBg lightMode />
      <main className="position-re">
        <Header />
        <div className="block-pattern">
          <BgPattern />
          <Intro />
          <Clients lightMode />
          <Services lightMode />
        </div>
        <Portfolio />
        <About />
        <SectionImage />
        <Testimonials lightMode />
        <Blog />
      </main>
      <LightFooter lightMode />
    </>
  );
}

HomeArchitecture.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeArchitecture;
