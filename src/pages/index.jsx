import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/preview";
//= Components

import Overlay from "@/components/Preview/Overlay";
import HomeCreativeAgency from "./dark/home-creative-agency";

function LandingPreview() {
  useEffect(() => {
    document.body.classList.add("sub-bg");
    return () => document.body.classList.remove("sub-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Preview</title>
      </Head>
      <Overlay />
      <main>
        {/* <HomeMain></HomeMain> */}
        <HomeCreativeAgency />
      </main>
    </>
  );
}

LandingPreview.getLayout = (page) => <Layout>{page}</Layout>;

export default LandingPreview;
