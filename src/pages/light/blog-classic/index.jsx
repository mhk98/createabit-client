import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import Classic from "@/components/InnerPages/Blog/Classic";
import Header from "@/components/InnerPages/Blog/Header";
import LightNavbar from "../light-navbar";
import DarkFooter from "@/pages/dark/dark-footer";
import LightFooter from "../light-footer";

function BlogClassicLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "OUR BLOG",
    title: "Latest News.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Blog Classic</title>
      </Head>

      <Loader />
      <LightNavbar mainBg lightMode />
      <main className="main-bg">
        <Header data={metadata} />
        <Classic />
      </main>
      <LightFooter />
    </>
  );
}

BlogClassicLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default BlogClassicLight;
