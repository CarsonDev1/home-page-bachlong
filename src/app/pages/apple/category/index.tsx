import Container from '@/app/components/Container';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Category = ({ onCategoryClick }: { onCategoryClick: (index: number) => void }) => {
    const categoryImages = [
        '/apple/category-01.png',
        '/apple/category-02.png',
        '/apple/category-03.png',
        '/apple/category-04.png',
        '/apple/category-05.png',
        '/apple/category-06.png',
        '/apple/category-07.png',
        '/apple/category-08.png',
    ];

    const categoryLinks = {
        6: 'https://bachlongmobile.com/bnews/applecare-chinh-thuc-co-mat-tai-bach-long-mobile-bao-hanh-tat-ca-ke-ca-roi-vo-vao-nuoc/',
        7: 'https://bachlongmobile.com/bnews/bach-long-mobile-don-vi-tien-phong-ho-tro-apple-pay-tai-viet-nam/',
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
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                    {categoryImages.map((src, index) => renderCategoryItem(src, index))}
                </div>
            </Container>
        </div>
    );
}

export default Category;
