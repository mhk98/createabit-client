import Image from "next/image";
import bar2 from "../../../../images/bar2.jpg";
import bar3 from "../../../../images/bar3.jpg";
import bar4 from "../../../../images/bar4.jpg";
import interactive_bar from "../../../../images/interactive_bar.jpg";

export default function Wow3() {
  return (
    <div className="container">
      <div>
        <div>
          <div className="wow1_content " style={{ margin: "120px 0px" }}>
            <Image className="wow1_image" src={interactive_bar} alt="" />
            <p style={{ padding: "30px", marginLeft: "80px" }}>
              Createabit interactive projection system can be projected on the
              normal floor, wall or window with any desired effect. It will show
              attractive effects by detecting people's actions on the projection
              screen. We provide professional service, tailored to your effects.
              We can even supply multiple display technology to make two or
              three projection sizes look like one projection image without any
              light gaps.
            </p>
          </div>
          <div className="wow1_content " style={{ margin: "120px 0px" }}>
            <Image className="wow1_image" src={interactive_bar} alt="" />
            <div style={{ padding: "30px", marginLeft: "80px" }}>
              <h3>Benefits</h3>
              <p>- Excite your customers with interactive bars</p>
              <p>
                - Create a unique talking point environment where customers
                order more
              </p>
              <p>
                - Keep customers engaged and entertained with games or ads in
                other areas and increase
              </p>
              <p>- Revenue by up to 20%</p>
              <p>- Increase revenues by renting your bar as media outlet</p>
            </div>
          </div>
        </div>
        <div className="wow1_content " style={{ margin: "120px 0px" }}>
          <Image className="wow1_image" src={bar2} alt="" />
          <div style={{ padding: "30px", marginLeft: "80px" }}>
            <h3>Application</h3>
            <h4>Interactive bar effect application</h4>
            <p>
              Creates more than 30 brilliant interactive effects which can give
              customer an unforgettable experience while drinking at the bar.
            </p>
          </div>
        </div>
        <div className="wow1_content " style={{ margin: "120px 0px" }}>
          <Image className="wow1_image" src={bar3} alt="" />
          <p style={{ padding: "30px", marginLeft: "80px" }}>
            Createabit interactive projection system can be projected on the
            normal floor, wall or window with any desired effect. It will show
            attractive effects by detecting people's actions on the projection
            screen. We provide professional service, tailored to your effects.
            We can even supply multiple display technology to make two or three
            projection sizes look like one projection image without any light
            gaps.
          </p>
        </div>
        <div className="wow1_content " style={{ margin: "50px 0px" }}>
          <Image className="wow1_image" src={bar4} alt="" />
          <div style={{ padding: "30px", marginRight: "150px" }}>
            <h3>Advantage:</h3>
            <li>Exciting to play and watch</li>
            <li> Move your body to play it’s magic!</li>
            <li>Easy and safe to use - It’s a complete virtual experience</li>
            <li>Large number of effects available</li>
            <li>Customer will never get bored</li>
            <li>Customizable to your needs</li>
            <li>Brand it, personalize it, build and design your own effects</li>
          </div>
        </div>
      </div>
    </div>
  );
}
