import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Menu from "@/components/Showcases/Menu";
import Navigation from "@/components/Showcases/Navigation";
import VerticalParallax from "@/components/Showcases/VerticalParallax";
import Block from "@/components/Showcases/VerticalParallax/Block";
import Footer from "@/components/Showcases/VerticalParallax/Footer";
import Numbers from "@/components/Showcases/VerticalParallax/Numbers";

function ShowcaseVerticalParallax() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Vertical Parallax</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main className="main-bg">
        <VerticalParallax />
        <Numbers paddingTop />
        <Block />
      </main>
      <Footer />
    </>
  );
}

ShowcaseVerticalParallax.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowcaseVerticalParallax;
