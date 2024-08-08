'use client'

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from "@/components/FadeAndSlideScriollTriggerAnimation";
import { SectionBar } from "@/components/SectionBar";
import { SkewScrollTriggerAnimation } from "@/components/SkewScrollTriggerAnimation";
import { newsItems } from "@/pages-components/events/eventsMock";
import { NewsSection } from '@/pages-components/top/NewsSection';

export default function EventsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;
    const totalPages = Math.ceil(newsItems.length / eventsPerPage);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = newsItems.slice(indexOfFirstEvent, indexOfLastEvent);

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
const EventCard: React.FC<{ event: any }> = ({ event }) => {
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <FadeAndSlideScrollTriggerAnimation
            className=" cursor-pointer"
            innerClassName="flex flex-col h-full drop-shadow-md rounded-lg overflow-hidden transition-all bg-white hover:drop-shadow-2xl"
        >

            <img src={event.eyeCatch} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-grow">
                <p className="text-sm text-gray2 mb-2">{formattedDate}</p>
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-grey1 text-base">{event.summary}</p>
            </div>

            <div className="px-4 py-2 text-right mt-auto">
                <Link href={"/events/" + event.id} className="text-font2"　>詳細を見る</Link>
            </div>

        </FadeAndSlideScrollTriggerAnimation>
    );
};