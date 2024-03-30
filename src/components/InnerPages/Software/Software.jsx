import Link from "next/link";
//= Data
import data from "@/data/Showcases/interactive-center-horizontal.json";

function Software() {
  function handleMouseEnter(event) {
    var tab_id = event.currentTarget.getAttribute("data-tab");

    document.querySelectorAll(".links-text li").forEach((el) => {
      el.classList.remove("current");
      el.classList.add("no-active");
    });
    event.currentTarget.classList.add("current");
    event.currentTarget.classList.remove("no-active");

    document
      .querySelectorAll(".links-img .img")
      .forEach((el) => el.classList.remove("current"));
    document.querySelector("#" + tab_id).classList.add("current");

    if (event.currentTarget.classList.contains("current")) return false;
  }

  function handleMouseLeave() {
    document
      .querySelectorAll(".links-text li")
      .forEach((el) => el.classList.remove("current"));
    document
      .querySelectorAll(".links-img .img")
      .forEach((el) => el.classList.remove("current"));
    document
      .querySelectorAll(".links-text li")
      .forEach((el) => el.classList.remove("no-active"));
  }

  return (
    <section className="inter-links-center horizontal section-padding d-flex align-items-center">
      <div className="container-xxl">
        <div style={{ marginTop: "170px" }}>
          <h3 className="text text-center ">
            Empowering Business Across Industries
          </h3>
          <p className="text-center">
            At CreateABit Corp, we pride ourselves on serving diverse industries
            with cutting-edge technology solutions and innovative crevice
            display products. Whether you are just starting your business
            journey or aiming to expand and grow your existing enterprise, we
            are here to support you every step of the way. “”
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="links-text d-flex justify-content-center">
              <ul className="rest">
                {data.map((item) => (
                  <li
                    data-tab={`tab-${item.id}`}
                    key={item.id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h2>
                      <span className="num">{item.number}.</span>
                      <Link href="/dark/restaurant-power">
                        <span className="tag sub-title">{item.type}</span>{" "}
                        <span className="text">{item.title}</span>
                      </Link>
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="links-img">
        {data.map((item) => (
          <div className="img" id={`tab-${item.id}`} key={item.id}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Software;
