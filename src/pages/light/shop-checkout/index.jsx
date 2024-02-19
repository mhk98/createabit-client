import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Shop/Header";
import Checkout from "@/components/Stripe/Checkout";
import LightFooter from "../light-footer";

function ShopCheckout() {
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
    title: "checkout.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Shop Checkout</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic lightMode />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <Checkout />
          </main>
          <LightFooter />
        </div>
      </div>
    </>
  );
}

ShopCheckout.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default ShopCheckout;
