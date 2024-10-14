'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const membershipTiers = [
	{ id: 'b-new', name: 'B-NEW', isNew: true, icon: '🆕' },
	{ id: 'b-member', name: 'B-MEMBER', isNew: false, icon: '👑' },
	{ id: 'b-super-vip', name: 'B-SUPER VIP', isNew: false, icon: '🌟' },
];

const benefitsData = {
	'b-new': {
		conditions: ['Doanh số tích lũy >3.000.000'],
		benefits: [
			'Giảm giá máy 0%',
			'Giảm giá phụ kiện 1: 2%',
			'Giảm giá phụ kiện 2: 1%',
			'Ưu đãi thu cũ lên đời: 5% tối đa 200.000đ',
			'Ưu đãi sửa chữa Bạch Long Care: 5% tối đa 100.000đ',
			'Voucher sinh nhật: 50.000đ',
		],
	},
	'b-super-vip': {
		conditions: ['Doanh số tích lũy >15.000.000'],
		benefits: [
			'Giảm giá máy 0.2%',
			'Giảm giá phụ kiện 1: 3%',
			'Giảm giá phụ kiện 2: 2%',
			'Ưu đãi thu cũ lên đời: 5% tối đa 300.000đ',
			'Ưu đãi sửa chữa Bạch Long Care: 5% tối đa 200.000đ',
			'Voucher sinh nhật: 100.000đ',
		],
	},
	'b-member': {
		conditions: ['Doanh số tích lũy >50.000.000'],
		benefits: [
			'Giảm giá máy 0.5%',
			'Giảm giá phụ kiện 1: 5%',
			'Giảm giá phụ kiện 2: 3%',
			'Ưu đãi thu cũ lên đời: 5% tối đa 500.000đ',
			'Ưu đãi sửa chữa Bạch Long Care: 5% tối đa 300.000đ',
			'Voucher sinh nhật: 200.000đ',
		],
	},
};

type TierId = 'b-new' | 'b-member' | 'b-super-vip';

export default function Offers() {
	const [activeMainTab, setActiveMainTab] = useState('benefits');
	const [activeMembershipTier, setActiveMembershipTier] = useState('b-new');

	return (
		<div className='p-0 md:p-4 lg:p-6 min-h-screen flex flex-col gap-6'>
			<Tabs value={activeMainTab} onValueChange={setActiveMainTab}>
				<TabsList className='w-full mb-4 sm:mb-6 flex gap-1 justify-center p-0'>
					<TabsTrigger
						value='benefits'
						className={`w-full text-sm sm:text-lg border font-semibold text-center transition-all duration-300 ease-in-out transform ${
							activeMainTab === 'benefits' ? 'border-[#fff200] shadow-lg' : 'text-gray-700 '
						} rounded-l-lg`}
					>
						Ưu đãi Bmember
					</TabsTrigger>
					<TabsTrigger
						value='gifts'
						className={`w-full text-sm sm:text-lg border font-semibold text-center transition-all duration-300 ease-in-out transform ${
							activeMainTab === 'gifts' ? 'border-[#fff200] shadow-lg' : 'text-gray-700 '
						} rounded-r-lg`}
					>
						Quà của bạn
					</TabsTrigger>
				</TabsList>

				<TabsContent value='benefits'>
					<Card className='border-none shadow-lg'>
						<CardHeader className='bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-t-lg'>
							<CardTitle className='text-center text-lg sm:text-2xl font-bold text-white py-3 sm:py-4'>
								⭐ CẬP NHẬT ƯU ĐÃI HẠNG THÀNH VIÊN BMEMBER ⭐
							</CardTitle>
						</CardHeader>
						<CardContent className='pt-4 sm:pt-6'>
							<p className='text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6'>
								Vui lòng chọn hạng thành viên để xem chi tiết ưu đãi
							</p>
							<Tabs value={activeMembershipTier} onValueChange={setActiveMembershipTier}>
								<TabsList className='flex justify-center gap-4 mb-6 sm:mb-8 h-full bg-white'>
									{membershipTiers.map((tier) => (
										<TabsTrigger
											key={tier.id}
											value={tier.id}
											className='flex flex-col items-center focus:outline-none transition-transform duration-300 hover:scale-105 !shadow-none'
										>
											<div
												className={`relative overflow-hidden w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
													activeMembershipTier === tier.id
														? 'bg-[#32302D] border-4 border-[#fff200] shadow-md'
														: 'bg-white border-4 border-gray-300 hover:border-gray-400'
												}`}
											>
												<Image
													src={`/profile/bg-level.webp`}
													alt={tier.name}
													width={100}
													height={100}
													className='absolute top-0 left-0 w-full h-full object-cover z-0'
												/>
												<span
													className={`mt-2 text-xs font-bold relative z-10 text-[#fff200] 
													}`}
												>
													{tier.name}
												</span>
											</div>
										</TabsTrigger>
									))}
								</TabsList>

								{membershipTiers.map((tier) => (
									<TabsContent key={tier.id} value={tier.id}>
										<div className='space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow-inner'>
											<div className='flex items-center space-x-2 sm:space-x-3'>
												<CheckCircle2 className='text-green-500 w-5 h-5 sm:w-6 sm:h-6' />
												<span className='font-semibold text-base sm:text-lg text-gray-800 uppercase'>
													DOANH SỐ TÍCH LŨY
												</span>
											</div>
											{benefitsData[tier.id as TierId].conditions.map((condition, index) => (
												<p
													key={index}
													className='ml-7 sm:ml-9 text-sm sm:text-base text-gray-600'
												>
													{condition}
												</p>
											))}
											<div className='flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-6'>
												<CheckCircle2 className='text-green-500 w-5 h-5 sm:w-6 sm:h-6' />
												<span className='font-semibold text-base sm:text-lg text-gray-800 uppercase'>
													Chi tiết ưu đãi
												</span>
											</div>
											{benefitsData[tier.id as TierId].benefits.map((benefit, index) => (
												<div
													key={index}
													className='flex items-start space-x-2 sm:space-x-3 ml-7 sm:ml-9'
												>
													<CheckCircle2 className='text-green-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0' />
													<p className='text-sm sm:text-base text-gray-600'>{benefit}</p>
												</div>
											))}
										</div>
									</TabsContent>
								))}
							</Tabs>
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value='gifts'>
					<Card className='border-none shadow-none mx-auto'>
						<CardContent className='flex justify-center items-center'>
							<Image
								src='/profile/not-offers.webp'
								alt='gifts'
								width={500}
								height={500}
								className='rounded-3xl'
							/>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
