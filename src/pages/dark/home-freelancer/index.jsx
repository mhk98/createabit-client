import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Blog from "@/components/Freelancer/Blog";
import Contact from "@/components/Freelancer/Contact";
import Footer from "@/components/Freelancer/Footer";
import Header from "@/components/Freelancer/Header";
import Intro from "@/components/Freelancer/Intro";
import Marq from "@/components/Freelancer/Marq";
import Navbar from "@/components/Freelancer/Navbar";
import Portfolio from "@/components/Freelancer/Portfolio";
import Services from "@/components/Freelancer/Services";
import Skills from "@/components/Freelancer/Skills";
import Testimonials from "@/components/Freelancer/Testimonials";
import DarkFooter from "../dark-footer";

function HomeFreelancer() {
  useEffect(() => {
    document.body.classList.add("home-freelancer", "main-bg");
    return () => document.body.classList.remove("home-freelancer", "main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Freelancer</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <Header />
      <main className="position-re">
        <Marq />
        <Services />
        <Intro />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <DarkFooter />
    </>
  );
}

HomeFreelancer.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeFreelancer;
