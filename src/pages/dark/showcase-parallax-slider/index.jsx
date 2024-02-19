//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Menu from "@/components/Showcases/Menu";
import Navigation from "@/components/Showcases/Navigation";
import ParallaxSlider from "@/components/Showcases/ParallaxSlider";

function ShowcaseParallaxSlider() {
  return (
    <>
      <Head>
        <title>Createabit - Parallax Slider</title>
      </Head>

      <Loader />
      <Navigation />
      <Menu />
      <main>
        <ParallaxSlider />
      </main>
    </>
  );
}

ShowcaseParallaxSlider.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowcaseParallaxSlider;
