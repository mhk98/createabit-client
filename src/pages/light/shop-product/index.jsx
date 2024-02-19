import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import Product from "@/components/Shop/Product";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function ShopProductLight() {
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

  return (
    <>
      <Head>
        <title>Createabit - Shop Product</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <LightNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Product />
          </main>
          <LightFooter  />
        </div>
      </div>
    </>
  );
}

ShopProductLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default ShopProductLight;
