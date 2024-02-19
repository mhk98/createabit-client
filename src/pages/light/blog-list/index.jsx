import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import LightFooter from "@/components/HomeMain/LightFooter";
import Header from "@/components/InnerPages/Blog/Header";
import List from "@/components/InnerPages/Blog/List";
import LightNavbar from "../light-navbar";

function BlogListLight() {
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
        <title>Createabit - Blog List</title>
      </Head>

      <Loader />
      <LightNavbar />
      <main className="main-bg">
        <Header data={metadata} />
        <List />
      </main>
      <LightFooter lightMode />
    </>
  );
}

BlogListLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default BlogListLight;
