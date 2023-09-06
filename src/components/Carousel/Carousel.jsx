import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import Image from '../LazyLoadImage/Image'
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Carousel = ({ data, loading }) => {
    const navigate = useNavigate();
    const { url } = useSelector(state => state.home);
    console.log('carousel');
    return (
        <div className="carousel">
            <div className="container">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    className="carouselItems"
                    modules={[Navigation]}
                    navigation
                    slidesPerGroup={5}
                    speed={600}
                    breakpoints={{
                        640: {
                          slidesPerView: 4,
                          spaceBetween: 15,
                        },
                        768: {
                          slidesPerView: 5,
                          spaceBetween: 20,
                        }
                      }}
                >
                    {
                        data?.map((item) => {
                            const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
                            return (
                                <SwiperSlide key={item.id} className="carouselItem">
                                    <div className="poster">
                                        <Image src={posterUrl} />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ... */}
                </Swiper>
            </div>
        </div>
    )
}

export default Carousel