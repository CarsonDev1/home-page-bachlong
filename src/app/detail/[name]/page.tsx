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
import { FaCartPlus, FaCheck } from 'react-icons/fa';

const DetailPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className='pt-32'>
            <Section>
                <Container>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className=' w-full h-full md:w-[60%] border border-slate-300 rounded-lg p-3'>
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
                                    <div className='w-full h-96 flex justify-center items-center'>
                                        <Image
                                            src='/product-01.webp'
                                            alt='product-01'
                                            width={1820}
                                            height={1200}
                                            className='rounded-lg w-full h-96 object-contain'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className='w-full h-96 flex justify-center items-center'>
                                        <Image
                                            src='/product-02.webp'
                                            alt='product-02'
                                            width={1820}
                                            height={1200}
                                            className='rounded-lg w-full h-96 object-contain'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className='w-full h-96 flex justify-center items-center'>
                                        <Image
                                            src='/product-02.webp'
                                            alt='product-02'
                                            width={1820}
                                            height={1200}
                                            className='rounded-lg w-full h-96 object-contain'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className='w-full h-96 flex justify-center items-center'>
                                        <Image
                                            src='/product-02.webp'
                                            alt='product-02'
                                            width={1820}
                                            height={1200}
                                            className='rounded-lg w-full h-96 object-contain'
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
                                <SwiperSlide>
                                    <Image
                                        src='/product-02.webp'
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
                        <div className='w-full md:w-1/2 flex flex-col gap-4'>
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
                            <div className='flex items-center flex-wrap gap-4'>
                                <div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md'>
                                    <span>256GB</span>
                                    <span>27.000.000 VNĐ</span>
                                </div>
                                <div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md'>
                                    <span>256GB</span>
                                    <span>27.000.000 VNĐ</span>
                                </div>
                                <div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md'>
                                    <span>256GB</span>
                                    <span>27.000.000 VNĐ</span>
                                </div>
                                <div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md'>
                                    <span>256GB</span>
                                    <span>27.000.000 VNĐ</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 relative p-4 bg-slate-100 rounded-md'>
                                <Image src='/payment.webp' width={1200} height={1000} alt='payment' className='absolute w-full h-full top-0 left-0 z-10 rounded-md' />
                                <div className='relative z-20'>
                                    <p className='text-white line-through text-2xl'>28.990.000 VNĐ</p>
                                </div>
                                <div className='flex items-center gap-4 z-20'>
                                    <div className='flex flex-col items-center gap-1 py-2 px-6 rounded-md bg-white w-1/2 relative border-2 border-primary overflow-hidden'>
                                        <div className='custom-rounded bg-primary absolute top-0 -right-1 w-7 h-7 flex items-center justify-center'>
                                            <FaCheck className='flex items-center justify-center size-3 text-white' />
                                        </div>
                                        <span>Mua BHTD</span>
                                        <span>27.000.000 VNĐ</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md bg-white w-1/2'>
                                        <span>Mua thẳng</span>
                                        <span>27.000.000 VNĐ</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <button
                                    className="relative w-3/4 h-16 px-4 rounded-md bg-red-600 isolation-auto z-10 border-2 border-white before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:text-red-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-white bg-red-600 border border-red-500 rounded-lg shadow-sm gap-x-2 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1"
                                >
                                    <span className='text-xl'>Mua ngay</span>
                                    <span>Giao hàng tận nơi hoặc tại cửa hàng</span>
                                </button>
                                <button
                                    className="relative w-1/4 h-16 px-4 rounded-md bg-white isolation-auto z-10 border-2 border-red-500 before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:bg-red-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-red-500 before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-red-600 border border-white rounded-lg shadow-sm gap-x-2 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1 hover:text-white"
                                >
                                    <FaCartPlus />
                                    <span className='text-sm'>Giỏ hàng</span>
                                </button>
                            </div>
                            <button
                                className="relative py-2 px-4 rounded-md bg-blue-600 isolation-auto z-10 border-2 border-white before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:text-blue-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-white bg-blue-600 border border-blue-500 rounded-lg shadow-sm gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1"
                            >
                                <span className='text-xl'>Trả góp 0%</span>
                            </button>


                            <div className='bg-white border border-slate-200 rounded-md flex flex-col'>
                                <div className='rounded-tl-md rounded-tr-md bg-black text-primary p-2'>
                                    <span className=''>[HOT] KHUYẾN MÃI ĐANG DIỄN RA</span>
                                </div>
                                <ul className='p-5 text-sm list-decimal'>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                </ul>
                            </div>
                            <div className='bg-white border border-slate-200 rounded-md flex flex-col'>
                                <div className='rounded-tl-md rounded-tr-md bg-black text-primary p-2'>
                                    <span className=''>[HOT] KHUYẾN MÃI ĐI KÈM</span>
                                </div>
                                <ul className='p-5 text-sm list-decimal'>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                </ul>
                            </div>
                            <div className='bg-white border border-slate-200 rounded-md flex flex-col'>
                                <div className='rounded-tl-md rounded-tr-md bg-black text-primary p-2'>
                                    <span className=''>[HOT] SẢN PHẨM ĐI KÈM</span>
                                </div>
                                <ul className='p-5 text-sm list-decimal'>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                    <li>Giảm thêm 1.000.000đ khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.</li>
                                </ul>
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
