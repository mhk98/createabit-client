import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/showcases";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import InteractiveCenterHorizontal from "@/components/Showcases/InteractiveCenterHorizontal";
import Menu from "@/components/Showcases/Menu";
import Navigation from "@/components/Showcases/Navigation";

function ShowcaseInteractiveCenterHorizontal() {
  useEffect(() => {
    document.body.classList.add("main-bg", "inter-center");
    return () => document.body.classList.remove("main-bg", "inter-center");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Interactive Horizontal</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <InteractiveCenterHorizontal />
        <Footer />
      </main>
    </>
  );
}

ShowcaseInteractiveCenterHorizontal.getLayout = (page) => (
  <Layout>{page}</Layout>
);

export default ShowcaseInteractiveCenterHorizontal;
