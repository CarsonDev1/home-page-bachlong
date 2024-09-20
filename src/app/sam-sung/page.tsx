/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useRef, useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Banner from '../pages/sam-sung/banner';
import Category from '../pages/sam-sung/category';
import ProductList from '../pages/sam-sung/product';

const SamSung = () => {
    const productRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [showStickyCategory, setShowStickyCategory] = useState(false);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
    const categoryRef = useRef<HTMLDivElement | null>(null);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    const scrollToCategory = (index: number) => {
        if (productRefs.current[index]) {
            const element = productRefs.current[index];
            const topPosition = element.getBoundingClientRect().top + window.scrollY - 200;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
            setActiveCategoryIndex(index);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(true);

            const scrollPosition = window.innerHeight + window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            const atBottom = scrollPosition >= documentHeight;
            setIsAtBottom(atBottom);

            const lastProductRef = productRefs.current[productRefs.current.length - 1];
            const pastLastProduct = lastProductRef ? scrollPosition > lastProductRef.getBoundingClientRect().bottom + window.scrollY : false;

            const firstProductRef = productRefs.current[0];
            const extraPixels = -600;
            const pastFirstProduct = firstProductRef ? scrollPosition < firstProductRef.getBoundingClientRect().top + window.scrollY - extraPixels : false;

            if (atBottom) {
                setShowStickyCategory(false);
            } else {
                setShowStickyCategory(!pastLastProduct && !pastFirstProduct);
            }
        };

        const categoryObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        setShowStickyCategory(true);
                    } else {
                        setShowStickyCategory(false);
                    }
                });
            },
            { threshold: 0.8 }
        );

        const productObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = productRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (entry.isIntersecting) {
                        setActiveCategoryIndex(index);
                    }
                });
            },
            { threshold: 0.8 }
        );

        if (categoryRef.current) {
            categoryObserver.observe(categoryRef.current);
        }

        productRefs.current.forEach((ref) => {
            if (ref) productObserver.observe(ref);
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (categoryRef.current) {
                categoryObserver.unobserve(categoryRef.current);
            }
            productRefs.current.forEach((ref) => {
                if (ref) productObserver.unobserve(ref);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, [productRefs, categoryRef]);

    const categories = [
        { name: 'Sản phẩm mới' },
        { name: 'Galaxy Z' },
        { name: 'Galaxy S' },
        { name: 'Galaxy A' },
        { name: 'Galaxy Tab' },
        { name: 'Galaxy Watch | Buds' },
        { name: 'Phụ kiện' }
    ];

    return (
        <div className='bg-[#FFFCEE]'>
            <Banner />
            <div ref={categoryRef}>
                <Category onCategoryClick={scrollToCategory} />
            </div>
            <ProductList productRefs={productRefs} />

            {showStickyCategory && hasScrolled && !isAtBottom && (
                <div className={`fixed flex flex-row lg:flex-col gap-3 w-full lg:w-32 top-48 md:top-40 lg:top-1/3 left-0 lg:left-4 z-50 animate-none lg:animate-slide-in ${showStickyCategory ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="hidden lg:flex flex-col gap-2">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`group py-2 px-4 rounded-lg cursor-pointer border border-black transition-all duration-300 ease-in-out hover:bg-black sm:w-24 md:w-28 lg:w-32 ${activeCategoryIndex === index ? 'bg-black text-white' : ''}`}
                                onClick={() => scrollToCategory(index)}
                            >
                                <p className={`text-center text-sm font-semibold group-hover:text-white ${activeCategoryIndex === index ? 'text-white' : ''}`}>
                                    {category.name}
                                </p>
                            </div>

                        ))}
                    </div>
                    <div className="lg:hidden flex w-full bg-white shadow-md border border-slate-200">
                        <Swiper spaceBetween={10} slidesPerView={6}>
                            {categories.map((category, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        key={index}
                                        className={`py-4 px-3 rounded-md cursor-pointer ${activeCategoryIndex === index ? 'bg-primary' : 'bg-white'} sm:w-24 md:w-28 lg:w-32`}
                                        onClick={() => scrollToCategory(index)}
                                    >
                                        <p className='text-center text-sm font-semibold'>{category.name}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SamSung;
