import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';

export default function Component() {
	return (
		<div className='container mx-auto pt-60'>
			<div className='text-sm breadcrumbs mb-4'>
				<ul className='flex gap-2 text-muted-foreground'>
					<li>Trang chủ</li>
					<li>Giỏ hàng</li>
				</ul>
			</div>
			<div className='flex flex-col lg:flex-row gap-8'>
				<div className='flex-1'>
					<Card className='mb-8'>
						<CardContent className='p-6'>
							<div className='space-y-6'>
								<div className='flex justify-between items-center text-sm font-medium'>
									<div>SẢN PHẨM</div>
									<div className='grid grid-cols-3 gap-8'>
										<div>ĐƠN GIÁ</div>
										<div>SỐ LƯỢNG</div>
										<div>TỔNG</div>
									</div>
								</div>

								<div className='flex items-center gap-4'>
									<input type='checkbox' className='rounded border-gray-300' />
									<div className='flex items-center gap-4 flex-1'>
										<Image
											src='/ipad01.webp'
											alt='iPad'
											width={80}
											height={80}
											className='rounded-lg'
										/>
										<div className='flex-1'>
											<h3 className='font-medium'>
												iPad 10.2 Gen 9 2021 64GB Wifi - Chính Hãng Apple VN
											</h3>
											<p className='text-sm text-muted-foreground'>Màu sắc: Space Gray</p>
										</div>
										<div className='grid grid-cols-3 gap-8 items-center'>
											<div>5.890.000 VND</div>
											<div className='flex items-center gap-2'>
												<Button variant='outline' size='icon' className='h-8 w-8'>
													<Minus className='h-4 w-4' />
												</Button>
												<Input className='w-12 h-8 text-center' value='01' />
												<Button variant='outline' size='icon' className='h-8 w-8'>
													<Plus className='h-4 w-4' />
												</Button>
											</div>
											<div className='flex items-center gap-4'>
												<div>5.890.000 VND</div>
												<Button variant='ghost' size='icon'>
													<X className='h-4 w-4' />
												</Button>
											</div>
										</div>
									</div>
								</div>

								<div className='pt-6 border-t'>
									<h4 className='font-medium mb-4'>Khuyến mãi</h4>
									<div className='flex gap-2'>
										<Input placeholder='Nhập mã giảm giá' className='max-w-xs' />
										<Button>Áp dụng</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Up-sell section */}
					<Card className='mb-8'>
						<CardContent className='p-6'>
							<h2 className='text-lg font-semibold mb-4'>Nâng cấp sản phẩm của bạn</h2>
							<div className='flex gap-4 overflow-x-auto pb-4'>
								{[1, 2, 3].map((item) => (
									<div key={item} className='flex-shrink-0 w-64'>
										<Image
											src='/ipad02.webp'
											alt={`Upgrade option ${item}`}
											width={256}
											height={144}
											className='rounded-lg mb-2'
										/>
										<h3 className='font-medium'>iPad Pro 11 2021</h3>
										<p className='text-sm text-muted-foreground mb-2'>Từ 19.990.000 VND</p>
										<Button variant='outline' className='w-full'>
											Thêm vào giỏ hàng
										</Button>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Cross-sell section */}
					<Card>
						<CardContent className='p-6'>
							<h2 className='text-lg font-semibold mb-4'>Sản phẩm đề xuất</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
								{[1, 2, 3, 4, 5, 6].map((item) => (
									<div key={item} className='flex items-center gap-4'>
										<Image
											src='/ipad02.webp'
											alt={`Related product ${item}`}
											width={80}
											height={80}
											className='rounded-lg'
										/>
										<div>
											<h3 className='font-medium'>Apple Pencil (2nd Gen)</h3>
											<p className='text-sm text-muted-foreground mb-2'>2.990.000 VND</p>
											<Button variant='outline' size='sm'>
												Thêm
											</Button>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				<div className='lg:w-80 h-fit top-[20%] left-0 sticky'>
					<Card>
						<CardContent className='p-6 space-y-4'>
							<h2 className='font-medium flex gap-2 items-center'>
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
							<div className='flex justify-between text-sm'>
								<span>Tiền hàng không bao gồm thuế</span>
								<span>5.890.000 VND</span>
							</div>
							<div className='flex justify-between font-medium'>
								<span>Tổng tiền tạm tính:</span>
								<span>5.890.000 VND</span>
							</div>
							<Button className='w-full bg-red-600 hover:bg-red-700'>Mua ngay</Button>
							<p className='text-center text-sm text-muted-foreground'>
								Giao hàng tận nơi hoặc tại cửa hàng
							</p>
							<div className='grid grid-cols-2 gap-2'>
								<Button variant='outline' className='bg-blue-600 text-white hover:bg-blue-700'>
									<span className='block text-xs'>Duyệt nhanh</span>
								</Button>
								<Button variant='outline' className='bg-blue-600 text-white hover:bg-blue-700'>
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
