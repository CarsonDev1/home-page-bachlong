'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Container from '@/app/components/Container';
import Image from 'next/image';

const AppleProductsPage: React.FC = () => {

    const bannerSlides = [
        {
            image: '/apple/banner-01.png',
        },
        {
            image: '/apple/banner-02.png',
        },
        {
            image: '/apple/banner-03.png',
        },
        {
            image: '/apple/banner-04.png',
        },
        {
            image: '/apple/banner-05.png',
        },
        {
            image: '/apple/banner-06.png',
        },
        {
            image: '/apple/banner-07.png',
        },
        {
            image: '/apple/banner-08.png',
        },
        {
            image: '/apple/banner-09.png',
        },
        {
            image: '/apple/banner-10.png',
        }
    ];

    return (
        <div className="pt-48 md:pt-44">
            <Container>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 5000 }}
                    className="w-full h-[25vh] lg:h-[42vh] xl:h-[48vh] rounded-md overflow-hidden shadow-lg"
                >
                    {bannerSlides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            <Image
                                src={slide.image}
                                alt='banner-apple'
                                layout="fill"
                                className="w-full h-full object-fill xl:object-cover"
                                priority
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default AppleProductsPage;
