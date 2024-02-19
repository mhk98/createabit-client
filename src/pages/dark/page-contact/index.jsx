import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import Form from "@/components/InnerPages/Contact/Form";
import Header from "@/components/InnerPages/Contact/Header";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";

function PageContact() {
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
      <DarkNavbar></DarkNavbar>
      <main>
        <Header />
        <Form />
      </main>
      <DarkFooter />
    </>
  );
}

PageContact.getLayout = (page) => <Layout>{page}</Layout>;

export default PageContact;
