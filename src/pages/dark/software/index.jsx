import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Software from "@/components/InnerPages/Software/Software";
import DarkFooter from "../dark-footer";
import DarkNavbar from "../dark-navbar";

function SoftwareProduct() {
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
        <Software />
      </main>
      <DarkFooter />
    </>
  );
}

SoftwareProduct.getLayout = (page) => <Layout>{page}</Layout>;

export default SoftwareProduct;
