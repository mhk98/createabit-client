import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import LightFooter from "@/components/HomeMain/LightFooter";
import Header from "@/components/InnerPages/Blog/Header";
import ImageOutFrame from "@/components/InnerPages/Blog/ImageOutFrame";

function BlogImageOutFrameLight() {
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
        <title>Createabit - Image Out Frame</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main className="main-bg">
        <Header data={metadata} />
        <ImageOutFrame />
      </main>
      <LightFooter />
    </>
  );
}

BlogImageOutFrameLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default BlogImageOutFrameLight;
