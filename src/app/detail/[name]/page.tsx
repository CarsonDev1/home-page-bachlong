/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Section from '@/app/components/Section';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import Container from '@/app/components/Container';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FaCartPlus, FaCheck } from 'react-icons/fa';
import { LuTicket } from 'react-icons/lu';
import { MdOutlineAddBox } from 'react-icons/md';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

export interface Product {
	id: number;
	name: string;
	url_key: string;
	image: {
		url: string;
	};
	attributes: any;
	price_range: {
		minimum_price: {
			final_price: {
				value: number;
				currency: string;
			};
		};
	};
}

const query = `
query router($url:String!){route(url:$url){... on ConfigurableProduct{...ProductFields Installment_products image_banner categories{__typename name id uid level url_path parent_id}media_gallery{__typename url label disabled position ... on ProductVideo{video_content{video_provider video_url video_title media_type video_metadata}}}...PoductFiledConfigurable ...ConfigurableProductField options{...CustomizableOption}}... on SimpleProduct{...ProductFields image_banner __typename categories{__typename name uid level url_path}media_gallery{__typename url label disabled position ... on ProductVideo{video_content{video_provider video_url video_title media_type video_metadata}}}...PoductFiledSimple options{...CustomizableOption}}}}fragment PoductFiledSimple on ProductInterface{Installment_products attribute_set_id canonical_url category_for_product color country_of_manufacture created_at gift_message_available id manufacturer meta_description meta_keyword meta_title name new_from_date new_to_date only_x_left_in_stock options_container percent rating_summary review_count sku special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path url_suffix attributes{attribute_code label value}image{__typename disabled label position url}special_price price_range{__typename maximum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}}minimum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}}}short_description{html}description{html}}fragment PoductFiledConfigurable on ProductInterface{attribute_set_id category_for_product color country_of_manufacture created_at id manufacturer meta_description meta_keyword meta_title name options_container rating_summary sku special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path url_suffix accessories_bought_together{sku attribute_set_id canonical_url category_for_product color country_of_manufacture id manufacturer meta_description meta_keyword meta_title name new_from_date new_to_date options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}maximum_price{final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}old_products{sku attribute_set_id canonical_url category_for_product color id manufacturer meta_description meta_keyword meta_title name options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}maximum_price{final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}upsell_products{sku attribute_set_id canonical_url category_for_product color country_of_manufacture id manufacturer meta_description meta_keyword meta_title name options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}related_products{sku attribute_set_id canonical_url category_for_product color country_of_manufacture id manufacturer meta_description meta_keyword meta_title name options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}crosssell_products{name category_for_product color created_at id meta_title name options_container rating_summary sku special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path price_range{minimum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}regular_price{__typename currency value}}}attributes{attribute_code label value}image{disabled label position url}small_image{disabled label position url}...ConfigurableProductField}attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}regular_price{__typename currency value}}}review_count short_description{html}description{html}small_image{disabled label position url}thumbnail{disabled label position url}}fragment ConfigurableProductField on ConfigurableProduct{configurable_options{label attribute_code uid attribute_uid values{default_label label uid swatch_data{__typename value}}}configurable_product_options_selection{__typename configurable_options{attribute_code label uid values{__typename uid label is_use_default is_available}}}variants{attributes{code label uid value_index}product{__typename sku name daily_sale{sale_price}image{url}price_range{maximum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}}minimum_price{discount{__typename amount_off percent_off}final_price{__typename currency value}regular_price{__typename currency value}}}small_image{__typename disabled label position url}url_key}}}fragment CustomizableOption on CustomizableOptionInterface{... on CustomizableDropDownOption{option_id required sort_order title uid value{option_type_id price price_type title sort_order uid}}}fragment ProductFields on ProductInterface{daily_sale{end_date entity_id sale_price sale_qty saleable_qty sold_qty start_date __typename}}
`;

const variables = {
	url: 'iphone-16-plus-512gb-chinh-hang-vn-a',
};

async function fetchProductListData() {
	const response = await fetch('https://beta-api.bachlongmobile.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const data = await response.json();
	return data.data.route;
}

const DetailPage = () => {
	const { data } = useQuery<Product>({
		queryKey: ['productListData'],
		queryFn: fetchProductListData,
		staleTime: 300000,
	});

	if (!data) {
		return <div>Loading...</div>;
	}

	const productLine = data.attributes?.find((attr: any) => attr.attribute_code === 'dong_san_pham');
	console.log(productLine?.value);

	// const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

	const contentForProductLine = (
		<>
			<div className='rounded-tl-md rounded-tr-md bg-gradient-to-r from-yellow-400 to-red-600 p-2 text-lg font-semibold'>
				<div className='flex items-center gap-2'>
					<Image src='/fire.gif' width={30} height={30} alt='fire-gif' />
					<span className='text-white'>KHUYẾN MÃI HOT</span>
				</div>
				<div className='p-5 text-sm bg-gray-50 rounded-md shadow-md'>
					<div className='space-y-3'>
						<div className='flex'>
							<span className='font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit'>
								1
							</span>
							<span>
								<span className='font-bold'>[Tháng 9]:</span> TẾT APPLE - TẾT LỚN CHƠI LỚN: Cơ hội trúng
								iPhone 16 trị giá hơn {''}
								<span className='text-red-600 font-bold'>21.000.000đ</span> hoặc trạm sạc PISEN trị giá
								đến <span className='text-red-600 font-bold'>5.000.000đ</span>
							</span>
						</div>
						<div className='flex'>
							<span className='font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit'>
								2
							</span>
							<span>
								<span className='font-bold'>[Tháng 9]:</span> TẾT APPLE - TẾT LỚN CHƠI LỚN: Cơ hội trúng
								iPhone 16 trị giá hơn {''}
								<span className='text-red-600 font-bold'>21.000.000đ</span> hoặc trạm sạc PISEN trị giá
								đến <span className='text-red-600 font-bold'>5.000.000đ</span>
							</span>
						</div>
						<div className='flex'>
							<span className='font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit'>
								3
							</span>
							<span>
								<span className='font-bold'>[Tháng 9]:</span> TẾT APPLE - TẾT LỚN CHƠI LỚN: Cơ hội trúng
								iPhone 16 trị giá hơn {''}
								<span className='text-red-600 font-bold'>21.000.000đ</span> hoặc trạm sạc PISEN trị giá
								đến <span className='text-red-600 font-bold'>5.000.000đ</span>
							</span>
						</div>
						<div className='flex'>
							<span className='font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit'>
								4
							</span>
							<span>
								<span className='font-bold'>[Tháng 9]:</span> TẾT APPLE - TẾT LỚN CHƠI LỚN: Cơ hội trúng
								iPhone 16 trị giá hơn {''}
								<span className='text-red-600 font-bold'>21.000.000đ</span> hoặc trạm sạc PISEN trị giá
								đến <span className='text-red-600 font-bold'>5.000.000đ</span>
							</span>
						</div>
						<div className='flex'>
							<span className='font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1 px-2 text-xs rounded-full mr-2 shadow-lg transform transition-transform duration-300 hover:scale-105 h-fit'>
								5
							</span>
							<span>
								<span className='font-bold'>[Tháng 9]:</span> TẾT APPLE - TẾT LỚN CHƠI LỚN: Cơ hội trúng
								iPhone 16 trị giá hơn {''}
								<span className='text-red-600 font-bold'>21.000.000đ</span> hoặc trạm sạc PISEN trị giá
								đến <span className='text-red-600 font-bold'>5.000.000đ</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className='border border-slate-200 rounded-md flex flex-col shadow-lg'>
				<div className='rounded-tl-md rounded-tr-md bg-black text-white p-3 text-lg font-semibold'>
					<div className='flex gap-2 items-center'>
						<LuTicket className='text-primary' />
						<span className='text-primary'>TIỆN ÍCH ĐỘC QUYỀN</span>
					</div>
				</div>
				<div className='p-5 text-sm bg-gray-50 rounded-md shadow-md'>
					<div className='space-y-3'>
						<div className='flex'>
							<span className='font-bold mr-2'>✔️</span>
							<span>
								Giảm thêm <span className='font-bold text-red-600'>1.200.000đ</span> khi mua Gói Bảo
								Hành Toàn Diện - Lỗi Đổi NGAY.
							</span>
						</div>
						<div className='flex'>
							<span className='font-bold mr-2'>✔️</span>
							<span>
								Giảm thêm <span className='font-bold text-red-600'>1.200.000đ</span> khi mua Gói Bảo
								Hành Toàn Diện - Lỗi Đổi NGAY.
							</span>
						</div>
						<div className='flex'>
							<span className='font-bold mr-2'>✔️</span>
							<span>
								Giảm thêm <span className='font-bold text-red-600'>1.200.000đ</span> khi mua Gói Bảo
								Hành Toàn Diện - Lỗi Đổi NGAY.
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className='border border-slate-200 rounded-md flex flex-col shadow-lg'>
				<div className='rounded-tl-md rounded-tr-md bg-[#8f7c71] text-white p-3 text-lg font-semibold'>
					<div className='flex items-center gap-2 text-white font-bold'>
						<MdOutlineAddBox /> ƯU ĐÃI THÊM
					</div>
				</div>
				<div className='p-5 text-sm bg-gray-50 rounded-md shadow-md'>
					<div className='space-y-3'>
						<div className='flex gap-2'>
							<span className='font-boldmr-2 shadow-lg h-fit text-red-500'>➕</span>
							<span>
								Ưu đãi khi mua kèm Apple Watch giảm{' '}
								<span className='text-red-600 font-bold'>1.000.000đ</span>
							</span>
						</div>
						<div className='flex gap-2'>
							<span className='font-boldmr-2 shadow-lg h-fit text-red-500'>➕</span>
							<span>
								Ưu đãi khi mua kèm Macbook giảm <span className='text-red-600 font-bold'>500.000đ</span>
							</span>
						</div>
						<div className='flex gap-2'>
							<span className='font-boldmr-2 shadow-lg h-fit text-red-500'>➕</span>
							<span>
								Ưu đãi khi mua kèm Airpord giảm{' '}
								<span className='text-red-600 font-bold'>1.000.000đ</span>
							</span>
						</div>
						<div className='flex gap-2'>
							<span className='font-boldmr-2 shadow-lg h-fit text-red-500'>➕</span>
							<span>
								Ưu đãi khi mua kèm Ốp lưng giảm{' '}
								<span className='text-red-600 font-bold'>1.000.000đ</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);

	const alternativeContent = (
		<div>
			<h2>This is alternative content for other product lines.</h2>
		</div>
	);

	return (
		<div className='pt-32'>
			<Section>
				<Container>
					<div className='flex flex-col lg:flex-row md:gap-8 gap-4'>
						<div className='w-full h-full lg:w-[60%] flex flex-col gap-4 relative'>
							<div className='border border-slate-300 rounded-lg p-3'>
								<Swiper
									spaceBetween={10}
									navigation={{
										prevEl: '.swiper-button-prev',
										nextEl: '.swiper-button-next',
									}}
									// thumbs={{ swiper: thumbsSwiper }}
									modules={[Thumbs]}
									className='mb-2 main-swiper'
								>
									<SwiperSlide>
										<div className='w-full h-96 flex justify-center items-center'>
											<iframe
												width='1128'
												height='635'
												src='https://www.youtube.com/embed/eDqfg_LexCQ?autoplay=1&mute=1'
												title='Introducing iPhone 16 Pro | Apple'
												frameBorder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
												referrerPolicy='strict-origin-when-cross-origin'
												allowFullScreen
												className='object-contain'
											></iframe>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='w-full h-96 flex justify-center items-center'>
											<Image
												src='/product-02.webp'
												alt='product-02'
												width={1820}
												height={1200}
												className='rounded-lg w-full h-96 object-contain'
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='w-full h-96 flex justify-center items-center'>
											<Image
												src='/product-02.webp'
												alt='product-02'
												width={1820}
												height={1200}
												className='rounded-lg w-full h-96 object-contain'
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='w-full h-96 flex justify-center items-center'>
											<Image
												src='/product-02.webp'
												alt='product-02'
												width={1820}
												height={1200}
												className='rounded-lg w-full h-96 object-contain'
											/>
										</div>
									</SwiperSlide>
								</Swiper>
								<Swiper
									// onSwiper={setThumbsSwiper}
									spaceBetween={10}
									slidesPerView={4}
									freeMode={true}
									watchSlidesProgress={true}
									modules={[Thumbs]}
									className='mt-2 thumb-swiper'
								>
									<SwiperSlide>
										<Image
											src='/product-01.webp'
											width={500}
											height={500}
											alt='product-01'
											className='rounded-lg w-full h-full block object-contain'
										/>
									</SwiperSlide>
									<SwiperSlide>
										<Image
											src='/product-02.webp'
											width={500}
											height={500}
											alt='product-01'
											className='rounded-lg w-full h-full block object-contain'
										/>
									</SwiperSlide>
									<SwiperSlide>
										<Image
											src='/product-02.webp'
											width={500}
											height={500}
											alt='product-01'
											className='rounded-lg w-full h-full block object-contain'
										/>
									</SwiperSlide>
									<SwiperSlide>
										<Image
											src='/product-02.webp'
											width={500}
											height={500}
											alt='product-01'
											className='rounded-lg w-full h-full block object-contain'
										/>
									</SwiperSlide>
								</Swiper>
							</div>
							<div className='flex flex-col md:flex-row gap-2'>
								<div className='p-3 bg-white border border-slate-200 w-full md:w-1/2'>
									<h2 className='text-sm font-semibold mb-2'>Thông tin sản phẩm</h2>
									<span className='text-xs'>
										Máy mới 100% , chính hãng Apple Việt Nam. Bạch Long Mobile hiện là đại lý bán lẻ
										uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam
									</span>
									<span className='text-xs'>Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</span>
									<span className='text-xs'>
										1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại
										trung tâm bảo hành chính hãng Apple
									</span>
									<span className='text-xs'>Giá sản phẩm đã bao gồm VAT</span>
								</div>
								<div className='p-3 bg-white border flex flex-col gap-1 border-slate-200 w-full md:w-1/2'>
									<h2 className='text-sm font-semibold mb-2'>Có 7 cửa hàng có sản phẩm</h2>
									<span className='text-sm'>1900.63.64.69 - 136 Trần Phú, P.4, Q.5</span>
									<span className='text-sm'>1900.63.64.69 - 136 Trần Phú, P.4, Q.5</span>
									<span className='text-sm'>1900.63.64.69 - 136 Trần Phú, P.4, Q.5</span>
									<span className='text-sm'>1900.63.64.69 - 136 Trần Phú, P.4, Q.5</span>
								</div>
							</div>
						</div>

						<div className='w-full lg:w-1/2 flex flex-col gap-4 sticky top-16 self-start'>
							<h1 className='text-xl font-bold mb-4'>iPhone 16 Pro 512GB Chính Hãng 99%</h1>
							<div className='flex items-center gap-4'>
								<div className='flex flex-col items-center gap-1 border border-slate-300 py-2 px-6 rounded-md'>
									<span className='text-sm md:text-base'>256GB</span>
									<span className='text-sm md:text-base'>27.000.000 VNĐ</span>
								</div>
								<div className='flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 border-primary overflow-hidden'>
									<div className='custom-rounded bg-primary absolute top-0 -right-1 w-7 h-7 flex items-center justify-center'>
										<FaCheck className='flex items-center justify-center size-3 text-white' />
									</div>
									<div className='flex flex-col items-center'>
										<span className='text-sm md:text-base'>512GB</span>
										<span className='text-sm md:text-base'>27.000.000 VNĐ</span>
									</div>
								</div>
							</div>
							<h1 className='text-xl font-bold mb-4'>Chọn màu để xem giá và chi nhánh có hàng</h1>
							<div className='flex items-center flex-wrap gap-4'>
								<div className='flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 border-primary overflow-hidden'>
									<div className='custom-rounded bg-primary absolute top-0 -right-1 w-7 h-7 flex items-center justify-center'>
										<FaCheck className='flex items-center justify-center size-3 text-white' />
									</div>
									<Image
										src='/product-01.webp'
										width={40}
										height={40}
										alt='product-01'
										className='size-7 md:size-10'
									/>
									<div className='flex flex-col'>
										<span className='text-sm md:text-base'>Natural Titanium</span>
										<span className='text-sm md:text-base'>27.000.000 VNĐ</span>
									</div>
								</div>
								<div className='flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 overflow-hidden'>
									<Image
										src='/product-01.webp'
										width={40}
										height={40}
										alt='product-01'
										className='size-7 md:size-10'
									/>
									<div className='flex flex-col'>
										<span className='text-sm md:text-base'>Natural Titanium</span>
										<span className='text-sm md:text-base'>27.000.000 VNĐ</span>
									</div>
								</div>
								<div className='flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 overflow-hidden'>
									<Image
										src='/product-01.webp'
										width={40}
										height={40}
										alt='product-01'
										className='size-7 md:size-10'
									/>
									<div className='flex flex-col'>
										<span className='text-sm md:text-base'>Natural Titanium</span>
										<span className='text-sm md:text-base'>27.000.000 VNĐ</span>
									</div>
								</div>
								<div className='flex items-center gap-1 py-2 px-6 rounded-md bg-white relative border-2 overflow-hidden'>
									<Image
										src='/product-01.webp'
										width={40}
										height={40}
										alt='product-01'
										className='size-7 md:size-10'
									/>
									<div className='flex flex-col'>
										<span className='text-sm md:text-base'>Natural Titanium</span>
										<span className='text-sm md:text-base'>27.000.000 VNĐ</span>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-4 relative p-4 bg-slate-100 rounded-md'>
								<Image
									src='/payment.webp'
									width={1200}
									height={1000}
									alt='payment'
									className='absolute w-full h-full top-0 left-0 z-10 rounded-md'
								/>
								<div className='relative z-20 w-full flex justify-between items-center'>
									<p className='text-white text-2xl w-max flex justify-between items-center text-center gap-4'>
										<span className='flex line-through'>28.990.000 VNĐ</span>
										<span className='flex justify-center text-sm'>(Giá đã gồm VAT)</span>
									</p>
									{/* <span className='p-2 bg-[#C0E1FF] rounded-md flex justify-center text-center text-xs items-center text-[#0707FF] font-bold'>Góp hàng tháng: <br /> 2.100.000VNĐ</span> */}
								</div>
								<div className='flex items-center gap-4 z-20'>
									<div className='flex flex-col w-1/2 text-center items-center gap-1 py-2 px-2 rounded-md bg-white relative border-2 border-primary overflow-hidden'>
										<div className='custom-rounded bg-primary absolute top-0 -right-1 w-7 h-7 flex items-center justify-center'>
											<FaCheck className='flex items-center justify-center size-3 text-white' />
										</div>
										<span className='text-xs md:text-xs'>Mua BHTD</span>
										<span className='text-xs md:text-xs text-red-600 font-bold'>
											27.000.000 VNĐ
										</span>
									</div>
									<div className='flex flex-col w-1/2 text-center items-center gap-1 border border-slate-300 py-2 px-2 rounded-md bg-white'>
										<span className='text-xs md:text-xs'>Mua thẳng</span>
										<span className='text-xs md:text-xs text-red-600 font-bold'>
											27.000.000 VNĐ
										</span>
									</div>
								</div>
							</div>
							<Link href='https://bachlongmobile.com/renew/'>
								<Image
									src='/giovang.jpg'
									width={800}
									height={200}
									alt='giovang'
									className='rounded-md'
								/>
							</Link>
							<div className='border border-slate-200 rounded-md flex flex-col shadow-lg'>
								{productLine?.value === 'Điện Thoại-MTB-Laptop'
									? contentForProductLine
									: alternativeContent}
							</div>
							<div className='flex items-center gap-1'>
								<button className='relative w-2/3 h-16 px-4 rounded-md bg-red-600 isolation-auto z-10 border-2 border-red-500 before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:text-red-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-white bg-red-600 border border-red-500 rounded-lg shadow-sm gap-x-2 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1'>
									<span className='text-xl'>Mua ngay</span>
									<span>Giao hàng tận nơi hoặc tại cửa hàng</span>
								</button>
								<button className='relative w-1/3 h-16 px-4 rounded-md bg-white isolation-auto z-10 border-2 border-red-500 before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:bg-red-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-red-500 before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-red-600 border border-red-500 rounded-lg shadow-sm gap-x-2 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1 hover:text-white'>
									<FaCartPlus className='size-5' />
									<span className='text-xs'>Thêm vào giỏ hàng</span>
								</button>
							</div>
							<div className='flex gap-2 w-full'>
								<Link href='/payment' className='w-1/2'>
									<button className='relative py-2 px-4 rounded-md bg-blue-600 isolation-auto z-10 border-2 border-blue before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:text-blue-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-white bg-blue-600 border border-blue-500 rounded-lg shadow-sm gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1 w-full'>
										<span className='text-xl'>Trả góp 0%</span>
										<span className='text-xs'>Duyệt nhanh qua điện thoại</span>
									</button>
								</Link>
								<button className='relative py-2 px-4 rounded-md bg-blue-600 isolation-auto z-10 border-2 border-blue before:absolute before:w-full before:transition-all before:duration-500 before:ease-in-out before:hover:w-full hover:text-blue-600 before:-right-full before:hover:right-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-110 overflow-hidden before:hover:duration-500 inline-flex items-center justify-center text-sm font-semibold text-white bg-blue-600 border border-blue-500 rounded-lg shadow-sm gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none flex-col gap-1 w-1/2'>
									<span className='text-xl'>Trả góp 0% qua thẻ</span>
									<span className='text-xs'>Visa, Master Card, JCB, AMEX</span>
								</button>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</div>
	);
};

export default DetailPage;
