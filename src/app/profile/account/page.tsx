import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';

export default function Account() {
	return (
		<div className='w-full mx-auto p-6 bg-white rounded-lg shadow'>
			<div className='space-y-4'>
				<div className='flex justify-between items-center py-2 border-b border-gray-200'>
					<span className='text-sm text-gray-600'>Họ và tên:</span>
					<div className='flex items-center'>
						<span className='text-sm text-gray-800'>Anh Vũ</span>
						<Pencil className='w-4 h-4 ml-2 text-gray-400 cursor-pointer' />
					</div>
				</div>

				<div className='flex justify-between items-center py-2 border-b border-gray-200'>
					<span className='text-sm text-gray-600'>Email:</span>
					<span className='text-sm text-gray-400'>Chưa cập nhật</span>
				</div>

				<div className='flex justify-between items-center py-2 border-b border-gray-200'>
					<span className='text-sm text-gray-600'>Giới tính:</span>
					<div className='flex items-center'>
						<span className='text-sm text-gray-400'>Chưa cập nhật</span>
						<Pencil className='w-4 h-4 ml-2 text-gray-400 cursor-pointer' />
					</div>
				</div>

				<div className='flex justify-between items-center py-2 border-b border-gray-200'>
					<span className='text-sm text-gray-600'>Số điện thoại:</span>
					<span className='text-sm text-gray-800'>0911806492</span>
				</div>

				<div className='flex justify-between items-center py-2 border-b border-gray-200'>
					<span className='text-sm text-gray-600'>Sinh nhật:</span>
					<span className='text-sm text-gray-800'>16/8/2001</span>
				</div>

				<div className='flex justify-between items-center py-2 border-b border-gray-200'>
					<span className='text-sm text-gray-600'>Ngày tham gia Bmember:</span>
					<span className='text-sm text-gray-800'>16/7/2024</span>
				</div>

				<div className='flex justify-between items-center py-2 border-b border-gray-200'>
					<span className='text-sm text-gray-600'>Tổng tiền tích lũy từ 01/01/2023:</span>
					<span className='text-sm text-gray-800'>335.000đ</span>
				</div>

				<div className='flex justify-between items-center py-2 border-b border-gray-200'>
					<span className='text-sm text-gray-600'>Tổng tiền đã mua sắm:</span>
					<span className='text-sm text-gray-800'>335.000đ</span>
				</div>

				<div className='flex justify-between items-center py-2 border-b border-gray-200'>
					<span className='text-sm text-gray-600'>Địa chỉ:</span>
					<div className='flex items-center'>
						<span className='text-sm text-gray-400'>Chưa có địa chỉ mặc định</span>
						<Pencil className='w-4 h-4 ml-2 text-gray-400 cursor-pointer' />
					</div>
				</div>

				<div className='flex justify-between items-center py-2'>
					<span className='text-sm text-gray-600'>Đổi mật khẩu</span>
				</div>
			</div>

			<Button className='w-full mt-6 bg-[#fff200] hover:bg-red-600 text-white font-bold'>
				Cập nhật thông tin
			</Button>
		</div>
	);
}
