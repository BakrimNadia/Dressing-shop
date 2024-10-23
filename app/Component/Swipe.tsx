import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Swipe() {
  return (
    <div className="bg-white">
      <div className="mt-10 relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true} // Activer la navigation (flèches)
          pagination={{ clickable: true }} // Pagination avec points
          className="h-100 w-150 border-radius-2"
        >
          <SwiperSlide>
            <img
              src="images/les-robes.png"
              alt="robe"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/sacs.png"
              alt="sacs"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/bijou2.png"
              alt="bijou"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        {/* Flèches de navigation */}
        <div className="swiper-button-prev" style={{ color: '#000' }}></div>
        <div className="swiper-button-next" style={{ color: '#000' }}></div>
      </div>
    </div>
  );
}
