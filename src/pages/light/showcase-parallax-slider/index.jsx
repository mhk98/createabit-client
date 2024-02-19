//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Menu from "@/components/Showcases/Menu";
import Navigation from "@/components/Showcases/Navigation";
import ParallaxSlider from "@/components/Showcases/ParallaxSlider";

function ShowcaseParallaxSliderLight() {
  return (
    <>
      <Head>
        <title>Createabit - Parallax Slider</title>
      </Head>

      <Loader />
      <Navigation lightMode />
      <Menu lightMode />
      <main>
        <ParallaxSlider />
      </main>
    </>
  );
}

ShowcaseParallaxSliderLight.getLayout = (page) => (
  <Layout lightMode>{page}</Layout>
);

export default ShowcaseParallaxSliderLight;
