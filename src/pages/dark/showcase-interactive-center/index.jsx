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

function ShowcaseInteractiveCenter() {
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
      <Navigation />
      <Menu />
      <main>
        <InteractiveCenter />
      </main>
    </>
  );
}

ShowcaseInteractiveCenter.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowcaseInteractiveCenter;
