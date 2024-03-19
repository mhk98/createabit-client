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
import LightFooter from "../light-footer";
import LightNavbar from "../light-navbar";

function ShowcaseVerticalParallaxLight() {
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
      {/* <Navigation lightMode /> */}
      <LightNavbar lightMode />
      <main className="main-bg">
        <VerticalParallax />
        <Numbers paddingTop />
        <Block />
      </main>
      <LightFooter />
    </>
  );
}

ShowcaseVerticalParallaxLight.getLayout = (page) => (
  <Layout lightMode>{page}</Layout>
);

export default ShowcaseVerticalParallaxLight;
