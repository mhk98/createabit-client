import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";
import ShowcaseVerticalParallax from "../product";

function GroceryDetails() {
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
        <title>Createabit - Grocery</title>
      </Head>

      <Loader />
      <DarkNavbar></DarkNavbar>
      <main>
        <ShowcaseVerticalParallax />
      </main>
      <DarkFooter />
    </>
  );
}

GroceryDetails.getLayout = (page) => <Layout>{page}</Layout>;

export default GroceryDetails;
