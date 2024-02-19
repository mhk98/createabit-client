import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/showcases";
//= Components
import Loader from "@/components/Common/Loader";
import Carousel from "@/components/Showcases/Carousel";
import Menu from "@/components/Showcases/Menu";
import Navigation from "@/components/Showcases/Navigation";

function ShowcaseCarousel() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Carousel</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <Carousel />
      </main>
    </>
  );
}

ShowcaseCarousel.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowcaseCarousel;
