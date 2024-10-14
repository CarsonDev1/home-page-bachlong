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
					<Progress value={11} className='h-2' />
					<User className='absolute left-0 bottom-full mb-1 w-4 h-4 text-gray-500' />
					<Flag className='absolute right-0 bottom-full mb-1 w-4 h-4 text-red-500' />
				</div>
				<p className='text-sm text-center text-gray-600'>
					Bạn cần mua thêm <span className='font-semibold'>2.665.000 đ</span> để lên hạng B-New
				</p>
			</CardContent>
		</Card>
	);
}
