import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import Image from '../LazyLoadImage/Image'
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Carousel = ({ data, loading }) => {
    const navigate = useNavigate();
    const { url } = useSelector(state => state.home);
    console.log('carousel');
    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };
    return (
        <div className="carousel">
            <div className="container">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3.5}
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
                    {!loading ? (
                        data?.map((item) => {
                            const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
                            return (
                                <SwiperSlide key={item.id} className="carouselItem">
                                    <div className="poster">
                                        <Image src={posterUrl} />
                                    </div>
                                </SwiperSlide>
                            )
                        })) : (
                            <div className="loadingSkeleton">
                                {skItem()}
                                {skItem()}
                                {skItem()}
                                {skItem()}
                                {skItem()}
                            </div>
                        )   
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Carousel