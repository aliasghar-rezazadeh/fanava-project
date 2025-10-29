import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './Banner.css'; 

import banner1 from '../assets/images/banner/adsl-banner.webp';
import banner2 from '../assets/images/banner/tdlte-banner.webp';
import banner3 from '../assets/images/banner/fanava-banner.jpg';


const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        
        spaceBetween={0} // فاصله بین اسلایدها
        slidesPerView={1} // تعداد اسلاید قابل مشاهده
        navigation={true} // فعال کردن دکمه‌های قبل و بعد
        pagination={{ clickable: true }} // فعال کردن نقطه‌های پایین (صفحه‌بندی)
        loop={true} // تکرار اسلایدر
        autoplay={{
          delay: 9000, // زمان توقف روی هر اسلاید (9 ثانیه)
          disableOnInteraction: false, // ادامه پخش اتوماتیک بعد از کلیک کاربر
        }}
        className="mySwiper"
        >
        {/* اسلاید اول */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={banner1} alt="بنر ADSL" />
            
            <div className="text-overlay">
              <h2 className='text'>اینترنت پرسرعت +ADSL2</h2>
              <p className='text'>ارتباطی بی حد و مرز</p>
              <a href="#services" className="cta-button"> مشاهده تعرفه‌ها</a>
            </div>
          </div>
        </SwiperSlide>

        {/* اسلاید دوم */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={banner2} alt="بنر TD-LTE" />  
            <div className="text-overlay">
              <h2>اینترنت پرسرعت TD-LTE</h2>
              <p>رکورد سرعت را بشکنید</p>
              <a href="#services" className="cta-button">
                مشاهده تعرفه‌ها
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* اسلاید سوم */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={banner3} alt="بنر TD-LTE" />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;