'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { NewsItem, } from '@/pages-components/top/NewsSection';
import { SectionType1 } from '@/components/SectionType1';
import { Section1Title } from '@/components/Section1Title';
import { LinkButton } from '@/components/LinkButton';
import { fetchNewses,type News } from '@/models/client';
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';

export default function EventsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;
    const [totalPages,setTotalPages] = useState(0);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

    return (
        <div className="w-full flex flex-col justify-center bg-color7 p-3 sm:p-6 md:p-8">
            <div className="mx-auto px-4 sm:px-0 w-full max-w-6xl">
                <NewsSection />

                <div className="w-full flex justify-center mt-8">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}

const NewsSection = () => {
    const [newsItems, setNewsItems] = useState<News[]>([]);

    useEffect( () => {
        fetchNewses().then((response) => {
            setNewsItems(response);
        });
    }, []);

    return (
        <SectionType1 className="bg-color8">
            <div className="justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full">
                <Section1Title title="News" subTitle="　　" innerClassName="!bg-color8" />

                <div className="mx-auto w-full">
                    <FadeAndSlideScrollTriggerAnimation>
                        <h3 className="text-title4 mt-4 sm:mt-8">新着情報・お知らせ</h3>
                    </FadeAndSlideScrollTriggerAnimation>

                    <section className="w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 sm:gap-6 md:gap-8">
                        {newsItems.map((item, index) => (
                            <FadeAndSlideScrollTriggerAnimation key={index} innerClassName="size-full">
                                <NewsItem news={item} />
                            </FadeAndSlideScrollTriggerAnimation>
                        ))}
                    </section>


                </div>
            </div>
        </SectionType1>
    )
}


const Pagination = ({ currentPage, totalPages, onPageChange }: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) => {
    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
                前へ
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-color3 text-white' : 'bg-gray-200'
                        }`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
                次へ
            </button>
        </div>
    );
};
