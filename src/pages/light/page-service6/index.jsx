import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout

//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Header";
import Layout from "@/layouts/default";


import Service6 from "@/components/InnerPages/ServiceDetails/Service6";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function PageService6() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "SERVICES",
  };
  return (
    <>
      <Head>
        <title>Createabit - Services</title>
      </Head>

      <Loader />
      <LightNavbar></LightNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Service6></Service6>
      </main>
      <LightFooter />
    </>
  );
}

PageService6.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageService6;
