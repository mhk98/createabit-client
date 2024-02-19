import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import banner1 from "../../../../images/banner1.jpg";
import banner2 from "../../../../images/banner2.jpg";
import banner3 from "../../../../images/banner3.jpg";

// Install the Autoplay module
SwiperCore.use([Autoplay]);

const SwiperSlider = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000, // Set the auto-slide delay in milliseconds (3 seconds in this example)
        disableOnInteraction: false, // Allow manual navigation while auto-sliding
      }}
    >
      <SwiperSlide>
        <Image src={banner1} alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner2} alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner3} alt="Banner 3" />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default SwiperSlider;
