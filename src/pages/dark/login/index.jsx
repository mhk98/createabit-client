import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Login from "@/components/Auth/Login";
import Loader from "@/components/Common/Loader";
import DarkNavbar from "../dark-navbar";

function UserLogin() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "Registration",
    title: "User Registration",
  };

  return (
    <>
      <Head>
        <title>Createabit - User Login</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <DarkNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Login />
          </main>
        </div>
      </div>
    </>
  );
}

UserLogin.getLayout = (page) => <Layout>{page}</Layout>;

export default UserLogin;
