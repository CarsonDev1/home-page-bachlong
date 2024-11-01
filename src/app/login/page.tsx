'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Component() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='bg-[#fff5e0] flex flex-col items-center justify-center p-4 relative pt-56 w-full'>
			{/* Background illustrations */}
			<div className='absolute top-0 left-0 w-full h-full hidden z-0 md:block'>
				<Image src='/bg-login.png' alt='Illustration' width={1920} height={1200} className='object-contain' />
			</div>
			{/* <div className='absolute right-0 bottom-0 w-72 h-72 hidden md:block'>
				<Image src='/placeholder.svg' alt='Illustration' width={300} height={400} className='object-contain' />
			</div> */}

			{/* Header Logo */}
			<div className='flex items-center gap-2 mb-8 relative z-10'>
				<Image src='/auth.png' alt='BachLong Mobile' width={150} height={40} className='h-10 w-auto' />
			</div>

			{/* Login Card */}
			<Card className='w-full max-w-md relative z-20'>
				<CardContent className='p-6'>
					<div className='text-center mb-6'>
						<h1 className='text-lg mb-1'>
							Chào mừng đến <span className='text-red-500 font-medium'>BachLong Mobile</span>
						</h1>
						<h2 className='text-2xl font-bold'>Đăng nhập</h2>
					</div>

					<form className='space-y-4'>
						<div className='space-y-2'>
							<label className='text-sm'>
								Số điện thoại/email <span className='text-red-500'>*</span>
							</label>
							<Input type='text' placeholder='test123@gmail.com' className='bg-[#f8fafc]' />
						</div>

						<div className='space-y-2'>
							<label className='text-sm'>
								Mật khẩu <span className='text-red-500'>*</span>
							</label>
							<div className='relative'>
								<Input
									type={showPassword ? 'text' : 'password'}
									placeholder='••••••'
									className='bg-[#f8fafc] pr-10'
								/>
								<button
									type='button'
									onClick={() => setShowPassword(!showPassword)}
									className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
								>
									{showPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
								</button>
							</div>
						</div>

						<div className='text-right'>
							<Link href='#' className='text-sm text-gray-500 hover:text-gray-700'>
								Quên mật khẩu?
							</Link>
						</div>

						<div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<span className='w-full border-t' />
							</div>
							<div className='relative flex justify-center text-xs uppercase'>
								<span className='bg-white px-2 text-muted-foreground'>Hoặc đăng nhập với</span>
							</div>
						</div>

						<button className='w-full flex items-center justify-center gap-2 border rounded-md p-2 hover:bg-gray-50'>
							<Image src='/gg.svg' alt='Google' width={20} height={20} className='w-5 h-5' />
							Google
						</button>

						<button className='w-full flex items-center justify-center gap-2 border rounded-md p-2 bg-[#fff]'>
							<Image src='/fb.svg' alt='Facebook' width={50} height={20} className='w-7 h-7' />
							Facebook
						</button>

						<Button className='w-full bg-blue-600 hover:bg-blue-700'>Đăng nhập</Button>

						<div className='text-center text-sm'>
							Bạn chưa có tài khoản?{' '}
							<Link href='/register' className='text-blue-600 hover:text-blue-700'>
								Đăng ký ngay
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>

			{/* Support buttons */}
			<div className='fixed right-4 bottom-4 flex flex-col gap-2'>
				<Button size='icon' className='rounded-full bg-yellow-400 hover:bg-yellow-500'>
					<span className='sr-only'>Support</span>
					<MessageCircle className='h-5 w-5' />
				</Button>
				<Button size='icon' className='rounded-full bg-blue-600 hover:bg-blue-700'>
					<span className='sr-only'>Chat</span>
					<MessageCircle className='h-5 w-5' />
				</Button>
			</div>
		</div>
	);
}
