/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Section from '@/app/components/Section';
import Link from 'next/link';

const slidesData = [
    {
        tabs: [
            { label: 'Tất cả iPhone', contentHeader: 'IPHONE DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPhone 16 Series', contentHeader: 'IPHONE DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPhone 15 Series', contentHeader: 'IPHONE DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPhone 14 Series', contentHeader: 'IPHONE DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPhone 13 Series', contentHeader: 'IPHONE DẪN ĐẦU GIÁ RẺ' }
        ],
        content: Array.from({ length: 10 }).map((_, index) => ({
            name: `iPhone ${index + 1}`,
            image: `/product-01.webp`,
            price: `${(index + 1) * 1000000} VND`
        }))
    },
    {
        tabs: [
            { label: 'Tất cả SamSung', contentHeader: 'SAMSUNG DẪN ĐẦU GIÁ RẺ' },
            { label: 'Galaxy S24 Series', contentHeader: 'SAMSUNG DẪN ĐẦU GIÁ RẺ' },
            { label: 'Galaxy S23 Series', contentHeader: 'SAMSUNG DẪN ĐẦU GIÁ RẺ' },
            { label: 'Galaxy S22 Series', contentHeader: 'SAMSUNG DẪN ĐẦU GIÁ RẺ' },
            { label: 'Galaxy S21 Series', contentHeader: 'SAMSUNG DẪN ĐẦU GIÁ RẺ' }
        ],
        content: Array.from({ length: 10 }).map((_, index) => ({
            name: `SamSung ${index + 1}`,
            image: `/product-02.webp`,
            price: `${(index + 1) * 1000000} VND`
        }))
    }
];

const Category = () => {
    const [loading, setLoading] = useState(Array(slidesData.length).fill(false));

    const renderSwiperSlides = (products: Array<{ name: string, image: string, price: string }>) => (
        products.map((product, index) => (
            <Link href={`/detail/${product.name}`} key={index}>
                <div
                    className='bg-white rounded-lg shadow-md p-4 h-full flex flex-col justify-between transition-transform duration-300 ease-in-out relative group border border-transparent hover:border-primary'
                >
                    <Image src='/frame-product.png' width={500} height={100} alt='frame-product' className='absolute w-full top-8 sm:-top-8 md:-top-2 xl:top-8 left-0 z-10' />
                    <div className='relative pb-56'>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                            className='w-full absolute top-0 left-0 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105'
                        />
                    </div>
                    <div className='z-10'>
                        <h3 className='text-lg font-semibold mt-2'>{product.name}</h3>
                        <p className='text-red-500 font-bold text-xl'>{product.price}</p>
                    </div>
                </div>
            </Link>
        ))
    );

    const renderSwiper = (index: number) => {
        const { tabs, content } = slidesData[index];
        const [currentTab, setCurrentTab] = useState(0);
        const products = content;

        return (
            <div className='w-full flex flex-col gap-4 bg-[#fffbe6] p-3'>
                <div className='flex justify-between items-center w-full h-full p-2 lg:p-4 rounded-lg'>
                    <span className='text-xs md:text-sm lg:text-xl font-semibold w-2/3 md:w-1/2'>{tabs[currentTab].contentHeader}</span>
                    <div className='relative flex justify-end overflow-hidden w-3/4 lg:w-full'>
                        <div className="hidden lg:flex flex-wrap items-center gap-4">
                            {tabs.map((item, tabIndex) => (
                                <button
                                    key={tabIndex}
                                    className={`py-2 px-4 rounded-full border ${currentTab === tabIndex ? 'border-primary' : 'border-slate-200 text-gray-800'}`}
                                    onClick={() => {
                                        setLoading(prev => {
                                            const newLoading = [...prev];
                                            newLoading[index] = true;
                                            return newLoading;
                                        });
                                        setTimeout(() => {
                                            setCurrentTab(tabIndex);
                                            setLoading(prev => {
                                                const newLoading = [...prev];
                                                newLoading[index] = false;
                                                return newLoading;
                                            });
                                        }, 500);
                                    }}
                                >
                                    <span className='text-xs lg:text-sm'>{item.label}</span>
                                </button>
                            ))}
                        </div>
                        <div className="lg:hidden w-3/4">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView='auto'
                                speed={1000}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.2,
                                    },
                                    676: {
                                        slidesPerView: 2.2,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {tabs.map((item, tabIndex) => (
                                    <SwiperSlide key={tabIndex}>
                                        <button
                                            className={`py-1 md:py-2 px-2 md:px-4 rounded-full border ${currentTab === tabIndex ? 'border-primary' : 'border-slate-200 text-gray-800'}`}
                                            onClick={() => {
                                                setLoading(prev => {
                                                    const newLoading = [...prev];
                                                    newLoading[index] = true;
                                                    return newLoading;
                                                });
                                                setTimeout(() => {
                                                    setCurrentTab(tabIndex);
                                                    setLoading(prev => {
                                                        const newLoading = [...prev];
                                                        newLoading[index] = false;
                                                        return newLoading;
                                                    });
                                                }, 500);
                                            }}
                                        >
                                            <span className='text-[10px] lg:text-sm'>{item.label}</span>
                                        </button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                {loading[index] ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-16 h-16 border-4 border-t-4 border-t-yellow-400 border-gray-200 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={'auto'}
                        breakpoints={{
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 25,
                            },
                        }}
                        className='w-full h-full'
                        speed={1000}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {renderSwiperSlides(products).map((slide, slideIndex) => (
                            <SwiperSlide key={slideIndex}>
                                {slide}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        );
    };

    return (
        <div>
            <Image src='/xakho.gif' width={1820} height={1000} alt='xakho' className='w-full h-full rounded-tl-md rounded-tr-md object-cover' />
            <div className='flex flex-col gap-4 md:gap-7 lg:gap-10 items-center'>
                {slidesData.map((_, index) => renderSwiper(index))}
            </div>
            <Section>
                <div className=''>
                    <h3 className='mb-2 text-xl font-semibold'>KHUYẾN MÃI HOT</h3>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={'auto'}
                        breakpoints={{
                            400: {
                                slidesPerView: 2.5,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className='w-full'
                        speed={1000}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        <SwiperSlide>
                            <Image src='/banner-ad-01.jpg' width={1000} height={900} alt='banner-ad-01' className='object-cover w-full h-full block rounded-xl' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='/banner-ad-02.png' width={1000} height={900} alt='banner-ad-02' className='object-cover w-full h-full block rounded-xl' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='/banner-ad-03.png' width={1000} height={900} alt='banner-ad-03' className='object-cover w-full h-full block rounded-xl' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='/banner-ad-01.jpg' width={1000} height={900} alt='banner-ad-03' className='object-cover w-full h-full block rounded-xl' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Section>
            <div className=''>
                <h3 className='text-xl font-semibold mb-3'>ƯU ĐÃI THANH TOÁN</h3>
                <Image src='/thanks.png' width={1820} height={1000} alt='thanks' />
            </div>
        </div>
    );
};

export default Category;
