import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/showcases";
//= Components
import Loader from "@/components/Common/Loader";
import InteractiveCenterHorizontal from "@/components/Showcases/InteractiveCenterHorizontal";
import Menu from "@/components/Showcases/Menu";
import Navigation from "@/components/Showcases/Navigation";

function ShowcaseInteractiveCenterHorizontalLight() {
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
      <Navigation alwaysDark />
      <Menu lightMode />
      <main>
        <InteractiveCenterHorizontal />
      </main>
    </>
  );
}

ShowcaseInteractiveCenterHorizontalLight.getLayout = (page) => (
  <Layout lightMode>{page}</Layout>
);

export default ShowcaseInteractiveCenterHorizontalLight;
