import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import GridTwoCols from "@/components/Portfolio/ClassicGrid/2Col";

function PortfolioClassicGrid2() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "Our Products",
    title: "Recent Products.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Portfolio Classic Grid 2 Col</title>
      </Head>

      <Loader />
      {/* <Navbar mainBg /> */}
      <main className="main-bg">
        {/* <Header data={metadata} /> */}
        <GridTwoCols />
      </main>
      {/* <DarkFooter/> */}
    </>
  );
}

PortfolioClassicGrid2.getLayout = (page) => <Layout>{page}</Layout>;

export default PortfolioClassicGrid2;
