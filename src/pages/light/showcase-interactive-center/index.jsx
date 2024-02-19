import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/showcases";
//= Components
import Loader from "@/components/Common/Loader";
import InteractiveCenter from "@/components/Showcases/InteractiveCenter";
import Menu from "@/components/Showcases/Menu";
import Navigation from "@/components/Showcases/Navigation";

function ShowcaseInteractiveCenterLight() {
  useEffect(() => {
    document.body.classList.add("main-bg", "inter-center");
    return () => document.body.classList.remove("main-bg", "inter-center");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Interactive</title>
      </Head>

      <Loader />
      <Navigation alwaysDark />
      <Menu lightMode />
      <main>
        <InteractiveCenter />
      </main>
    </>
  );
}

ShowcaseInteractiveCenterLight.getLayout = (page) => (
  <Layout lightMode>{page}</Layout>
);

export default ShowcaseInteractiveCenterLight;
