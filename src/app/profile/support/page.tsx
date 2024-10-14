import { Headphones, CheckCircle, MessageCircle, Mail } from 'lucide-react';

export default function Support() {
	return (
		<div className='w-full mx-auto p-0 lg:p-4'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='flex items-center shadow-sm p-4 border rounded-md'>
					<Headphones className='w-6 h-6 text-gray-600 mr-2' />
					<div>
						<p className='text-sm text-gray-600'>Tư vấn mua hàng (8h00 - 21h30)</p>
						<p className='text-base font-semibold text-blue-600'>1900.63.64.69</p>
					</div>
				</div>
				<div className='flex items-center shadow-sm p-4 border rounded-md'>
					<CheckCircle className='w-6 h-6 text-gray-600 mr-2' />
					<div>
						<p className='text-sm text-gray-600'>Bảo hành (8h00 - 22h00)</p>
						<p className='text-base font-semibold text-blue-600'>1900.63.69.81</p>
					</div>
				</div>
				<div className='flex items-center shadow-sm p-4 border rounded-md'>
					<MessageCircle className='w-6 h-6 text-gray-600 mr-2' />
					<div>
						<p className='text-sm text-gray-600'>Khiếu nại (8h00 - 22h00)</p>
						<p className='text-base font-semibold text-blue-600'>0938.038.038</p>
					</div>
				</div>
				<div className='flex items-center shadow-sm p-4 border rounded-md'>
					<Mail className='w-6 h-6 text-gray-600 mr-2' />
					<div>
						<p className='text-sm text-gray-600'>Email</p>
						<p className='text-base font-semibold text-blue-600'>director@bachlongmobile.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}
