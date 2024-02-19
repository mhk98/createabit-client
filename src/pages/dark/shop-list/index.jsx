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
import DarkNavbar from "../dark-navbar";

function ShopList() {
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
        <DarkNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <List />
          </main>
          <Footer subBg />
        </div>
      </div>
    </>
  );
}

ShopList.getLayout = (page) => <Layout>{page}</Layout>;

export default ShopList;
