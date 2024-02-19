import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Portfolio from "@/components/Freelancer/Portfolio";
import About from "@/components/HomeMain/About";
import Clients from "@/components/HomeMain/Clients";
import Header from "@/components/HomeMain/Header";
import LightFooter from "@/components/HomeMain/LightFooter";
import Marq from "@/components/HomeMain/Marq";
import Services from "@/components/HomeMain/Services";
import ServicesTabs from "@/components/HomeMain/ServicesTabs";
import Testimonials from "@/components/HomeMain/Testimonials";
import LightNavbar from "../light-navbar";
import PortfolioClassicGrid2Light from "../portfolio-grid-2";
import PortfolioClassicGrid3 from "../portfolio-grid-3";

function HomeMainLight() {
  useEffect(() => {
    document.body.classList.add("home-main-crev", "main-bg");

    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
    // Horizontal Scroll
    if (window.innerWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".thecontainer",
          pin: true,
          scrub: 1,
          end: () =>
            "+=" + document.querySelector(".thecontainer")?.offsetWidth,
        },
      });
    }
    // Footer Animation
    if (window.innerWidth > 991) {
      gsap.set(".footer-container", { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to(".footer-container", { yPercent: 0, ease: "none" });
      ScrollTrigger.create({
        trigger: "main",
        start: "bottom bottom",
        end: "+=50%",
        animation: uncover,
        scrub: true,
      });
    }

    return () => document.body.classList.remove("home-main-crev", "main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Main</title>
      </Head>

      <Loader />
      <LightNavbar></LightNavbar>
      <div id="smooth-wrapper">
        <LightNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header />
            <About />
            <Portfolio />
            <PortfolioClassicGrid2Light />
            <PortfolioClassicGrid3 />
            <Marq />
            <Clients lightMode />
            <Services lightMode />
            {/* <Works /> */}
            <ServicesTabs lightMode />
            <Testimonials lightMode />
            {/* <Blog /> */}
          </main>
          <LightFooter />
        </div>
      </div>
    </>
  );
}

HomeMainLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeMainLight;
