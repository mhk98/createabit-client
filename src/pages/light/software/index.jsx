import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Software from "@/components/InnerPages/Software/Software";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function SoftwareProduct(lightMode) {
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
      <LightNavbar></LightNavbar>
      <main>
        <Software />
      </main>
      <LightFooter />
    </>
  );
}

SoftwareProduct.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default SoftwareProduct;
