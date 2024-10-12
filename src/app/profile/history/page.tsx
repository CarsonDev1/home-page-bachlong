'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { RiSearch2Line } from 'react-icons/ri';

type OrderItem = {
	id: number;
	name: string;
	status: string;
	price: number;
	image: string;
};

const orderItems: OrderItem[] = [
	{
		id: 1,
		name: 'Cáp Baseus Crystal Shine USB-A to Lightning 1.2M-Đen',
		status: 'Đã giao hàng',
		price: 90000,
		image: '/apple/category-01.png',
	},
	{
		id: 2,
		name: 'Cáp Anker 322 USB-C to USB-L 0.9M Nylon A81B5H21-Đen',
		status: 'Đã giao hàng',
		price: 245000,
		image: '/apple/category-01.png',
	},
	{
		id: 3,
		name: 'Sạc dự phòng 10000mAh',
		status: 'Chờ xác nhận',
		price: 350000,
		image: '/apple/category-01.png',
	},
	{
		id: 4,
		name: 'Ốp lưng iPhone 12',
		status: 'Đang vận chuyển',
		price: 150000,
		image: '/apple/category-01.png',
	},
];

export default function History() {
	const [activeTab, setActiveTab] = useState('Tất cả');

	const tabs = ['Tất cả', 'Chờ xác nhận', 'Đã xác nhận', 'Đang vận chuyển', 'Đã giao hàng', 'Đã hủy'];

	const filteredItems = orderItems.filter((item) => activeTab === 'Tất cả' || item.status === activeTab);

	return (
		<div className='p-0 md:p-4 lg:p-6 min-h-screen flex flex-col gap-6'>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
				<Card className='border border-gray-200 shadow-sm'>
					<CardContent className='p-6'>
						<h3 className='text-3xl font-bold text-primary'>2</h3>
						<p className='text-lg text-gray-600'>đơn hàng</p>
					</CardContent>
				</Card>
				<Card className='border border-gray-200 shadow-sm'>
					<CardContent className='p-6'>
						<h3 className='text-3xl font-bold text-primary'>335K</h3>
						<p className='text-lg text-gray-600'>Tổng tiền tích lũy</p>
					</CardContent>
				</Card>
			</div>

			<div className='flex flex-col sm:flex-row justify-between'>
				<div className='flex gap-2 w-1/3'>
					<input
						type='date'
						defaultValue='2020-12-01'
						className='border rounded p-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto'
					/>
					<input
						type='date'
						defaultValue='2024-10-12'
						className='border rounded p-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto'
					/>
				</div>
				<div className='relative w-2/4'>
					<input
						id='default-search'
						type='search'
						placeholder='Bạn cần tìm sản phẩm gì...'
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pr-16 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-primary'
					/>
					<div className='absolute right-1 bottom-1/2 translate-y-1/2 px-4 py-2 rounded-md bg-[#0f172a]'>
						<RiSearch2Line className='text-[#fff200] text-xl md:text-lg lg:text-xl xl:text-2xl' />
					</div>
				</div>
			</div>

			<div className='flex flex-wrap -mx-1'>
				{tabs.map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`px-3 py-2 text-sm font-medium rounded-md m-1 ${
							activeTab === tab ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
						}`}
					>
						{tab}
					</button>
				))}
			</div>

			<div className='space-y-4'>
				{filteredItems.map((item) => (
					<Card key={item.id}>
						<CardContent className='flex flex-col sm:flex-row items-center p-4'>
							<Image
								src={item.image}
								alt={item.name}
								width={80}
								height={80}
								className='mb-4 sm:mb-0 sm:mr-4'
							/>
							<div className='flex-grow text-center sm:text-left mb-4 sm:mb-0'>
								<h3 className='font-semibold'>{item.name}</h3>
								<p className='text-sm text-gray-600'>{item.status}</p>
								<p className='font-bold text-red-600'>{item.price.toLocaleString()}đ</p>
							</div>
							<div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
								<Button variant='outline' className='w-full sm:w-auto'>
									Xem hóa đơn
								</Button>
								<Button variant='outline' className='w-full sm:w-auto'>
									Xem chi tiết
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
