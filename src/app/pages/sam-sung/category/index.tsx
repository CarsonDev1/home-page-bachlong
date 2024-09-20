import Container from '@/app/components/Container';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Category = ({ onCategoryClick }: { onCategoryClick: (index: number) => void }) => {
    const categoryImages = [
        '/sam-sung/category-01.png',
        '/sam-sung/category-02.png',
        '/sam-sung/category-03.png',
        '/sam-sung/category-04.png',
        '/sam-sung/category-05.png',
        '/sam-sung/category-06.png',
        '/sam-sung/category-07.png',
    ];

    const categoryLinks = {
        6: 'https://bachlongmobile.com/bnews/tra-truoc-0-dong-de-dang-len-doi-samsung-galaxy-voi-samsung-finance/',
        7: 'https://bachlongmobile.com/bnews/uu-dai-goi-samsung-care-khi-sam-samsung-galaxy/',
    };

    const renderCategoryItem = (src: string, index: number) => {
        const isLinkWrapped = index === 6 || index === 7;
        const content = (
            <div
                className='bg-white p-3 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105'
                onClick={() => !isLinkWrapped && onCategoryClick(index)}
            >
                <Image
                    src={src}
                    width={1200}
                    height={1100}
                    alt={`category-apple-${index + 1}`}
                    className='rounded-md object-cover'
                />
            </div>
        );

        if (isLinkWrapped) {
            return (
                <Link href={categoryLinks[index] || '/default-link'} key={index}>
                    {content}
                </Link>
            );
        }

        return (
            <div key={index}>
                {content}
            </div>
        );
    };

    return (
        <div className='py-4'>
            <Container>
                <div className='block lg:hidden'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        breakpoints={{
                            300: {
                                slidesPerView: 3.5
                            },
                            640: {
                                slidesPerView: 4.5,
                            },
                            1024: {
                                slidesPerView: 5.2,
                            },
                        }}
                    >
                        {categoryImages.map((src, index) => (
                            <SwiperSlide key={index}>
                                {renderCategoryItem(src, index)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='hidden lg:flex items-center gap-3'>
                    {categoryImages.map((src, index) => renderCategoryItem(src, index))}
                </div>
            </Container>
        </div>
    );
}

export default Category;
