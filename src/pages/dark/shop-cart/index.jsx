import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Cart from "@/components/Shop/Cart";
import Header from "@/components/Shop/Header";
import Footer from "@/components/Startup/Footer";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";

function ShopCart() {
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
    title: "Cart.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Shop Cart</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <DarkNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <Cart />
          </main>
          <DarkFooter />
        </div>
      </div>
    </>
  );
}

ShopCart.getLayout = (page) => <Layout>{page}</Layout>;

export default ShopCart;
