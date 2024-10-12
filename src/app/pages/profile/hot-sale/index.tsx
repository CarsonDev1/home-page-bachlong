'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Star } from 'lucide-react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const products = [
	{
		name: 'Xiaomi Redmi Pad SE 8.7 inch Wifi 2024',
		image: '/apple/banner-07.png',
		price: '3.490.000đ',
		originalPrice: '3.990.000đ',
		discount: '13%',
		rating: 0,
		reviews: 0,
	},
	{
		name: 'TECNO SPARK Go 2024 4GB 64GB',
		image: '/apple/banner-07.png',
		price: '1.950.000đ',
		originalPrice: '2.190.000đ',
		discount: '11%',
		rating: 5,
		reviews: 3,
	},
	{
		name: 'Xiaomi Redmi Pad SE 6GB 128GB',
		image: '/apple/banner-07.png',
		price: '4.490.000đ',
		originalPrice: '5.490.000đ',
		discount: '18%',
		rating: 5,
		reviews: 9,
	},
	{
		name: 'Infinix Note 40 Pro 8GB 256GB',
		image: '/apple/banner-07.png',
		price: '5.590.000đ',
		originalPrice: '5.990.000đ',
		discount: '7%',
		rating: 5,
		reviews: 6,
	},
	{
		name: 'TECNO SPARK Go 1 4GB 64GB',
		image: '/apple/banner-07.png',
		price: '2.220.000đ',
		originalPrice: '2.490.000đ',
		discount: '11%',
		rating: 0,
		reviews: 0,
	},
];

function CountdownTimer({ onEnd }: { onEnd: () => void }) {
	const [time, setTime] = useState({ hours: 78, minutes: 0, seconds: 10 });

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((prevTime) => {
				if (prevTime.seconds > 0) {
					return { ...prevTime, seconds: prevTime.seconds - 1 };
				} else if (prevTime.minutes > 0) {
					return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
				} else if (prevTime.hours > 0) {
					return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
				} else {
					clearInterval(timer);
					onEnd();
					return prevTime;
				}
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [onEnd]);

	return (
		<div className='flex items-center space-x-1'>
			<div className='bg-white text-red-500 font-bold px-1 rounded'>{String(time.hours).padStart(2, '0')}</div>
			<span className='text-white'>:</span>
			<div className='bg-white text-red-500 font-bold px-1 rounded'>{String(time.minutes).padStart(2, '0')}</div>
			<span className='text-white'>:</span>
			<div className='bg-white text-red-500 font-bold px-1 rounded'>{String(time.seconds).padStart(2, '0')}</div>
		</div>
	);
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
	return (
		<div className='bg-white p-2 rounded-lg flex flex-col h-full min-h-[240px]'>
			<img src={product.image} alt={product.name} className='w-full h-32 object-contain mb-2' />
			<h3 className='text-xs font-semibold mb-1 flex-grow'>{product.name}</h3>
			<div className='flex justify-between items-end'>
				<div>
					<p className='text-red-500 font-bold'>{product.price}</p>
					<p className='text-gray-400 line-through text-xs'>{product.originalPrice}</p>
				</div>
				<div className='flex items-center'>
					{product.rating > 0 && (
						<>
							{[...Array(5)].map((_, i) => (
								<Star key={i} className='w-3 h-3 fill-yellow-400 text-yellow-400' />
							))}
							<span className='text-xs text-gray-500 ml-1'>{product.reviews}</span>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default function HotSaleBanner() {
	const [isEnded, setIsEnded] = useState(false);

	const handleCountdownEnd = () => {
		setIsEnded(true);
	};

	return (
		<div className='bg-[#F9405E] p-4 rounded-lg'>
			<div className='flex flex-col md:flex-row justify-between items-center mb-4'>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
					<div className='flex gap-2'>
						<div className='bg-yellow-400 text-red-500 px-2 py-1 rounded font-bold text-sm w-fit'>
							Flash Sale
						</div>
						<div className='bg-white text-red-500 px-2 py-1 rounded font-bold text-sm w-fit'>
							{isEnded ? 'Đã kết thúc' : 'Đang diễn ra'}
						</div>
					</div>
					{!isEnded && (
						<div className='flex items-center space-x-2 text-white'>
							<span className='text-sm'>Kết thúc sau:</span>
							<CountdownTimer onEnd={handleCountdownEnd} />
						</div>
					)}
				</div>
				<Image
					src='/profile/hot-sale.gif'
					alt='hot-sale'
					width={400}
					height={500}
					className='object-cover w-full md:w-2/6 mt-4 md:mt-0'
				/>
			</div>
			<div className='relative'>
				<Swiper
					modules={[Navigation]}
					spaceBetween={10}
					slidesPerView='auto'
					speed={1000}
					breakpoints={{
						300: {
							slidesPerView: 2,
						},
						576: {
							slidesPerView: 3,
						},
						850: {
							slidesPerView: 4,
						},
						1200: {
							slidesPerView: 4,
						},
					}}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					className='flex space-x-4 pb-4'
				>
					{products.map((product, index) => (
						<SwiperSlide key={index} className='w-40 flex-shrink-0'>
							<div className='relative h-full'>
								<div className='absolute top-0 left-0 bg-red-600 text-white text-xs px-1 rounded-tl-lg rounded-br-lg'>
									Giảm {product.discount}
								</div>
								<ProductCard product={product} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<button className='swiper-button-prev'></button>
				<button className='swiper-button-next'></button>
			</div>
		</div>
	);
}
