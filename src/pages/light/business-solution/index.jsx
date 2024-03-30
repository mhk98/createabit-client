import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/showcases";
//= Scripts
import customScript from "@/common/marketing-agency-customjs";
import showcaseScript from "@/common/showcase-script";
//= Components
import Loader from "@/components/Common/Loader";
import FrameSlider from "@/components/Showcases/FrameSlider";
import Menu from "@/components/Showcases/Menu";
import LightNavbar from "../light-navbar";

function ShowcaseFrameSliderLight() {
  useEffect(() => {
    customScript();
    showcaseScript.demo();
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Frame Slider</title>
      </Head>

      <Loader />
      {/* <Navigation lightMode /> */}
      <LightNavbar />
      <Menu lightMode />
      <main>
        <FrameSlider />
      </main>
    </>
  );
}

ShowcaseFrameSliderLight.getLayout = (page) => (
  <Layout lightMode>{page}</Layout>
);

export default ShowcaseFrameSliderLight;
