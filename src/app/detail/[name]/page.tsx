/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
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
import { LuTicket } from 'react-icons/lu';
import { MdOutlineAddBox } from 'react-icons/md';
import Link from 'next/link';

const DetailPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="pt-32">
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row md:gap-8 gap-4">
            <div className="w-full h-full lg:w-[60%] flex flex-col gap-4 relative">
              <div className="border border-slate-300 rounded-lg p-3">
                <Swiper
                  spaceBetween={10}
                  navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Thumbs]}
                  className="mb-2 main-swiper"
                >
                  <SwiperSlide>
                    <div className="w-full h-96 flex justify-center items-center">
                      <iframe
                        width="1128"
                        height="635"
                        src="https://www.youtube.com/embed/eDqfg_LexCQ?autoplay=1&mute=1"
                        title="Introducing iPhone 16 Pro | Apple"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="object-contain"
                      ></iframe>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-96 flex justify-center items-center">
                      <Image
                        src="/product-02.webp"
                        alt="product-02"
                        width={1820}
                        height={1200}
                        className="rounded-lg w-full h-96 object-contain"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-96 flex justify-center items-center">
                      <Image
                        src="/product-02.webp"
                        alt="product-02"
                        width={1820}
                        height={1200}
                        className="rounded-lg w-full h-96 object-contain"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-96 flex justify-center items-center">
                      <Image
                        src="/product-02.webp"
                        alt="product-02"
                        width={1820}
                        height={1200}
                        className="rounded-lg w-full h-96 object-contain"
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
                  className="mt-2 thumb-swiper"
                >
                  <SwiperSlide>
                    <Image
                      src="/product-01.webp"
                      width={500}
                      height={500}
                      alt="product-01"
                      className="rounded-lg w-full h-full block object-contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/product-02.webp"
                      width={500}
                      height={500}
                      alt="product-01"
                      className="rounded-lg w-full h-full block object-contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/product-02.webp"
                      width={500}
                      height={500}
                      alt="product-01"
                      className="rounded-lg w-full h-full block object-contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/product-02.webp"
                      width={500}
                      height={500}
                      alt="product-01"
                      className="rounded-lg w-full h-full block object-contain"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="p-3 bg-white border border-slate-200 w-full md:w-1/2">
                  <h2 className="text-sm font-semibold mb-2">
                    Thông tin sản phẩm
                  </h2>
                  <span className="text-xs">
                    Máy mới 100% , chính hãng Apple Việt Nam. Bạch Long Mobile
                    hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của
                    Apple Việt Nam
                  </span>
                  <span className="text-xs">
                    Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C
                  </span>
                  <span className="text-xs">
                    1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo
                    hành 12 tháng tại trung tâm bảo hành chính hãng Apple
                  </span>
                  <span className="text-xs">Giá sản phẩm đã bao gồm VAT</span>
                </div>
                <div className="p-3 bg-white border flex flex-col gap-1 border-slate-200 w-full md:w-1/2">
                  <h2 className="text-sm font-semibold mb-2">
                    Có 7 cửa hàng có sản phẩm
                  </h2>
                  <span className="text-sm">
                    1900.63.64.69 - 136 Trần Phú, P.4, Q.5
                  </span>
                  <span className="text-sm">
                    1900.63.64.69 - 136 Trần Phú, P.4, Q.5
                  </span>
                  <span className="text-sm">
                    1900.63.64.69 - 136 Trần Phú, P.4, Q.5
                  </span>
                  <span className="text-sm">
                    1900.63.64.69 - 136 Trần Phú, P.4, Q.5
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-4 sticky top-16 self-start">
              <h1 className="text-xl font-bold mb-4">
                iPhone 16 Pro 512GB Chính Hãng 99%
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md">
                  <span className="text-sm md:text-base">256GB</span>
                  <span className="text-sm md:text-base">27.000.000 VNĐ</span>
                </div>
                <div className="flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 border-primary overflow-hidden">
                  <div className="custom-rounded bg-primary absolute top-0 -right-1 w-7 h-7 flex items-center justify-center">
                    <FaCheck className="flex items-center justify-center size-3 text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm md:text-base">512GB</span>
                    <span className="text-sm md:text-base">27.000.000 VNĐ</span>
                  </div>
                </div>
              </div>
              <h1 className="text-xl font-bold mb-4">
                Chọn màu để xem giá và chi nhánh có hàng
              </h1>
              <div className="flex items-center flex-wrap gap-4">
                <div className="flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 border-primary overflow-hidden">
                  <div className="custom-rounded bg-primary absolute top-0 -right-1 w-7 h-7 flex items-center justify-center">
                    <FaCheck className="flex items-center justify-center size-3 text-white" />
                  </div>
                  <Image
                    src="/product-01.webp"
                    width={40}
                    height={40}
                    alt="product-01"
                    className="size-7 md:size-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base">
                      Natural Titanium
                    </span>
                    <span className="text-sm md:text-base">27.000.000 VNĐ</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 overflow-hidden">
                  <Image
                    src="/product-01.webp"
                    width={40}
                    height={40}
                    alt="product-01"
                    className="size-7 md:size-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base">
                      Natural Titanium
                    </span>
                    <span className="text-sm md:text-base">27.000.000 VNĐ</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 overflow-hidden">
                  <Image
                    src="/product-01.webp"
                    width={40}
                    height={40}
                    alt="product-01"
                    className="size-7 md:size-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base">
                      Natural Titanium
                    </span>
                    <span className="text-sm md:text-base">27.000.000 VNĐ</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 overflow-hidden">
                  <Image
                    src="/product-01.webp"
                    width={40}
                    height={40}
                    alt="product-01"
                    className="size-7 md:size-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base">
                      Natural Titanium
                    </span>
                    <span className="text-sm md:text-base">27.000.000 VNĐ</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 relative p-4 bg-slate-100 rounded-md">
                <Image
                  src="/payment.webp"
                  width={1200}
                  height={1000}
                  alt="payment"
                  className="absolute w-full h-full top-0 left-0 z-10 rounded-md"
                />
                <div className="relative z-20">
                  <p className="text-white line-through text-2xl">
                    28.990.000 VNĐ
                  </p>
                </div>
                <div className="flex items-center gap-4 z-20">
                  <div className="flex flex-col items-center gap-1 py-2 px-6 rounded-md bg-white w-1/2 relative border-2 border-primary overflow-hidden">
                    <div className="custom-rounded bg-primary absolute top-0 -right-1 w-7 h-7 flex items-center justify-center">
                      <FaCheck className="flex items-center justify-center size-3 text-white" />
                    </div>
                    <span className="text-sm md:text-base">Mua BHTD</span>
                    <span className="text-sm md:text-base">27.000.000 VNĐ</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md bg-white w-1/2">
                    <span className="text-sm md:text-base">Mua thẳng</span>
                    <span className="text-sm md:text-base">27.000.000 VNĐ</span>
                  </div>
                </div>
              </div>
              <Link href="https://bachlongmobile.com/iphone-16-series/">
                <Image
                  src="/giovang.jpg"
                  width={800}
                  height={500}
                  alt="giovang"
                  className="rounded-md"
                />
              </Link>
              <div className="border border-slate-200 rounded-md flex flex-col shadow-lg">
                <div className="rounded-tl-md rounded-tr-md bg-gradient-to-r from-yellow-400 to-red-600 text-white p-2 text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/fire.gif"
                      width={30}
                      height={30}
                      alt="fire-gif"
                    />
                    <span className="">KHUYẾN MÃI HOT</span>
                  </div>
                </div>
                <div className="p-5 text-sm bg-gray-50 rounded-md shadow-md">
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit">
                        1
                      </span>
                      <span>
                        <span className="font-bold">[Tháng 9]:</span> TẾT APPLE
                        - TẾT LỚN CHƠI LỚN: Cơ hội trúng iPhone 16 trị giá hơn{' '}
                        {''}
                        <span className="text-red-600 font-bold">
                          21.000.000đ
                        </span>{' '}
                        hoặc trạm sạc PISEN trị giá đến{' '}
                        <span className="text-red-600 font-bold">
                          5.000.000đ
                        </span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit">
                        2
                      </span>
                      <span>
                        <span className="font-bold">[Tháng 9]:</span> TẾT APPLE
                        - TẾT LỚN CHƠI LỚN: Cơ hội trúng iPhone 16 trị giá hơn{' '}
                        {''}
                        <span className="text-red-600 font-bold">
                          21.000.000đ
                        </span>{' '}
                        hoặc trạm sạc PISEN trị giá đến{' '}
                        <span className="text-red-600 font-bold">
                          5.000.000đ
                        </span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit">
                        3
                      </span>
                      <span>
                        <span className="font-bold">[Tháng 9]:</span> TẾT APPLE
                        - TẾT LỚN CHƠI LỚN: Cơ hội trúng iPhone 16 trị giá hơn{' '}
                        {''}
                        <span className="text-red-600 font-bold">
                          21.000.000đ
                        </span>{' '}
                        hoặc trạm sạc PISEN trị giá đến{' '}
                        <span className="text-red-600 font-bold">
                          5.000.000đ
                        </span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit">
                        4
                      </span>
                      <span>
                        <span className="font-bold">[Tháng 9]:</span> TẾT APPLE
                        - TẾT LỚN CHƠI LỚN: Cơ hội trúng iPhone 16 trị giá hơn{' '}
                        {''}
                        <span className="text-red-600 font-bold">
                          21.000.000đ
                        </span>{' '}
                        hoặc trạm sạc PISEN trị giá đến{' '}
                        <span className="text-red-600 font-bold">
                          5.000.000đ
                        </span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit">
                        5
                      </span>
                      <span>
                        <span className="font-bold">[Tháng 9]:</span> TẾT APPLE
                        - TẾT LỚN CHƠI LỚN: Cơ hội trúng iPhone 16 trị giá hơn{' '}
                        {''}
                        <span className="text-red-600 font-bold">
                          21.000.000đ
                        </span>{' '}
                        hoặc trạm sạc PISEN trị giá đến{' '}
                        <span className="text-red-600 font-bold">
                          5.000.000đ
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-slate-200 rounded-md flex flex-col shadow-lg">
                <div className="rounded-tl-md rounded-tr-md bg-black text-white p-3 text-lg font-semibold">
                  <div className="flex gap-2 items-center">
                    <LuTicket className="text-primary" />{' '}
                    <span className="text-primary">TIỆN ÍCH ĐỘC QUYỀN</span>
                  </div>
                </div>
                <div className="p-5 text-sm bg-gray-50 rounded-md shadow-md">
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="font-bold mr-2">✔️</span>
                      <span>
                        Giảm thêm{' '}
                        <span className="font-bold text-red-600">
                          1.200.000đ
                        </span>{' '}
                        khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.
                      </span>
                    </div>
                    <div className="flex">
                      <span className="font-bold mr-2">✔️</span>
                      <span>
                        Giảm thêm{' '}
                        <span className="font-bold text-red-600">
                          1.200.000đ
                        </span>{' '}
                        khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.
                      </span>
                    </div>
                    <div className="flex">
                      <span className="font-bold mr-2">✔️</span>
                      <span>
                        Giảm thêm{' '}
                        <span className="font-bold text-red-600">
                          1.200.000đ
                        </span>{' '}
                        khi mua Gói Bảo Hành Toàn Diện - Lỗi Đổi NGAY.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="relative w-2/3 h-16 px-4 rounded-md bg-red-600 isolation-auto z-10 border-2 border-red-500 before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:text-red-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-white bg-red-600 border border-red-500 rounded-lg shadow-sm gap-x-2 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1">
                  <span className="text-xl">Mua ngay</span>
                  <span>Giao hàng tận nơi hoặc tại cửa hàng</span>
                </button>
                <button className="relative w-1/3 h-16 px-4 rounded-md bg-white isolation-auto z-10 border-2 border-red-500 before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:bg-red-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-red-500 before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-red-600 border border-red-500 rounded-lg shadow-sm gap-x-2 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1 hover:text-white">
                  <FaCartPlus className="size-5" />
                  <span className="text-xs">Thêm vào giỏ hàng</span>
                </button>
              </div>
              <div className="flex gap-2 w-full">
                <button className="relative py-2 px-4 rounded-md bg-blue-600 isolation-auto z-10 border-2 border-blue before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:text-blue-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-white bg-blue-600 border border-blue-500 rounded-lg shadow-sm gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1 w-1/2">
                  <span className="text-xl">Trả góp 0%</span>
                  <span className="text-xs">Duyệt nhanh qua điện thoại</span>
                </button>
                <button className="relative py-2 px-4 rounded-md bg-blue-600 isolation-auto z-10 border-2 border-blue before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:text-blue-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-white bg-blue-600 border border-blue-500 rounded-lg shadow-sm gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1 w-1/2">
                  <span className="text-xl">Trả góp 0% qua thẻ</span>
                  <span className="text-xs">Visa, Master Card, JCB, AMEX</span>
                </button>
              </div>

              <div className="border border-slate-200 rounded-md flex flex-col shadow-lg">
                <div className="rounded-tl-md rounded-tr-md bg-slate-300 text-white p-3 text-lg font-semibold">
                  <div className="flex items-center gap-2 text-slate-800 font-bold">
                    <MdOutlineAddBox /> ƯU ĐÃI THÊM
                  </div>
                </div>
                <div className="p-5 text-sm bg-gray-50 rounded-md shadow-md">
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <span className="font-boldmr-2 shadow-lg h-fit text-red-500">
                        ➕
                      </span>
                      <span>
                        Ưu đãi khi mua kèm Apple Watch giảm{' '}
                        <span className="text-red-600 font-bold">
                          1.000.000đ
                        </span>
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-boldmr-2 shadow-lg h-fit text-red-500">
                        ➕
                      </span>
                      <span>
                        Ưu đãi khi mua kèm Macbook giảm{' '}
                        <span className="text-red-600 font-bold">500.000đ</span>
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-boldmr-2 shadow-lg h-fit text-red-500">
                        ➕
                      </span>
                      <span>
                        Ưu đãi khi mua kèm Airpord giảm{' '}
                        <span className="text-red-600 font-bold">
                          1.000.000đ
                        </span>
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-boldmr-2 shadow-lg h-fit text-red-500">
                        ➕
                      </span>
                      <span>
                        Ưu đãi khi mua kèm Ốp lưng giảm{' '}
                        <span className="text-red-600 font-bold">
                          1.000.000đ
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default DetailPage;
