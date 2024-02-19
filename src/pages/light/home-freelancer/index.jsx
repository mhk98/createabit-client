import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Blog from "@/components/Freelancer/Blog";
import Contact from "@/components/Freelancer/Contact";
import Header from "@/components/Freelancer/Header";
import Intro from "@/components/Freelancer/Intro";
import Marq from "@/components/Freelancer/Marq";
import Navbar from "@/components/Freelancer/Navbar";
import Portfolio from "@/components/Freelancer/Portfolio";
import Services from "@/components/Freelancer/Services";
import Skills from "@/components/Freelancer/Skills";
import Testimonials from "@/components/Freelancer/Testimonials";
import LightFooter from "@/components/HomeMain/LightFooter";

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
      <Navbar mainBg lightMode />
      <Header />
      <main className="position-re">
        <Marq />
        <Services lightMode />
        <Intro />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <LightFooter />
    </>
  );
}

HomeFreelancer.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeFreelancer;
