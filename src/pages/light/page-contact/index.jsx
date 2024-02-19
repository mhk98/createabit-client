import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Form from "@/components/InnerPages/Contact/Form";
import Header from "@/components/InnerPages/Contact/Header";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function PageContactLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Contact Us</title>
      </Head>

      <Loader />
      <LightNavbar></LightNavbar>
      <main>
        <Header />
        <Form />
      </main>
      <LightFooter />
    </>
  );
}

PageContactLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageContactLight;
