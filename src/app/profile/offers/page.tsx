'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const membershipTiers = [
	{ id: 'b-member', name: 'B-MEMBER', isNew: true, icon: '👨‍🎓' },
	{ id: 's-vip', name: 'S-VIP', isNew: false, icon: '👑' },
	{ id: 's-mem', name: 'S-MEM', isNew: false, icon: '🌟' },
	{ id: 's-new', name: 'S-NEW', isNew: false, icon: '🆕' },
];

const benefitsData = {
	'b-member': {
		conditions: 'Học sinh THPT và Sinh viên Đại học, Cao Đẳng đang theo học tại các trường trên toàn quốc',
		registerLink: 'TẠI ĐÂY',
		benefits: [
			'Ưu đãi tân sinh viên đổi điểm thi nhận voucher đến 3 triệu mua Laptop, iPad',
			'Ưu đãi thu cũ (áp dụng theo cấp bậc SMEMBER hiện tại của khách hàng) cho các sản phẩm mua tại CellphoneS',
			'Giảm thêm đến 4% tối đa 800K khi mua Laptop',
			'Giảm thêm đến 6% khi mua Điện Thoại',
		],
	},
	's-vip': {
		conditions: 'Điều kiện trở thành thành viên S-VIP',
		registerLink: '#',
		benefits: [
			'Ưu đãi đặc biệt cho thành viên S-VIP',
			'Giảm giá cao cấp trên các sản phẩm cao cấp',
			'Dịch vụ chăm sóc khách hàng VIP',
		],
	},
	's-mem': {
		conditions: 'Điều kiện trở thành thành viên S-MEM',
		registerLink: '#',
		benefits: [
			'Ưu đãi hấp dẫn cho thành viên S-MEM',
			'Tích điểm nhanh hơn khi mua sắm',
			'Giảm giá đặc biệt vào sinh nhật',
		],
	},
	's-new': {
		conditions: 'Điều kiện trở thành thành viên S-NEW',
		registerLink: '#',
		benefits: [
			'Ưu đãi chào mừng cho thành viên mới',
			'Giảm giá cho đơn hàng đầu tiên',
			'Hướng dẫn mua sắm cá nhân hóa',
		],
	},
};

type TierId = 'b-member' | 's-vip' | 's-mem' | 's-new';

export default function Offers() {
	const [activeMainTab, setActiveMainTab] = useState('benefits');
	const [activeMembershipTier, setActiveMembershipTier] = useState('b-member');

	return (
		<div className='p-0 md:p-4 lg:p-6 min-h-screen flex flex-col gap-6'>
			<Tabs value={activeMainTab} onValueChange={setActiveMainTab}>
				<TabsList className='w-full mb-4 sm:mb-6 flex gap-1 justify-center p-0'>
					<TabsTrigger
						value='benefits'
						className={`w-full text-sm sm:text-lg border font-semibold text-center transition-all shadow-lg duration-300 ease-in-out transform ${
							activeMainTab === 'benefits' ? 'border-red-500' : 'text-gray-700 '
						} rounded-l-lg`}
					>
						Ưu đãi Bmember
					</TabsTrigger>
					<TabsTrigger
						value='gifts'
						className={`w-full text-sm sm:text-lg border font-semibold text-center transition-all shadow-lg duration-300 ease-in-out transform ${
							activeMainTab === 'gifts' ? 'border-red-500' : 'text-gray-700 '
						} rounded-r-lg`}
					>
						Quà của bạn
					</TabsTrigger>
				</TabsList>

				<TabsContent value='benefits'>
					<Card className='border-none shadow-lg'>
						<CardHeader className='bg-gradient-to-r from-red-600 to-red-700 rounded-t-lg'>
							<CardTitle className='text-center text-lg sm:text-2xl font-bold text-white py-3 sm:py-4'>
								⭐ CẬP NHẬT ƯU ĐÃI HẠNG THÀNH VIÊN BMEMBER ⭐
							</CardTitle>
						</CardHeader>
						<CardContent className='pt-4 sm:pt-6'>
							<p className='text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6'>
								Vui lòng chọn hạng thành viên để xem chi tiết ưu đãi
							</p>
							<Tabs value={activeMembershipTier} onValueChange={setActiveMembershipTier}>
								<TabsList className='flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8'>
									{membershipTiers.map((tier) => (
										<TabsTrigger
											key={tier.id}
											value={tier.id}
											className='flex flex-col items-center focus:outline-none'
										>
											<div
												className={`relative w-16 h-16 sm:w-24 sm:h-24 rounded-full ${
													activeMembershipTier === tier.id
														? 'bg-red-100 border-4 border-red-500'
														: 'bg-white border-4 border-gray-300 hover:border-gray-400'
												} flex flex-col items-center justify-center transition-all duration-200 ease-in-out`}
											>
												{tier.isNew && (
													<Badge className='absolute -top-2 -right-2 bg-yellow-400 text-black font-bold px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs shadow-sm'>
														MỚI
													</Badge>
												)}
												<span className='text-xl sm:text-3xl mb-0.5 sm:mb-1'>{tier.icon}</span>
												<span
													className={`text-[10px] sm:text-xs font-bold ${
														activeMembershipTier === tier.id
															? 'text-red-500'
															: 'text-gray-700'
													}`}
												>
													{tier.name}
												</span>
											</div>
											{activeMembershipTier === tier.id && (
												<div className='w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mt-1 sm:mt-2'></div>
											)}
										</TabsTrigger>
									))}
								</TabsList>
								{membershipTiers.map((tier) => (
									<TabsContent key={tier.id} value={tier.id}>
										<div className='space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow-inner'>
											<div className='flex items-center space-x-2 sm:space-x-3'>
												<CheckCircle2 className='text-green-500 w-5 h-5 sm:w-6 sm:h-6' />
												<span className='font-semibold text-base sm:text-lg text-gray-800'>
													ĐIỀU KIỆN
												</span>
											</div>
											<p className='ml-7 sm:ml-9 text-sm sm:text-base text-gray-600'>
												{benefitsData[tier.id as TierId].conditions}
											</p>
											<p className='ml-7 sm:ml-9 text-sm sm:text-base text-gray-600'>
												Đăng ký nhập hội {tier.name} siêu nhanh{' '}
												<a href='#' className='text-blue-500 underline font-medium'>
													{benefitsData[tier.id as TierId].registerLink}
												</a>
											</p>
											<div className='flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-6'>
												<CheckCircle2 className='text-green-500 w-5 h-5 sm:w-6 sm:h-6' />
												<span className='font-semibold text-base sm:text-lg text-gray-800'>
													ƯU ĐÃI MUA HÀNG
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
