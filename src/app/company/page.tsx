'use client'

import React from 'react';

import { ChildPageHead } from "@/components/ChildPageHeadImage";
import Image from "next/image";
import { TransitionImage } from "@/components/TransitionImage";
import HeadSection from "@/pages-components/company/HeadSection";
import { ContactSection } from "@/pages-components/top/ContactSection";

import TopImage from "@/assets/top1.jpg";
import CEOImage from "@/assets/top.jpg";

import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            <HeadSection />

            {/* About概要 */}
            <section className="bg-white py-16 px-4 pt-28 ml-auto mr-auto w-full relative max-w-screen-md">
                <FadeAndSlideScrollTriggerAnimation>
                    <div className="flex flex-row border-b">
                        <p className="text-title3 text-color2 w-44">会社名</p>
                        <p className="text-title3">株式会社rush Forward</p>
                    </div>
                    <div className="flex flex-row border-b mt-8">
                        <p className="text-title3 text-color2 w-44">本社住所</p>
                        <p className="text-title3">〒164-0013 東京都中野区弥生町1-24-7</p>
                    </div>
                    <div className="flex flex-row border-b mt-8">
                        <p className="text-title3 text-color2 w-44">TEL</p>
                        <p className="text-title3">03-5354-5586</p>
                    </div>
                    <div className="flex flex-row border-b mt-8">
                        <p className="text-title3 text-color2 w-44">FAX</p>
                        <p className="text-title3">03-5354-5587</p>
                    </div>
                    <div className="flex flex-row border-b mt-8">
                        <p className="text-title3 text-color2 w-44">事業内容</p>
                        <p className="text-title3">開業プロデュース<br />運営コンサルティング<br />ガストロノミーツーリズム事業<br />飲食店経営</p>
                    </div>
                    <div className="flex flex-row mt-8">
                        <p className="text-title3 text-color2 w-44">代表</p>
                        <p className="text-title3">重野 和稔</p>
                    </div>
                </FadeAndSlideScrollTriggerAnimation>

            </section>

            <ContactSection />

        </div>
    );
};

export default ServicesPage;