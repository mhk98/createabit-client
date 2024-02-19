import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Portfolio/Header";
import Metro from "@/components/Portfolio/Metro";
import Footer from "@/components/Startup/Footer";

function PortfolioMetro() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Work Metro.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Portfolio Metro</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <Metro />
      </main>
      <Footer subBg />
    </>
  );
}

PortfolioMetro.getLayout = (page) => <Layout>{page}</Layout>;

export default PortfolioMetro;
