import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import Header from "@/components/Shop/Header";

import DarkFooter from "../dark-footer";
import DarkNavbar from "../dark-navbar";
import Checkout from "@/components/Stripe/Checkout";

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
        <DarkNavbar mainBg noStatic />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <Checkout />
          </main>
          <DarkFooter subBg />
        </div>
      </div>
    </>
  );
}

ShopCheckout.getLayout = (page) => <Layout>{page}</Layout>;

export default ShopCheckout;
