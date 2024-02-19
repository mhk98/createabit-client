import Image from "next/image";
import abc from "../../../../images/abc.jpg";

function WhoWeAre() {
  return (
    <div className="container">
      <h2 className="" style={{ marginTop: "160px" }}>
        WHO WE ARE
      </h2>
      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        CreateAbit designs is a renowned name in the digital world. We are a
        reputed marketing and branding agency based in Washington DC metro area.
        Our extensive history, rich experience, and excellent track record make
        us a more reliable choice when it comes to designing and marketing
        services.
      </p>
      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        We aim to make your online presence better which is no less than a
        necessity these days. In this day and age, where technology has
        takeover, trends have significantly changed. No matter how big small
        your business is, you have to maintain your repute online. Building a
        strong presence and a positive image about your business is crucial to
        your success and that’s what we are here for.
      </p>

      <h2 className="" style={{ marginTop: "60px" }}>
        WE DO
      </h2>
      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        We know how important it is to keep the audiences involved and how to
        maintain their interest in what you do. We ensure the provision of best
        services that can provide you with the fruitful outcomes and ultimate
        success for your business. Our team of experts comprises top designers,
        market analysis, social media managers, web developers, software
        architects and application developers. We are equipped with state of the
        art technology and each of our team members is highly-qualified and
        experienced.
      </p>
      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        We provide top-notch services to all our clients and satisfaction is
        guaranteed here. Whether you need a new website with appealing design
        and easy to use interface or you are looking for assistance with SEO, we
        have got you covered. Likewise, you can come to us if you require
        professional assistance in database administration. In addition to
        these, we also offer a complete range of online marketing services. WHY
        USThere are countless companies offering a similar type of services but
        we are the best at what we do. Coming to us would save your time, money
        and energy. You will get flawless services and a hassle-free experience
        with us.
      </p>

      <div>
        <h2 style={{ marginTop: "60px" }}>Our Key Differentiators</h2>
        <p style={{ fontSize: "20px" }}>
          With a combined experience of over 5 years in the global IT industry,
          we have the expertise and the know-how to provide tailor-made
          solutions to enterprises worldwide.
        </p>
        <div className="flex justify-between gap-5 mt-80">
          <div>
            <Image src={abc} alt="" height={500} />
          </div>
          <div>
            <ul className=" ">
              <li className="mb-2" style={{ fontSize: "18px" }}>
                1. Expertise in executing customized project requirements to
                perfection (short-term as well as long-term)
              </li>
              <li className="mb-2" style={{ fontSize: "18px" }}>
                2. Fast project turnaround time
              </li>
              <li className="mb-2" style={{ fontSize: "18px" }}>
                3. Substantial cost savings
              </li>
              <li style={{ fontSize: "18px" }}>
                4. Strict adherence to International quality standards
              </li>
              <li className="mb-2" style={{ fontSize: "18px" }}>
                5. A dedicated Project Management, Transitions and Customer
                Engagement team available 24 hours a day
              </li>
              <li className="mb-2" style={{ fontSize: "18px" }}>
                6. Significant increase in business revenue and productivity
              </li>
              <li className="mb-2" style={{ fontSize: "18px" }}>
                7. Experience in serving global customers for over 12 years
              </li>
              <li className="mb-2" style={{ fontSize: "18px" }}>
                8. Vast domain knowledge and outsourcing expertise across
                multiple domains
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
