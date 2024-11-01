'use client';
import React, { useState } from 'react';
import Container from '../Container';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { RiSearch2Line } from 'react-icons/ri';
import { IoCartOutline, IoLocationOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { BsBoxSeam } from 'react-icons/bs';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { GiAutoRepair } from 'react-icons/gi';

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSearchClick = (e: React.MouseEvent<HTMLFormElement>) => {
		e.stopPropagation();
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			handleCloseModal();
		}
	};

	return (
		<div className='flex flex-col w-full fixed z-50 transition-all duration-300 ease-in-out bg-[#fff200]'>
			<Link href='https://bachlongmobile.com/iphone-16-series' className='bg-black'>
				<Container>
					<Image
						src='/header-top.webp'
						width={1820}
						height={48}
						alt='header-top'
						className='block w-full object-cover'
						quality={100}
					/>
				</Container>
			</Link>
			<div className='bg-[#fff200] relative z-20'>
				<Container>
					<div className='py-2 md:py-4 flex justify-between flex-wrap md:flex-row md:flex-nowrap items-center gap-0 md:gap-4'>
						<Link href='/'>
							<Image src='/logo.png' alt='logo' width={160} height={50} />
						</Link>
						<div className='items-center gap-1 bg-secondary p-3 rounded-md hidden xl:flex'>
							<MdMenu className='text-xl' />
							<span className='text-xs font-bold'>Danh mục</span>
						</div>
						<form
							className='w-full max-w-full relative z-50 flex-grow md:max-w-md lg:max-w-lg order-2 md:order-none'
							onClick={handleSearchClick}
						>
							<label
								htmlFor='default-search'
								className='sr-only mb-2 text-xs font-medium text-gray-900 dark:text-white'
							>
								Search
							</label>
							<div className='relative'>
								<input
									id='default-search'
									type='search'
									placeholder='Bạn cần tìm sản phẩm gì...'
									className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pr-16 text-base text-gray-900 focus:border-primary focus:outline-none focus:ring-primary lg:text-base xl:text-lg'
								/>
								<div className='absolute right-1 bottom-1/2 translate-y-1/2 px-4 py-2 rounded-md bg-[#0f172a]'>
									<RiSearch2Line className='text-[#fff200] text-xl md:text-lg lg:text-xl xl:text-2xl' />
								</div>
							</div>
							{isModalOpen && (
								<div className='bg-white absolute translate-y-2 z-50 w-full max-w-xl mx-auto rounded-lg shadow-lg animate-modalFadeIn'>
									<Image
										src='/modal-header.webp'
										alt='modal-header'
										width={700}
										height={500}
										className='w-full h-full object-cover'
									/>
								</div>
							)}
						</form>
						<div className='flex items-center gap-4'>
							<Link href='#' className='hidden lg:flex'>
								<div className='flex flex-col items-center'>
									<GiAutoRepair className='text-xl' />
									<span className='text-xs font-semibold'>Sửa chữa</span>
								</div>
							</Link>
							<Link href='#'>
								<div className='flex flex-col items-center'>
									<IoLocationOutline className='text-xl' />
									<span className='text-xs font-semibold'>Cửa hàng</span>
								</div>
							</Link>
							<Link href='#' className='hidden xl:flex'>
								<div className='flex flex-col items-center'>
									<BsBoxSeam className='text-xl' />
									<span className='text-xs font-semibold'>Tra cứu đơn</span>
								</div>
							</Link>
							<Link href='/cart'>
								<div className='flex flex-col items-center bg-transparent md:bg-secondary p-2 rounded-md relative'>
									<IoCartOutline className='text-xl' />
									<span className='text-xs font-semibold'>Giỏ hàng</span>
									<span className='absolute top-1 right-3.5 bg-red-500 text-white text-xs font-bold rounded-full size-4 flex items-center justify-center'>
										0
									</span>
								</div>
							</Link>
							<Link href='/profile' className='hidden lg:flex'>
								<div className='flex flex-col items-center bg-secondary p-2 rounded-md relative'>
									<IoPersonCircleOutline className='text-xl' />
									<span className='text-xs font-semibold'>Đăng nhập</span>
								</div>
							</Link>
						</div>
					</div>
				</Container>
				{isModalOpen && (
					<div
						className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-30'
						onClick={handleOutsideClick}
					></div>
				)}
			</div>
			<div className='bg-white border border-slate-200 shadow-md'>
				<Container>
					<div className='hidden items-center justify-between xl:flex'>
						<div className='flex items-center gap-2 py-3'>
							<Image
								src='/header-icon-01.webp'
								alt='header-icon-01'
								width={50}
								height={50}
								className='size-6'
							/>
							<span className='text-xs md:text-sm font-semibold'>GIÁ BAO GỒM 10% VAT</span>
						</div>
						<div className='h-10 w-[1px] bg-slate-200'></div>
						<div className='flex items-center gap-2 py-3'>
							<Image
								src='/header-icon-02.webp'
								alt='header-icon-02'
								width={50}
								height={50}
								className='size-6'
							/>
							<span className='text-xs md:text-sm font-semibold'>TRẢ GÓP 0% LÃI SUẤT</span>
						</div>
						<div className='h-10 w-[1px] bg-slate-200'></div>
						<div className='flex items-center gap-2 py-3'>
							<Image
								src='/header-icon-03.webp'
								alt='header-icon-03'
								width={50}
								height={50}
								className='size-6'
							/>
							<span className='text-xs md:text-sm font-semibold'>60 NGÀY ĐỔI TRẢ MIỄN PHÍ</span>
						</div>
						<div className='h-10 w-[1px] bg-slate-200'></div>
						<div className='flex items-center gap-2 py-3'>
							<Image
								src='/header-icon-04.webp'
								alt='header-icon-04'
								width={50}
								height={50}
								className='size-6'
							/>
							<span className='text-xs md:text-sm font-semibold'>GIAO HÀNG MIỄN PHÍ 1H</span>
						</div>
						<div className='h-10 w-[1px] bg-slate-200'></div>
						<div className='flex items-center gap-2 py-3'>
							<Image
								src='/header-icon-05.webp'
								alt='header-icon-05'
								width={50}
								height={50}
								className='size-6'
							/>
							<div className='text-xs md:text-sm font-semibold flex items-center gap-2'>
								<span>HOTLINE</span>
								<span className='text-[#d71b23] text-base'>1900636469</span>
							</div>
						</div>
					</div>
					<div className='block xl:hidden'>
						<Swiper
							spaceBetween={24}
							slidesPerView='auto'
							breakpoints={{
								300: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 3,
									spaceBetween: 24,
								},
								1024: {
									slidesPerView: 3.5,
									spaceBetween: 24,
								},
							}}
							pagination={{ clickable: true }}
							className='flex items-center'
						>
							<SwiperSlide>
								<div className='flex items-center gap-2 py-3'>
									<Image
										src='/header-icon-01.webp'
										alt='header-icon-01'
										width={50}
										height={50}
										className='size-6'
									/>
									<span className='text-xs md:text-sm font-semibold'>GIÁ BAO GỒM 10% VAT</span>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='flex items-center gap-2 py-3'>
									<Image
										src='/header-icon-02.webp'
										alt='header-icon-02'
										width={50}
										height={50}
										className='size-6'
									/>
									<span className='text-xs md:text-sm font-semibold'>TRẢ GÓP 0% LÃI SUẤT</span>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='flex items-center gap-2 py-3'>
									<Image
										src='/header-icon-03.webp'
										alt='header-icon-03'
										width={50}
										height={50}
										className='size-6'
									/>
									<span className='text-xs md:text-sm font-semibold'>60 NGÀY ĐỔI TRẢ MIỄN PHÍ</span>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='flex items-center gap-2 py-3'>
									<Image
										src='/header-icon-04.webp'
										alt='header-icon-04'
										width={50}
										height={50}
										className='size-6'
									/>
									<span className='text-xs md:text-sm font-semibold'>GIAO HÀNG MIỄN PHÍ 1H</span>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='flex items-center gap-2 py-3'>
									<Image
										src='/header-icon-05.webp'
										alt='header-icon-05'
										width={50}
										height={50}
										className='size-6'
									/>
									<div className='text-xs md:text-sm font-semibold flex items-center gap-2'>
										<span>HOTLINE</span>
										<span className='text-[#d71b23] text-base'>1900636469</span>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Header;
