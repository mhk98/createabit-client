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

function ShowcaseCarouselLight() {
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
      <Navigation alwaysDark />
      <Menu lightMode />
      <main>
        <Carousel lightMode />
      </main>
    </>
  );
}

ShowcaseCarouselLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default ShowcaseCarouselLight;
