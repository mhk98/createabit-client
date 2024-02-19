import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import Header from "@/components/Shop/Header";
import List from "@/components/Shop/List";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function ShopListLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "SHOPPING",
    title: "List.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Shop List</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <LightNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <List />
          </main>
          <LightFooter   />
        </div>
      </div>
    </>
  );
}

ShopListLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default ShopListLight;
