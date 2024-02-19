import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";


import Header from "@/components/InnerPages/Team/Header";
import Team from "@/components/InnerPages/Team/Team";
import Testimonials from "@/components/InnerPages/Team/Testimonials";
import CallToAction from "@/components/Startup/CallToAction";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function PageTeamLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Our Team</title>
      </Head>

      <Loader />
      <LightNavbar />
      <main>
        <Header />
        <Team />
        <Testimonials />
        <CallToAction innerPageStyle />
      </main>
      <LightFooter  />
    </>
  );
}

PageTeamLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageTeamLight;
