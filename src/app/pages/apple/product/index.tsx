/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import 'swiper/css';

const slidesData = [
    {
        tabs: [
            { label: 'iPhone 16 Series', contentHeader: 'IPHONE DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPhone 15 Series', contentHeader: 'IPHONE DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPhone 14 Series', contentHeader: 'IPHONE DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPhone 13 Series', contentHeader: 'IPHONE DẪN ĐẦU GIÁ RẺ' }
        ],
        content: Array.from({ length: 10 }).map((_, index) => ({
            name: `iPhone ${index + 1}`,
            image: `/apple/product-iphone.png`,
            price: `${(index + 1) * 1000000} VND`
        }))
    },
    {
        tabs: [
            { label: 'iPad Pro', contentHeader: 'IPAD DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPad Air', contentHeader: 'IPAD DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPad Mini', contentHeader: 'IPAD DẪN ĐẦU GIÁ RẺ' },
            { label: 'iPad', contentHeader: 'IPAD DẪN ĐẦU GIÁ RẺ' }
        ],
        content: Array.from({ length: 10 }).map((_, index) => ({
            name: `iPad ${index + 1}`,
            image: `/apple/product-ipad.png`,
            price: `${(index + 1) * 1000000} VND`
        }))
    },
    {
        tabs: [
            { label: 'Apple Watch Series 8', contentHeader: 'WATCH DẪN ĐẦU GIÁ RẺ' },
            { label: 'Apple Watch SE', contentHeader: 'WATCH DẪN ĐẦU GIÁ RẺ' },
            { label: 'Apple Watch Ultra', contentHeader: 'WATCH DẪN ĐẦU GIÁ RẺ' },
            { label: 'Apple Watch Series 7', contentHeader: 'WATCH DẪN ĐẦU GIÁ RẺ' }
        ],
        content: Array.from({ length: 10 }).map((_, index) => ({
            name: `Watch ${index + 1}`,
            image: `/apple/product-watch.jpg`,
            price: `${(index + 1) * 1000000} VND`
        }))
    },
    {
        tabs: [
            { label: 'MacBook Air', contentHeader: 'MAC DẪN ĐẦU GIÁ RẺ' },
            { label: 'MacBook Pro', contentHeader: 'MAC DẪN ĐẦU GIÁ RẺ' },
            { label: 'iMac', contentHeader: 'MAC DẪN ĐẦU GIÁ RẺ' },
            { label: 'Mac Mini', contentHeader: 'MAC DẪN ĐẦU GIÁ RẺ' }
        ],
        content: Array.from({ length: 10 }).map((_, index) => ({
            name: `Mac ${index + 1}`,
            image: `/apple/product-macbook.png`,
            price: `${(index + 1) * 1000000} VND`
        }))
    },
    {
        tabs: [
            { label: 'AirPods Pro', contentHeader: 'AIRPODS DẪN ĐẦU GIÁ RẺ' },
            { label: 'AirPods 2', contentHeader: 'AIRPODS DẪN ĐẦU GIÁ RẺ' },
            { label: 'AirPods Max', contentHeader: 'AIRPODS DẪN ĐẦU GIÁ RẺ' },
            { label: 'AirPods 3', contentHeader: 'AIRPODS DẪN ĐẦU GIÁ RẺ' }
        ],
        content: Array.from({ length: 10 }).map((_, index) => ({
            name: `AirPods ${index + 1}`,
            image: `/apple/product-airpod.jpeg`,
            price: `${(index + 1) * 1000000} VND`
        }))
    },
    {
        tabs: [
            { label: 'AirPods Pro', contentHeader: 'PHỤ KIỆN' },
            { label: 'Iphone', contentHeader: 'PHỤ KIỆN' },
            { label: 'Samsung', contentHeader: 'PHỤ KIỆN' },
            { label: 'Loa', contentHeader: 'PHỤ KIỆN' }
        ],
        content: Array.from({ length: 10 }).map((_, index) => ({
            name: `AirPods ${index + 1}`,
            image: `/apple/product-airpod.jpeg`,
            price: `${(index + 1) * 1000000} VND`
        }))
    }
];

const ProductList = ({ productRefs }: { productRefs: React.MutableRefObject<Array<HTMLDivElement | null>> }) => {
    const [loading, setLoading] = useState(Array(slidesData.length).fill(false));
    const [deviceType, setDeviceType] = useState<string>('active');

    const handleDeviceTypeChange = (type: string) => {
        setDeviceType(type);
    };

    const renderSwiperSlides = (products: Array<{ name: string, image: string, price: string }>) => (
        products.map((product, index) => (
            <Link href={`/detail/${product.name}`} key={index}>
                <div
                    className='bg-white rounded-lg shadow-md p-4 h-full flex flex-col justify-between transition-transform duration-300 ease-in-out relative group border border-transparent hover:border-primary'
                >
                    <Image src='/frame-product.png' width={500} height={100} alt='frame-product' className='absolute w-full top-0 sm:-top-6 md:-top-2 xl:top-8 left-0 z-10' />
                    <div className='relative pb-64 md:pb-60 lg:pb-56'>
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
            <div className='w-full flex flex-col gap-4' ref={(el: HTMLDivElement | null) => { if (el) productRefs.current[index] = el; }}>
                <Image src={`/apple/product-banner-0${index + 1}.png`} width={1820} height={1200} alt={`product-banner-${index + 1}`} />
                <div className='flex justify-between items-center w-full h-full p-2 lg:p-4 rounded-lg'>
                    <div className='relative flex overflow-hidden w-full'>
                        <div className="hidden lg:flex flex-wrap items-center gap-4">
                            {tabs.map((item, tabIndex) => (
                                <button
                                    key={tabIndex}
                                    className={`py-1 md:py-2 px-2 md:px-4 w-full lg:w-fit rounded-full border ${currentTab === tabIndex ? 'bg-primary text-gray-900' : 'border-slate-200 text-primary'}`}
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
                        <div className="lg:hidden w-full">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView='auto'
                                speed={1000}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2.5,
                                    },
                                    676: {
                                        slidesPerView: 4,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {tabs.map((item, tabIndex) => (
                                    <SwiperSlide key={tabIndex}>
                                        <button
                                            className={`py-1 md:py-2 px-2 md:px-4 w-full rounded-full border ${currentTab === tabIndex ? 'bg-primary text-gray-900' : 'border-slate-200 text-primary'}`}
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
                                            <span className='text-xs font-semibold lg:text-sm'>{item.label}</span>
                                        </button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 justify-start text-white">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="active"
                            checked={deviceType === 'active'}
                            onChange={() => handleDeviceTypeChange('active')}
                            className="form-radio"
                        />
                        <span>Máy Active</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="online"
                            checked={deviceType === 'online'}
                            onChange={() => handleDeviceTypeChange('online')}
                            className="form-radio"
                        />
                        <span>Máy Active Online</span>
                    </label>
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
                            375: {
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
        <Section>
            <Container>
                <div className='flex flex-col gap-4 md:gap-7 lg:gap-10 items-center'>
                    {slidesData.map((_, index) => renderSwiper(index))}
                </div>
            </Container>
        </Section>
    );
};

export default ProductList;
