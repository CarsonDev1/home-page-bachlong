'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import 'swiper/css';
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
 query getProducts(
  $search: String
  $filter: ProductAttributeFilterInput
  $sort: ProductAttributeSortInput
  $pageSize: Int
  $currentPage: Int
) {
  products(
    search: $search
    filter: $filter
    sort: $sort
    pageSize: $pageSize
    currentPage: $currentPage
  ) {
    items {
      ...ProductInterfaceField
    }
    aggregations {
      attribute_code
      count
      label
      options {
        count
        label
        value
        swatch_data {
          type
          value
        }
      }
      position
    }
    sort_fields {
      default
      options {
        label
        value
      }
    }
    total_count
    page_info {
      current_page
      page_size
      total_pages
    }  }
}
fragment ProductInterfaceField on ProductInterface {
 image_banner
  __typename
  sku
  uid
  name
  url_key
  url_suffix
  canonical_url
  stock_status
  categories {
    __typename
    name
    url_key
    url_path
    level
    uid
    position
    icon_image
    image
    path
  }
  id
  meta_description
  meta_keyword
  meta_title
  new_from_date
  new_to_date
  rating_summary
  review_count
  thumbnail {
    url
    position
  }
  image {
    url
  }
  price_range {
    ...PriceRangeField
  }
  ...CustomField
}
fragment CustomField on ProductInterface {
  color
  country_of_manufacture
  daily_sale {
    end_date
    entity_id
    sale_price
    sale_qty
    saleable_qty
    sold_qty
    start_date
    __typename
  }
  rating_summary_start {
    star_1
    star_2
    star_3
    star_4
    star_5
  }
  attributes {
    attribute_code
    label
    value
  }
}
fragment PriceRangeField on PriceRange {
  __typename
  maximum_price {
    ...ProductPriceField
  }
  minimum_price {
    ...ProductPriceField
  }
}
fragment ProductPriceField on ProductPrice {
  discount {
    amount_off
    percent_off
  }
  final_price {
    currency
    value
  }
  regular_price {
    currency
    value
  }
}
`;

const variables = {
	filter: {
		category_uid: {
			eq: 'NTc=',
		},
	},
	pageSize: 900,
	currentPage: 1,
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
	return data.data.products.items as Product[];
}

const ProductList: React.FC = () => {
	const { data, error, isLoading } = useQuery<Product[]>({
		queryKey: ['productListData'],
		queryFn: fetchProductListData,
		staleTime: 300000,
	});

	const [activeTab, setActiveTab] = useState<string>('iPhone 16');
	const [activeSubTab, setActiveSubTab] = useState<string>('');
	const [filteredData, setFilteredData] = useState<Product[]>([]);
	const [visibleCount, setVisibleCount] = useState<number>(10);

	const tabs = [
		{
			name: 'iPhone 16',
			subTabs: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16'],
		},
		{
			name: 'iPhone 15',
			subTabs: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15'],
		},
		{
			name: 'iPhone 14',
			subTabs: ['iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14'],
		},
		{
			name: 'iPhone 13',
			subTabs: ['iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 Mini'],
		},
		{
			name: 'iPhone 12',
			subTabs: ['iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 12 Mini'],
		},
		{
			name: 'iPhone 11',
			subTabs: ['iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11'],
		},
		{
			name: 'iPhone XS Max',
			subTabs: [],
		},
		{
			name: 'iPhone XS',
			subTabs: [],
		},
		{
			name: 'iPhone XR',
			subTabs: [],
		},
	];

	useEffect(() => {
		const filtered = data?.filter((product) => {
			const matchesTab =
				(activeTab === 'iPhone 16' && activeSubTab === 'iPhone 16') ||
				(activeTab === 'iPhone 15' && activeSubTab === 'iPhone 15') ||
				(activeTab === 'iPhone 14' && activeSubTab === 'iPhone 14') ||
				(activeTab === 'iPhone 13' && activeSubTab === 'iPhone 13') ||
				(activeTab === 'iPhone 12' && activeSubTab === 'iPhone 12') ||
				(activeTab === 'iPhone 11' && activeSubTab === 'iPhone 11') ||
				(activeTab === 'iPhone XS' && activeSubTab === '')
					? product.name.includes(activeTab) &&
					  !product.name.includes('Pro') &&
					  !product.name.includes('Plus') &&
					  !product.name.includes('Max') &&
					  !product.name.includes('Mini')
					: product.name.includes(activeTab);

			const matchesSubTab = activeSubTab
				? activeSubTab.includes('Pro Max')
					? product.name.includes('Pro Max')
					: activeSubTab.includes('Pro')
					? product.name.includes('Pro') && !product.name.includes('Pro Max')
					: product.name.includes(activeSubTab)
				: true;

			return matchesTab && matchesSubTab;
		});
		setFilteredData(filtered || []);

		const handleResize = () => {
			if (window.innerWidth < 768) {
				setVisibleCount(4);
			} else {
				setVisibleCount(10);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [data, activeTab, activeSubTab]);

	if (isLoading) {
		return (
			<div className='flex justify-center items-center h-64'>
				<div className='w-16 h-16 border-4 border-t-4 border-t-yellow-400 border-gray-200 rounded-full animate-spin'></div>
			</div>
		);
	}

	if (error) {
		return <div className='text-center text-red-500'>Error loading data</div>;
	}

	const visibleProducts = filteredData.slice(0, visibleCount);

	const loadMore = () => {
		setVisibleCount((prevCount) => prevCount + 5);
	};

	return (
		<Section>
			<Container>
				<div className='product-list'>
					<div className='upgrade-list'>
						<div className='container'>
							<div className='flex gap-2'>
								{window.innerWidth < 768 ? (
									<Swiper
										spaceBetween={10}
										slidesPerView='auto'
										breakpoints={{
											375: {
												slidesPerView: 3.7,
											},
											768: {
												slidesPerView: 3.2,
											},
										}}
									>
										{tabs.map((tab) => (
											<SwiperSlide key={tab.name}>
												<button
													key={tab.name}
													onClick={() => {
														setActiveTab(tab.name);
														setActiveSubTab('');
													}}
													className={`px-4 py-2 rounded-md ${
														activeTab === tab.name
															? 'bg-red-600 text-white'
															: 'bg-gray-200 text-black'
													}`}
												>
													{tab.name}
												</button>
											</SwiperSlide>
										))}
									</Swiper>
								) : (
									tabs.map((tab) => (
										<div key={tab.name} className='mb-2'>
											<button
												onClick={() => {
													setActiveTab(tab.name);
													setActiveSubTab('');
												}}
												className={`px-4 py-2 rounded-md ${
													activeTab === tab.name
														? 'bg-red-600 text-white'
														: 'bg-gray-200 text-black'
												}`}
											>
												{tab.name}
											</button>
										</div>
									))
								)}
							</div>

							{(tabs.find((tab) => tab.name === activeTab)?.subTabs?.length ?? 0) > 0 && (
								<div className='flex mb-3 sub-tab-list'>
									{tabs
										.find((tab) => tab.name === activeTab)
										?.subTabs.map((subTab) => (
											<button
												key={subTab}
												onClick={() => setActiveSubTab(subTab)}
												className={`px-3 py-1 rounded-md ${
													activeSubTab === subTab
														? 'bg-red-600 text-white'
														: 'bg-gray-200 text-black'
												} mx-1`}
											>
												{subTab}
											</button>
										))}
								</div>
							)}

							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
								{visibleProducts.map((product, index) => (
									<Link href={`/detail/${product.url_key}`} key={product.id}>
										<div className='border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between'>
											<div>
												<div className='flex justify-between items-center mb-2'>
													<span className='text-sm text-red-500'>Trả góp 0%</span>
												</div>
												<div className='mb-4'>
													<Image
														src={product.image.url}
														width={1400}
														height={1200}
														quality={100}
														alt={`product-${index}`}
														className='w-full h-auto'
													/>
												</div>
												<h4 className='text-lg font-semibold mb-2'>{product.name}</h4>
											</div>
											<div className=''>
												<div className='flex flex-col justify-between items-center'>
													<div className='text-xl font-bold text-red-600'>
														{product.price_range.minimum_price.final_price.value.toLocaleString(
															'vi-VN'
														)}{' '}
														{product.price_range.minimum_price.final_price.currency}
													</div>
													{product.attributes[0]?.value && (
														<div className='text-sm text-gray-500 line-through'>
															{Number(product.attributes[0].value).toLocaleString(
																'vi-VN'
															)}{' '}
															{product.price_range.minimum_price.final_price.currency}
														</div>
													)}
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
							{visibleCount < filteredData.length && (
								<div className='text-center mt-5'>
									<button
										onClick={loadMore}
										className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300'
									>
										Xem thêm
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default ProductList;
