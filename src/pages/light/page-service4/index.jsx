import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout

//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Header";
import Layout from "@/layouts/default";



import Service4 from "@/components/InnerPages/ServiceDetails/Service4";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";
import ServiceMain from "@/components/InnerPages/ServiceDetails/ServiceMain";

function PageService4() {
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
        <ServiceMain></ServiceMain>

      </main>
      <LightFooter />
    </>
  );
}

PageService4.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageService4;
