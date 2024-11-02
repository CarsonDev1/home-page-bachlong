import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';

export default function Component() {
	return (
		<div className='container mx-auto pt-40 px-6 lg:px-10'>
			<div className='text-sm breadcrumbs mb-6 text-gray-500'>
				<ul className='flex gap-2'>
					<li className='hover:text-gray-700'>Trang chủ</li>
					<li className='text-blue-600 font-medium'>Giỏ hàng</li>
				</ul>
			</div>

			<div className='flex flex-col lg:flex-row gap-10'>
				<div className='flex-1'>
					<Card className='mb-10 shadow-xl rounded-2xl bg-gradient-to-r from-white to-gray-50'>
						<CardContent className='p-8'>
							<div className='space-y-10'>
								<div className='flex justify-between items-center text-gray-600 text-sm font-semibold'>
									<div>SẢN PHẨM</div>
									<div className='grid grid-cols-3 gap-10 text-center'>
										<div>ĐƠN GIÁ</div>
										<div>SỐ LƯỢNG</div>
										<div>TỔNG</div>
									</div>
								</div>

								<div className='flex items-center gap-6 py-6 border-t border-gray-200'>
									<input type='checkbox' className='rounded border-gray-300' />
									<div className='flex items-center gap-6 flex-1'>
										<Image
											src='/ipad01.webp'
											alt='iPad'
											width={80}
											height={80}
											className='rounded-lg shadow-md'
										/>
										<div className='flex-1'>
											<h3 className='font-semibold text-lg text-gray-800'>
												iPad 10.2 Gen 9 2021 64GB Wifi - Chính Hãng Apple VN
											</h3>
											<p className='text-sm text-gray-500'>Màu sắc: Space Gray</p>
										</div>
										<div className='grid grid-cols-3 gap-6 items-center'>
											<div className='text-gray-700'>5.890.000 VND</div>
											<div className='flex items-center gap-3'>
												<Button
													variant='outline'
													size='icon'
													className='h-9 w-9 bg-gray-100 hover:bg-gray-200 rounded-full shadow'
												>
													<Minus className='h-4 w-4 text-gray-700' />
												</Button>
												<Input
													className='w-14 h-9 text-center rounded-full bg-gray-100'
													value='01'
												/>
												<Button
													variant='outline'
													size='icon'
													className='h-9 w-9 bg-gray-100 hover:bg-gray-200 rounded-full shadow'
												>
													<Plus className='h-4 w-4 text-gray-700' />
												</Button>
											</div>
											<div className='flex items-center gap-4'>
												<div className='text-gray-700 font-semibold'>5.890.000 VND</div>
												<Button
													variant='ghost'
													size='icon'
													className='hover:bg-gray-100 rounded-full'
												>
													<X className='h-4 w-4 text-gray-500' />
												</Button>
											</div>
										</div>
									</div>
								</div>

								<div className='pt-8 border-t border-gray-200'>
									<h4 className='font-semibold text-gray-700 mb-4'>Khuyến mãi</h4>
									<div className='flex gap-3'>
										<Input
											placeholder='Nhập mã giảm giá'
											className='max-w-xs border border-gray-300 rounded-lg'
										/>
										<Button
											variant='outline'
											className='bg-blue-600 text-white hover:bg-blue-700 rounded-lg hover:text-white'
										>
											Áp dụng
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Up-sell section */}
					<Card className='mb-10 shadow-xl rounded-2xl bg-gradient-to-r from-white to-gray-50'>
						<CardContent className='p-8'>
							<h2 className='text-xl font-semibold mb-6 text-gray-800'>Nâng cấp sản phẩm của bạn</h2>
							<div className='flex gap-6 overflow-x-auto pb-4'>
								{[1, 2, 3].map((item) => (
									<div key={item} className='flex-shrink-0 w-64 bg-gray-50 rounded-lg shadow-md p-4'>
										<Image
											src='/ipad02.webp'
											alt={`Upgrade option ${item}`}
											width={256}
											height={144}
											className='rounded-lg mb-4 shadow-sm'
										/>
										<h3 className='font-medium text-gray-800'>iPad Pro 11 2021</h3>
										<p className='text-sm text-gray-500 mb-4'>Từ 19.990.000 VND</p>
										<Button
											variant='outline'
											className='w-full text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg'
										>
											Thêm vào giỏ hàng
										</Button>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Cross-sell section */}
					<Card className='shadow-xl rounded-2xl bg-gradient-to-r from-white to-gray-50'>
						<CardContent className='p-8'>
							<h2 className='text-xl font-semibold mb-6 text-gray-800'>Sản phẩm đề xuất</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{[1, 2, 3, 4, 5, 6].map((item) => (
									<div
										key={item}
										className='flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow'
									>
										<Image
											src='/ipad02.webp'
											alt={`Related product ${item}`}
											width={80}
											height={80}
											className='rounded-lg shadow-sm'
										/>
										<div>
											<h3 className='font-medium text-gray-800'>Apple Pencil (2nd Gen)</h3>
											<p className='text-sm text-gray-500 mb-2'>2.990.000 VND</p>
											<Button
												variant='outline'
												size='sm'
												className='text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg'
											>
												Thêm
											</Button>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				<div className='lg:w-96 h-fit top-[20%] left-0 sticky'>
					<Card className='shadow-xl rounded-2xl bg-gradient-to-r from-white to-gray-50'>
						<CardContent className='p-8 space-y-6'>
							<h2 className='font-semibold flex gap-2 items-center text-gray-800'>
								<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
									/>
								</svg>
								Thông tin thanh toán
							</h2>
							<div className='flex justify-between text-sm text-gray-700'>
								<span>Tiền hàng không bao gồm thuế</span>
								<span>5.890.000 VND</span>
							</div>
							<div className='flex justify-between font-medium text-gray-800'>
								<span>Tổng tiền tạm tính:</span>
								<span>5.890.000 VND</span>
							</div>
							<Button className='w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow'>
								Mua ngay
							</Button>
							<p className='text-center text-sm text-gray-500'>Giao hàng tận nơi hoặc tại cửa hàng</p>
							<div className='grid grid-cols-2 gap-4'>
								<Button
									variant='outline'
									className='bg-blue-600 text-white hover:bg-blue-700 rounded-lg hover:text-white'
								>
									<span className='block text-xs'>Duyệt nhanh</span>
								</Button>
								<Button
									variant='outline'
									className='bg-blue-600 text-white hover:bg-blue-700 rounded-lg hover:text-white'
								>
									<span className='block text-xs'>Visa</span>
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
