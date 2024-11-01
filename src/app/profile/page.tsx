'use client';

import HotSaleBanner from '@/app/pages/profile/hot-sale';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Membership from '@/app/profile/membership/page';

const promotions = [
	{
		image: '/apple/banner-07.png',
		title: 'LÊN ĐỜI 4G - GIẢM SÂU HẾT CỠ',
		description: 'Khuyến mãi cực sốc cho khách hàng nâng cấp lên 4G!',
	},
	{
		image: '/apple/banner-07.png',
		title: 'GALAXY TAB S10 SERIES - ƯU ĐÃI TỐT',
		description: 'Giảm giá đặc biệt cho dòng Galaxy Tab S10.',
	},
	{
		image: '/apple/banner-07.png',
		title: 'XIAOMI PAD 6S PRO',
		description: 'Ưu đãi hấp dẫn cho Xiaomi Pad 6S Pro.',
	},
	{
		image: '/apple/banner-07.png',
		title: 'XIAOMI PAD 6S PRO',
		description: 'Ưu đãi hấp dẫn cho Xiaomi Pad 6S Pro.',
	},
	{
		image: '/apple/banner-07.png',
		title: 'XIAOMI PAD 6S PRO',
		description: 'Ưu đãi hấp dẫn cho Xiaomi Pad 6S Pro.',
	},
];

export default function Profile() {
	return (
		<div className='p-0 md:p-4 lg:p-6 min-h-screen flex flex-col gap-6'>
			<Membership />
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-6  '>
				<Card className='border border-gray-200 shadow-sm'>
					<CardContent className='p-6'>
						<h3 className='text-3xl font-bold text-primary'>2</h3>
						<p className='text-lg text-gray-600'>đơn hàng đã thanh toán</p>
					</CardContent>
				</Card>
				<Card className='border border-gray-200 shadow-sm'>
					<CardContent className='p-6'>
						<h3 className='text-3xl font-bold text-primary'>335K</h3>
						<p className='text-lg text-gray-600'>Tổng tiền tích lũy</p>
					</CardContent>
				</Card>
			</div>

			<div>
				<h3 className='mb-6 text-xl font-bold'>Chương trình nổi bật</h3>
				<Swiper
					spaceBetween={10}
					modules={[Navigation]}
					slidesPerView='auto'
					speed={1000}
					breakpoints={{
						400: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
					}}
					navigation={{
						nextEl: '.swiper-button-next-v',
						prevEl: '.swiper-button-prev-v',
					}}
				>
					{promotions.map((promotion, index) => (
						<SwiperSlide key={index}>
							<Card className='border border-gray-200 shadow-sm h-[260px]'>
								<CardContent className='p-4'>
									<Image
										alt={promotion.title}
										className='mb-4 rounded-lg w-full'
										height={800}
										src={promotion.image}
										width={800}
										style={{
											aspectRatio: '300/150',
											objectFit: 'cover',
										}}
									/>
									<h4 className='text-base font-bold'>{promotion.title}</h4>
									<p className='text-sm text-gray-600'>{promotion.description}</p>
								</CardContent>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<HotSaleBanner />
		</div>
	);
}
