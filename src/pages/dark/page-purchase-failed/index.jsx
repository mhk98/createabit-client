import Loader from "@/components/Common/Loader";
import PaymentFailed from "@/components/Stripe/PaymentFailed";
import DefaultLayout from "@/layouts/default";
import Head from "next/head";
import { useEffect } from "react"; // Import useEffect from React
import DarkFooter from "../dark-footer";
import DarkNavbar from "../dark-navbar";

function PagePurchaseFailed() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    // Additional setup if needed

    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "PURCHASE",
    title: "Details.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Purchase Details</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <DarkNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <PaymentFailed />
          </main>
          <DarkFooter />
        </div>
      </div>
    </>
  );
}

PagePurchaseFailed.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default PagePurchaseFailed;
