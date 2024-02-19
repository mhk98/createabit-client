import Loader from "@/components/Common/Loader";

import { useGetServiceDetailsQuery } from "@/features/service/serviceDetailsApi";
import Layout from "@/layouts/default";
import Head from "next/head";
import { useRouter } from "next/router";
import LightNavbar from "../light-navbar";

function PageServiceDetails() {
  const router = useRouter();

  // Get the query parameter from the URL
  const { id } = router.query;
  // console.log("keyword", id);
  const { data, isLoading, isError, isSuccess, error } =
    useGetServiceDetailsQuery(id);
  const serviceDetails = data?.data;
  console.log("serviceDetails", data);
  return (
    <>
      <Head>
        <title>Createabit - Services</title>
      </Head>
      <Loader />
      <LightNavbar></LightNavbar>
      <main>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <div className="service">
            <div className="serviceDetails">
              <div>
                <img
                  src={`https://createabit-backend.onrender.com/${serviceDetails?.image}`}
                  alt=""
                />
              </div>
              <div>
                <h2>{serviceDetails?.title}</h2>
                <p className="mt-8">{serviceDetails?.text1}</p> <br />
                <p>{serviceDetails?.text2}</p>
              </div>
            </div>

            <div className="serviceDetails-title">
              <h2>{serviceDetails?.question}</h2>
              <div>
                <div className="serviceDetails-feature">
                  <p className="shadow-lg p-4 rounded-lg">
                    {serviceDetails?.shortText1}
                  </p>
                  <p className="shadow-lg p-4 rounded-lg">
                    {serviceDetails?.shortText2}
                  </p>
                </div>
                <div className="serviceDetails-feature">
                  <p className="shadow-lg p-4 rounded-lg">
                    {serviceDetails?.shortText3}
                  </p>
                  <p className="shadow-lg p-4 rounded-lg">
                    {serviceDetails?.shortText4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
}

PageServiceDetails.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageServiceDetails;
