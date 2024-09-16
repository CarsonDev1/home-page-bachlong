/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Section from '@/app/components/Section';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import Container from '@/app/components/Container';

const DetailPage = () => {
    const { name } = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className='pt-32'>
            <Section>
                <Container>
                    {/* <div className="container">
                        <h1 className="text-3xl font-bold">Detail Page</h1>
                        <p className="mt-4">You are viewing the details of: {name}</p>
                    </div> */}
                    <div className='sec-com'>
                        <div className='flex flex-col md:flex-row gap-8'>
                            <div className='flex-shrink-0 w-full md:w-2/4'>
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
                                        <div className='w-full h-[350px] flex justify-center items-center'>
                                            <Image
                                                src='/product-01.webp'
                                                layout='fill'
                                                objectFit='cover'
                                                alt='product-01'
                                                className='rounded-lg'
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className='w-full h-[350px] flex justify-center items-center'>
                                            <Image
                                                src='/product-02.webp'
                                                layout='fill'
                                                objectFit='cover'
                                                alt='product-01'
                                                className='rounded-lg'
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
                                            layout='fill'
                                            objectFit='cover'
                                            alt='product-01'
                                            className='rounded-lg'
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src='/product-02.webp'
                                            layout='fill'
                                            objectFit='cover'
                                            alt='product-01'
                                            className='rounded-lg'
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className='w-full md:w-2/3 flex flex-col gap-2'>
                                <h1 className='text-3xl text-[#00529C] font-bold mb-4'>{name}</h1>
                                <div className='flex items-center gap-1'>

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
                    </div>
                </Container>
            </Section>
        </div>
    );
}

export default DetailPage;
