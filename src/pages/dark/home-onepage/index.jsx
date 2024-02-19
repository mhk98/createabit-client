import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import LinesTwo from "@/components/Common/LinesTwo";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import About from "@/components/OnePage/About";
import Blog from "@/components/OnePage/Blog";
import Contact from "@/components/OnePage/Contact";
import Footer from "@/components/OnePage/Footer";
import Header from "@/components/OnePage/Header";
import ImageSection from "@/components/OnePage/Image";
import Intro from "@/components/OnePage/Intro";
import Marq from "@/components/OnePage/Marq";
import Portfolio from "@/components/OnePage/Portfolio";
import Services from "@/components/OnePage/Services";
import Team from "@/components/OnePage/Team";
import Testimonials from "@/components/OnePage/Testimonials";
import DarkFooter from "../dark-footer";

function HomeOnePage() {
  useEffect(() => {
    document.body.classList.add("sub-bg");
    return () => document.body.classList.remove("sub-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - One Page</title>
      </Head>

      <Loader />
      <LinesTwo />
      <Navbar curve noStatic />
      <main className="main-bg">
        <Header />
        <About />
        <Marq />
        <Services />
        <Portfolio />
        <Intro />
        <Testimonials />
        <ImageSection />
        <Team />
        <Blog />
        <Contact />
      </main>
      <DarkFooter />
    </>
  );
}

HomeOnePage.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeOnePage;
