import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import DarkFooter from "../dark-footer";
import DarkNavbar from "../dark-navbar";
import HomeSoftware from "@/components/HomeMain/HomeSoftware";

function DisplaySoftware(lightMode) {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "SOFTWARE",
  };

  return (
    <>
      <Head>
        <title>Createabit - Software</title>
      </Head>

      <Loader />
      <DarkNavbar></DarkNavbar>
      <main>
        <HomeSoftware />
      </main>
      <DarkFooter />
    </>
  );
}

DisplaySoftware.getLayout = (page) => <Layout>{page}</Layout>;

export default DisplaySoftware;
