/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Section from '@/app/components/Section';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import Container from '@/app/components/Container';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const DetailPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className='pt-32'>
            <Section>
                <Container>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className=' w-full md:w-1/2 border border-slate-300 rounded-lg p-3'>
                            <Swiper
                                spaceBetween={10}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Thumbs]}
                                className='mb-2 main-swiper'
                            >
                                <SwiperSlide >
                                    <div className='w-full h-full flex justify-center items-center'>
                                        <Image
                                            src='/product-01.webp'
                                            alt='product-01'
                                            width={1820}
                                            height={1200}
                                            className='rounded-lg w-full h-full'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className='w-full h-full flex justify-center items-center'>
                                        <Image
                                            src='/product-02.webp'
                                            alt='product-02'
                                            width={1820}
                                            height={1200}
                                            className='rounded-lg w-full h-full'
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[Thumbs]}
                                className='mt-2 thumb-swiper'
                            >
                                <SwiperSlide>
                                    <Image
                                        src='/product-01.webp'
                                        width={500}
                                        height={500}
                                        alt='product-01'
                                        className='rounded-lg w-full block object-cover'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src='/product-02.webp'
                                        width={500}
                                        height={500}
                                        alt='product-01'
                                        className='rounded-lg w-full block object-cover'
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='w-full md:w-2/3 flex flex-col gap-4'>
                            <h1 className='text-xl font-bold mb-4'>iPhone 15 Pro Max 512GB Chính Hãng 99%</h1>
                            <div className='flex items-center gap-4'>
                                <div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md'>
                                    <span>256GB</span>
                                    <span>27.000.000 VNĐ</span>
                                </div>
                                <div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md'>
                                    <span>256GB</span>
                                    <span>27.000.000 VNĐ</span>
                                </div>
                            </div>
                            <h1 className='text-xl font-bold mb-4'>Chọn màu để xem giá và chi nhánh có hàng</h1>
                            <div className='flex items-center gap-4'>
                                <div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md'>
                                    <span>256GB</span>
                                    <span>27.000.000 VNĐ</span>
                                </div>
                                <div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md'>
                                    <span>256GB</span>
                                    <span>27.000.000 VNĐ</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='text-gray-600 line-through text-2xl'>123123</p>
                                <p className='text-rose-600 font-semibold text-2xl'>
                                    asdasdsa
                                </p>
                            </div>
                            <p className='text-[#00528C] italic font-semibold w-2/3'>
                                (chưa bao gồm chi phí lăn bánh – Hỗ trợ chuyển đổi biển số trắng sang biển số vàng – Thu
                                xe cũ lên đời xe mới)
                            </p>
                            <div className='flex flex-col gap-4 mt-2'>
                                <div className='flex items-center gap-1'>
                                    <p>
                                    </p>
                                </div>

                                <Image src='/home/detail.png' width={550} height={500} alt='detail' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>Mô tả</h2>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

export default DetailPage;
