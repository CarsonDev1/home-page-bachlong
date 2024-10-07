/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useMemo, useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import Select from 'react-select';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface OptionType {
	value: number;
	label: JSX.Element;
}

interface InstallmentOption {
	month: number;
	moneyofmonth: number;
	interest: number;
}

interface DataType {
	productPrice: number;
	loan: number;
	item: InstallmentOption[];
}
const customStyles: any = {
	control: (provided: any, state: { isFocused: any }) => ({
		...provided,
		backgroundColor: 'white',
		borderColor: state.isFocused ? '#4A90E2' : '#D3D3D3',
		borderWidth: '1px',
		boxShadow: state.isFocused ? '0 0 0 1px #4A90E2' : 'none',
		'&:hover': {
			borderColor: '#4A90E2',
		},
		padding: '5px',
		zIndex: 2,
	}),
	placeholder: (provided: any) => ({
		...provided,
		color: '#888888',
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: '#333333',
	}),
	menu: (provided: any) => ({
		...provided,
		borderRadius: '5px',
		backgroundColor: 'white',
		boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
		zIndex: 10,
	}),
	option: (provided: any, state: { isFocused: any; isSelected: any }) => ({
		...provided,
		position: 'relative',
		zIndex: 300,
		backgroundColor: state.isFocused ? '#f0f8ff' : 'white',
		color: state.isSelected ? '#4A90E2' : '#333333',
		padding: '10px',
		'&:hover': {
			backgroundColor: '#e6f7ff',
		},
	}),
	dropdownIndicator: (provided: any) => ({
		...provided,
		color: '#4A90E2',
		'&:hover': {
			color: '#007BFF',
		},
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
};

const productPrice = 24390000;

const Skeleton = () => (
	<div className='animate-pulse'>
		<div className='h-6 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-4 bg-gray-300 rounded mb-2'></div>
		<div className='h-8 bg-gray-300 rounded'></div>
	</div>
);

const Payment = () => {
	const [installmentOptions, setInstallmentOptions] = useState<any[]>([]);
	const [data, setData] = useState<DataType | null>(null);
	const [loading, setLoading] = useState(false);

	const [activeTab, setActiveTab] = useState('hd-saison');
	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
		setInstallmentOptions([]);
	};

	const options: OptionType[] = useMemo(() => {
		const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
		return percentages.map((percentage) => {
			const downPayment = (productPrice * percentage) / 100;
			return {
				value: downPayment,
				label: (
					<>
						<span>
							Trả trước {percentage}% - {downPayment.toLocaleString('vi-VN')} VNĐ
						</span>
					</>
				),
			};
		});
	}, []);

	const shinhanPaymentOptions: OptionType[] = useMemo(() => {
		const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
		return percentages.map((percentage) => {
			const downPayment = (productPrice * percentage) / 100;
			return {
				value: percentage,
				label: (
					<>
						<span>
							Trả trước {percentage}% - {downPayment.toLocaleString('vi-VN')} VNĐ
						</span>
					</>
				),
			};
		});
	}, []);

	const handleChange = async (selectedOption: OptionType | null) => {
		if (!selectedOption) return;
		setLoading(true);
		const response = await fetch(
			'https://script.google.com/macros/s/AKfycbyPnMmakO3fnb3HR77apFq50Aziw02DeqhH7Q6oCV37X7hD-IRikQoNsDK6dLDDpV8AGA/exec',
			{
				method: 'POST',
				body: JSON.stringify({
					price: productPrice,
					cost: selectedOption.value,
				}),
			}
		);
		const data = await response.json();
		setData(data);
		setInstallmentOptions(data.item);
		setLoading(false);
	};

	const handleShinhanChange = async (selectedOptionShin: OptionType | null) => {
		if (!selectedOptionShin) return;
		setLoading(true);
		const response = await fetch(
			'https://script.google.com/macros/s/AKfycbxhuz9VahdzgRylHAa_Q20uaMx_bHWbPUBCw6jgHohyhQP0gHE9IBZCe3i2JZfUWWbQ/exec',
			{
				method: 'POST',
				body: JSON.stringify({
					endpoint: 'shinhan',
					price: productPrice,
					cost: selectedOptionShin.value,
				}),
			}
		);
		const data = await response.json();
		setData(data);
		setInstallmentOptions(data.item);
		setLoading(false);
	};
	console.log('data shinhan', data);

	return (
		<Section>
			<Container>
				<div className='p-40 flex flex-col gap-5'>
					<Link href='/' className='w-full'>
						<div className='flex gap-1 items-center'>
							<IoIosArrowBack />
							<span>Trở về</span>
						</div>
					</Link>
					<div className='flex items-center gap-2'>
						<div className='border border-slate-300 rounded-md py-3 px-4 text-center w-1/2'>
							<span className='font-semibold'>Trả góp qua thẻ tín dụng</span>
						</div>
						<div className='border border-[#1D4ED8] bg-[#E8EDFB] text-[#1D4ED8] rounded-md py-3 px-4 text-center w-1/2'>
							<span className='font-semibold'>Trả góp qua công ty tài chính</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-5 border border-slate-200 rounded-lg shadow-md'>
						<div className='flex items-center gap-2'>
							<Image src='/product-01.webp' width={80} height={80} alt='product-01' />
							<div className='flex flex-col gap-2'>
								<h4 className='text-lg font-semibold'>iPhone 15 Pro 128GB Chính Hãng VN/A</h4>
								<span className='text-[#D71B23] font-bold text-xl'>
									{productPrice.toLocaleString('vi-VN')} VNĐ
								</span>
								<p className='text-xs'>
									<span className='font-semibold'>Màu sắc: </span>
									<span>Black Titanium</span>
								</p>
								<p className='text-xs'>
									<span className='font-semibold'>Dung lượng: </span>
									<span>128GB</span>
								</p>
							</div>
						</div>
						<p className='text-lg font-semibold'>
							<span className=''>Số lượng: </span>
							<span className='text-[#D71B23]'>1</span>
						</p>
					</div>
					<div className='p-5 border border-slate-200 rounded-lg shadow-md'>
						<div className='flex flex-col gap-5'>
							<span className='font-semibold'>Chọn loại thẻ thanh toán:</span>
							<div className='flex items-center gap-2'>
								<Image
									src='/kredivo.webp'
									width={100}
									height={40}
									alt='kredivo'
									className='border border-slate-300 rounded-md py-2 px-3'
								/>
								<Image
									src='/muadee.webp'
									width={100}
									height={40}
									alt='muadee'
									className='border border-slate-300 rounded-md py-2 px-3'
								/>
								<div className='flex flex-col items-center gap-1 border border-slate-300 rounded-md py-1 px-10 bg-[#F1EB1F]'>
									<span className='text-[#1D4ED8] text-xs'>MUA NGAY - TRẢ SAU</span>
									<Image src='/home-paylater.svg' width={40} height={20} alt='kredivo' className='' />
								</div>
								<div className='flex items-center gap-2 p-3 border border-[#1D4ED8] rounded-md bg-[#E8EDFB]'>
									<div className='loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-bounce aspect-square w-6 flex justify-center items-center text-yellow-700'>
										$
									</div>
									<span className='text-sm font-semibold text-[#1D4ED8]'>Công ty tài chính</span>
								</div>
							</div>
							<span className='font-semibold'>Chọn công ty tài chính:</span>
							<div className='flex items-center gap-2'>
								<div
									onClick={() => handleTabClick('shinhan')}
									className={`w-24 h-14 relative py-2 px-3 border ${
										activeTab === 'shinhan' ? 'border-rose-600' : 'border-slate-300'
									} rounded-md cursor-pointer before:absolute before:w-0 before:h-0 ${
										activeTab === 'shinhan'
											? 'before:border-l-[12px] before:border-r-[12px] before:border-t-[12px] before:border-l-transparent before:border-r-transparent before:border-t-rose-600 before:left-1/2 before:-translate-x-1/2 before:bottom-[-12px]'
											: ''
									}`}
								>
									<Image
										src='/shinhan.webp'
										width={100}
										height={40}
										alt='shinhan'
										className='absolute top-0 left-0 object-contain w-full h-full'
									/>
								</div>

								<div
									onClick={() => handleTabClick('hd-saison')}
									className={`w-24 h-14 relative py-2 px-3 border ${
										activeTab === 'hd-saison' ? 'border-rose-600' : 'border-slate-300'
									} rounded-md cursor-pointer before:absolute before:w-0 before:h-0 ${
										activeTab === 'hd-saison'
											? 'before:border-l-[12px] before:border-r-[12px] before:border-t-[12px] before:border-l-transparent before:border-r-transparent before:border-t-rose-600 before:left-1/2 before:-translate-x-1/2 before:bottom-[-12px]'
											: ''
									}`}
								>
									<Image
										src='/hd-saison.webp'
										width={100}
										height={40}
										alt='hd-saison'
										className='absolute top-0 left-0 object-contain w-full h-full'
									/>
								</div>

								<div
									onClick={() => handleTabClick('mcredit')}
									className={`w-24 h-14 relative py-2 px-3 border ${
										activeTab === 'mcredit' ? 'border-rose-600' : 'border-slate-300'
									} rounded-md cursor-pointer before:absolute before:w-0 before:h-0 ${
										activeTab === 'mcredit'
											? 'before:border-l-[12px] before:border-r-[12px] before:border-t-[12px] before:border-l-transparent before:border-r-transparent before:border-t-rose-600 before:left-1/2 before:-translate-x-1/2 before:bottom-[-12px]'
											: ''
									}`}
								>
									<Image
										src='/mcredit.jpg'
										width={100}
										height={40}
										alt='mcredit'
										className='absolute top-0 left-0 object-contain w-full h-full'
									/>
								</div>

								<div
									onClick={() => handleTabClick('home-credit')}
									className={`w-24 h-14 relative py-2 px-3 border ${
										activeTab === 'home-credit' ? 'border-rose-600' : 'border-slate-300'
									} rounded-md cursor-pointer before:absolute before:w-0 before:h-0 ${
										activeTab === 'home-credit'
											? 'before:border-l-[12px] before:border-r-[12px] before:border-t-[12px] before:border-l-transparent before:border-r-transparent before:border-t-rose-600 before:left-1/2 before:-translate-x-1/2 before:bottom-[-12px]'
											: ''
									}`}
								>
									<Image
										src='/home-credit.webp'
										width={100}
										height={40}
										alt='home-credit'
										className='absolute top-0 left-0 object-contain w-full h-full'
									/>
								</div>
							</div>

							<div className='mt-5'>
								{activeTab === 'shinhan' && (
									<div>
										<h2 className='text-lg font-semibold'>Trả góp qua Shinhan</h2>
									</div>
								)}
								{activeTab === 'hd-saison' && (
									<div>
										<h2 className='text-lg font-semibold'>Trả góp qua HD Saison</h2>
									</div>
								)}
								{activeTab === 'mcredit' && (
									<div>
										<h2 className='text-lg font-semibold'>Trả góp qua Mcredit</h2>
									</div>
								)}
								{activeTab === 'home-credit' && (
									<div>
										<h2 className='text-lg font-semibold'>Trả góp qua Home Credit</h2>
									</div>
								)}
							</div>
							<span className='font-semibold'>Chọn số tiền trả trước:</span>
							{activeTab === 'hd-saison' && (
								<Select
									options={options}
									styles={customStyles}
									placeholder='Chọn số tiền trả trước'
									onChange={handleChange}
								/>
							)}
							{activeTab === 'shinhan' && (
								<Select
									options={shinhanPaymentOptions}
									styles={customStyles}
									placeholder='Chọn số tiền trả trước'
									onChange={handleShinhanChange}
								/>
							)}
						</div>
					</div>
					{loading ? (
						<Skeleton />
					) : (
						installmentOptions?.length > 0 && (
							<div className='p-5 border border-slate-200 rounded-lg shadow-md'>
								<Swiper slidesPerView={2.2} spaceBetween={12} className='mySwiper'>
									{installmentOptions?.length > 0 &&
										installmentOptions.map((option, index) => (
											<SwiperSlide
												key={index}
												className='bg-custom-gradient border border-slate-200 rounded-md px-2 pb-2'
											>
												<div className='flex flex-col gap-4'>
													<div className='flex items-center justify-around'>
														<div className='w-8 h-20 clip-path-custom p-7 pb-10 -translate-y-0 bg-[#10b981] flex flex-col justify-center items-center'>
															<span className='text-white font-bold text-3xl'>
																{index + 1}
															</span>
														</div>
														<div className='flex gap-8'>
															<p className='flex flex-col gap-1'>
																<span className='text-sm'>Tổng tiền trả góp</span>
																<span className='text-lg font-bold'>
																	{data?.loan.toLocaleString('vi-VN')} VNĐ
																</span>
															</p>
															<span className='text-sm'>Kỳ hạn {option.month}</span>
														</div>
													</div>
													<p className='flex items-center justify-between'>
														<span className='text-sm'>Giá trị đơn hàng</span>
														<span className='font-semibold'>
															{productPrice.toLocaleString('vi-VN')} VNĐ
														</span>
													</p>
													<p className='flex items-center justify-between'>
														<span className='text-sm'>Giá trả góp</span>
														<span className='font-semibold'>
															{data?.loan.toLocaleString('vi-VN')} VNĐ
														</span>
													</p>
													<p className='flex items-center justify-between'>
														<span className='text-sm'>Góp mỗi tháng</span>
														<span className='font-semibold text-[#D71B23]'>
															{Number(option.moneyofmonth).toLocaleString('vi-VN')} VNĐ
														</span>
													</p>
													<p className='flex items-center justify-between'>
														<span className='text-sm'>Chênh lệch trả thẳng</span>
														<span className='font-semibold'>
															{Number(option.interest).toLocaleString('vi-VN')} VNĐ
														</span>
													</p>

													<p className='flex items-center justify-between'>
														<span className='text-sm'>Thanh toán khi nhận máy</span>
														<span className='font-semibold text-[]'>
															{data?.loan.toLocaleString('vi-VN')} VNĐ
														</span>
													</p>
													<button className='bg-[#10b981] py-2 px-6 rounded-md text-white font-semibold'>
														Chọn
													</button>
												</div>
											</SwiperSlide>
										))}
								</Swiper>
							</div>
						)
					)}
				</div>
			</Container>
		</Section>
	);
};

export default Payment;
