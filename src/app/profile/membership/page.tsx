import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Flag, User } from 'lucide-react';

export default function Membership() {
	return (
		<Card className='w-full mx-auto'>
			<CardContent className='p-6 flex flex-col gap-6'>
				<div className='flex justify-between items-start mb-4'>
					<div>
						<h2 className='text-lg font-semibold text-gray-700'>Anh Vũ</h2>
						<p className='text-3xl font-bold text-red-500'>335.000đ</p>
						<p className='text-sm text-gray-500'>(Điểm tích lũy từ 01/01/2023)</p>
					</div>
					<div className='flex items-center bg-gray-100 rounded-full px-3 py-1'>
						<User className='w-4 h-4 mr-1 text-gray-500' />
						<span className='text-sm font-medium text-gray-700'>B-NULL</span>
					</div>
				</div>
				<div className='relative mb-2'>
					<Progress value={1} className='h-2' />

					{/* Milestone markers */}
					<div className='absolute left-0 transform translate-x-1/4 -bottom-4 flex flex-col items-center'>
						<User className='w-4 h-4 text-gray-500' />
						<span className='text-xs text-gray-600'>B-New</span>
					</div>
					<div className='absolute left-1/3 transform -translate-x-1/2 -bottom-4 flex flex-col items-center'>
						<User className='w-4 h-4 text-gray-500' />
						<span className='text-xs text-gray-600'>B-Member</span>
					</div>
					<div className='absolute right-0 transform -translate-x-1/4 -bottom-4 flex flex-col items-center'>
						<Flag className='w-4 h-4 text-red-500' />
						<span className='text-xs text-gray-600'>B-Super-VIP</span>
					</div>
				</div>
				<p className='text-sm text-center text-gray-600'>
					Bạn cần mua thêm <span className='font-semibold'>2.665.000 đ</span> để lên hạng B-New
				</p>
			</CardContent>
		</Card>
	);
}
