import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import Wow4 from "@/components/InnerPages/Wow/Wow4";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function PageWow4() {
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
      <LightNavbar />
      <main>
        <Wow4 />
      </main>
      <LightFooter />
    </>
  );
}

PageWow4.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageWow4;
