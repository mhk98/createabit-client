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
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function ShopCartLight() {
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
        <LightNavbar/>
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <Cart lightMode />
          </main>
          <LightFooter  />
        </div>
      </div>
    </>
  );
}

ShopCartLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default ShopCartLight;
