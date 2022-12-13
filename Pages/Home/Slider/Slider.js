import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slider({ project }) {
    
    const { imgCollection} = project
    return (
        <>
            <Swiper
               pagination = {true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    imgCollection?.map((collection, index) => <SwiperSlide
                    key={index}>
                      <img src={collection} className='lg:h-80 h-64 rounded-lg border-4 border-purple-300 ' alt="" />
                    </SwiperSlide>)
               }
            </Swiper>
        </>
    );
}