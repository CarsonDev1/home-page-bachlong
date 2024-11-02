'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import Section from '@/app/components/Section';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { UrlObject } from 'url';

const categories = [
	{ name: 'Điện thoại', image: '/category-01.webp' },
	{ name: 'Máy tính bảng', image: '/category-02.webp' },
	{ name: 'Laptop', image: '/category-03.webp' },
	{ name: 'Macbook', image: '/category-04.webp' },
	{ name: 'Đồng hồ', image: '/category-05.webp' },
	{ name: 'Phụ kiện', image: '/category-06.webp' },
	{ name: 'Âm thanh', image: '/category-07.webp' },
	{ name: 'Máy cũ giá rẻ', image: '/category-08.webp' },
	{ name: 'Thu cũ đổi mới', image: '/category-09.webp' },
	{ name: 'Khuyến mãi', image: '/category-10.webp' },
];

const query = `
query getSlider($filter: SliderFilterInput) {
  Slider(filter: $filter) {
    items {
      title
      identifier
      Banner {
        __typename
        items {
          banner_id
          caption
          link
          media
          media_alt
          name
          slider_id
        }
        page_info {
          current_page
          page_size
          total_pages
        }
      }
    }
    total_count
  }
}`;

const variables = {
	filter: {
		identifier: {
			eq: 'thang-tri-an',
		},
	},
};

async function fetchBannerData() {
	const response = await fetch('https://beta-api.bachlongmobile.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const data = await response.json();
	return data.data.Slider.items;
}

const Banner = () => {
	const { data } = useQuery({
		queryKey: ['fetchBannerData'],
		queryFn: fetchBannerData,
		staleTime: 300000,
	});

	const imageData = data?.[0]?.Banner?.items?.[0]?.media;
	const categoryData = data?.[0]?.Banner?.items;
	const dataSale = categoryData?.filter((cateData: { name: string }) => cateData.name.startsWith('Tri Ân Đặc Quyền'));

	return (
		<Section>
			<div className='flex flex-wrap lg:flex-nowrap gap-4 relative z-0 pt-48 md:pt-16'>
				<div className='hidden lg:block p-3 shadow-md rounded-md w-1/5'>
					{categories.map((category, index) => (
						<div
							key={index}
							className='flex items-center justify-between py-1 px-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary'
						>
							<div className='flex items-center gap-2'>
								<Image src={category.image} width={24} height={24} alt={`sidebar-icon-${index + 1}`} />
								<span className='text-sm font-semibold'>{category.name}</span>
							</div>
							<IoIosArrowForward />
						</div>
					))}
				</div>
				<div className='relative w-full lg:w-[60%] shadow-md'>
					<Swiper
						pagination={{
							clickable: true,
							renderBullet: (index, className) => `<span class="${className}">iPhone 16 Series</span>`,
						}}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
						modules={[Pagination, Navigation]}
						className='h-full'
					>
						<SwiperSlide className='flex justify-center items-center'>
							<Image
								src={imageData}
								width={1000}
								height={900}
								alt='banner-01'
								className='object-cover w-full block'
							/>
						</SwiperSlide>
						<div className='swiper-button-prev text-black absolute bottom-1 left-5 opacity-100 text-2xl'></div>
						<div className='swiper-button-next text-black absolute bottom-1 right-5 opacity-100 text-2xl'></div>
						<div className='swiper-pagination'></div>
					</Swiper>
				</div>
				<div className='flex flex-row lg:flex-col justify-center gap-2 lg:gap-4 w-full lg:w-1/5'>
					<Image
						src='/banner-ad-01.jpg'
						width={1000}
						height={900}
						alt='banner-ad-01'
						className='object-cover w-1/3 lg:w-full block rounded-md'
					/>
					<Image
						src='/banner-ad-02.png'
						width={1000}
						height={900}
						alt='banner-ad-02'
						className='object-cover w-1/3 lg:w-full block rounded-md'
					/>
					<Image
						src='/banner-ad-03.png'
						width={1000}
						height={900}
						alt='banner-ad-03'
						className='object-cover w-1/3 lg:w-full block rounded-md'
					/>
				</div>
			</div>
			<div className='grid grid-cols-5 lg:grid-cols-10 w-full justify-between items-center py-5'>
				{categories.map((category, index) => (
					<div
						key={index}
						className='flex flex-col items-center gap-2 py-2 md:py-4 lg:py-8 pr-2 border-r border-slate-100 relative overflow-hidden'
					>
						<Image
							src={category.image}
							width={88}
							height={88}
							alt={category.name}
							className='object-cover size-11 sm:size-20 block'
						/>
						<span className='font-bold text-[9px] text-center sm:text-xs'>{category.name}</span>
						<div className='absolute inset-0 border border-transparent transition-transform duration-300 group-hover:border-blue-500 group-hover:scale-105'></div>
					</div>
				))}
			</div>
			<div className='grid grid-cols-6 gap-2'>
				{dataSale?.map(
					(
						promotion: { link: string | UrlObject; media: string | StaticImport; name: string },
						index: number
					) => (
						<div className='mx-auto' key={index}>
							<Link href={promotion?.link}>
								<Image src={promotion?.media} width={300} height={300} alt={promotion.name} />
							</Link>
						</div>
					)
				)}
			</div>
		</Section>
	);
};

export default Banner;
