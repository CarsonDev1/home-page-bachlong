'use client';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
	Home,
	Clock,
	Shield,
	Gift,
	GraduationCap,
	Users,
	User,
	Link,
	HelpCircle,
	MessageSquare,
	LogOut,
	Menu,
} from 'lucide-react';
import Section from '@/app/components/Section';
import Container from '@/app/components/Container';
import { useRouter } from 'next/navigation';

const menuItems = [
	{ icon: Home, label: 'Trang chủ', path: '/profile' },
	{ icon: Clock, label: 'Lịch sử mua hàng', path: '/profile/history' },
	{ icon: Gift, label: 'Ưu đãi của bạn', path: '/profile/offers' },
	{ icon: Users, label: 'Hạng thành viên', path: '/profile/membership' },
	{ icon: User, label: 'Tài khoản của bạn', path: '/profile/account' },
	{ icon: HelpCircle, label: 'Hỗ trợ', path: '/profile/support' },
	{ icon: MessageSquare, label: 'Góp ý - Phản hồi', path: '/profile/feedback' },
	{ icon: LogOut, label: 'Thoát tài khoản', path: '/logout' },
];

type SidebarProps = {
	activeItem: string;
	setActiveItem: (label: string) => void;
	isMobile?: boolean;
};

function Sidebar({ activeItem, setActiveItem, isMobile = false }: SidebarProps) {
	const router = useRouter();

	const handleNavigation = (path: string) => {
		setActiveItem(path);
		router.push(path);
	};
	return (
		<nav className='space-y-2'>
			{menuItems.map((item, index) => (
				<Button
					key={index}
					variant='ghost'
					className={`w-full justify-start bg-white text-black transition-all ease-in-out duration-100 ${
						activeItem === item.path ? 'shadow-md border' : ''
					}`}
					onClick={() => handleNavigation(item.path)}
				>
					<item.icon className='mr-2 h-4 w-4' />
					{item.label}
				</Button>
			))}
		</nav>
	);
}

export default function Layout({ children }: { children: React.ReactNode }) {
	const [activeItem, setActiveItem] = useState('/profile');

	return (
		<Section>
			<Container>
				<div className='pt-44 lg:pt-24 flex flex-col lg:flex-row min-h-screen'>
					<aside className='hidden lg:block w-64 bg-white p-4 shadow'>
						<div className='sticky top-0 pt-4'>
							<Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
						</div>
					</aside>
					<main className='flex-1 lg:overflow-y-auto'>
						<div className='lg:sticky lg:top-0 z-10'>
							<div className='px-4 lg:pb-0 lg:pt-6 lg:px-6'>
								<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between'>
									<div className='flex items-center space-x-4 mb-4 sm:mb-0'>
										<Sheet>
											<SheetTrigger asChild>
												<Button variant='outline' size='icon' className='flex lg:hidden'>
													<Menu className='h-4 w-4' />
												</Button>
											</SheetTrigger>
											<SheetContent side='left' className='w-64 py-12 px-3'>
												<Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
											</SheetContent>
										</Sheet>
										<Avatar className='size-20'>
											<AvatarImage src='/profile/avatar.png' width={100} height={100} />
											<AvatarFallback>AT</AvatarFallback>
										</Avatar>
										<div>
											<h2 className='text-lg font-bold'>ANH VŨ</h2>
											<p className='text-sm text-gray-500'>0915606492</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='px-0 md:px-4 lg:pt-0 lg:pb-6 lg:px-6'>{children}</div>
					</main>
				</div>
			</Container>
		</Section>
	);
}
