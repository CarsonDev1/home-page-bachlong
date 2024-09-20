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

const Banner: React.FC = () => {

    const bannerSlides = [
        {
            image: '/sam-sung/banner-01.jpg',
        },
        {
            image: '/sam-sung/banner-02.jpg',
        },
        {
            image: '/sam-sung/banner-03.jpg',
        },
        {
            image: '/sam-sung/banner-04.jpg',
        },
        {
            image: '/sam-sung/banner-05.png',
        },
        {
            image: '/sam-sung/banner-06.png',
        },
        {
            image: '/sam-sung/banner-07.jpg',
        },
        {
            image: '/sam-sung/banner-08.png',
        },
        {
            image: '/sam-sung/banner-09.png',
        }
    ];

    return (
        <div className="pt-48 md:pt-44">
            <div className='w-full h-2/4 md:h-28 py-0 md:py-2 bg-black'>
                <Image src='/sam-sung/banner-header-samsung.png' width={1820} height={1000} alt='banner-header-samsung' className='w-full h-full block object-contain' />
            </div>
            <Container>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 5000 }}
                    className="w-full h-[25vh] lg:h-[42vh] xl:h-[48vh] rounded-md overflow-hidden shadow-lg mt-4"
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

export default Banner;
