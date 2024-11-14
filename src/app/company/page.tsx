'use client'

import React from 'react';

import { ChildPageHead } from "@/components/ChildPageHeadImage";
import Image from "next/image";
import { TransitionImage } from "@/components/TransitionImage";

import TopImage from "@/assets/top1.jpg";
import CEOImage from "@/assets/top.jpg";

import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            <ChildPageHead src={TopImage} title="Company" subTitle="会社概要" />

            {/* About概要 */}
            <section className="bg-white py-16 px-4 pt-28 ml-auto mr-auto w-full relative max-w-screen-md">
                <FadeAndSlideScrollTriggerAnimation>
                    <dl className="flex items-start pl-2 border-solid">
                        <dt className="w-20">会社名</dt><dd>株式会社rush Forward</dd>
                    </dl>
                    <dl className="flex items-start pl-2 border-solid">
                        <dt className="w-20">本社住所</dt><dd>〒164-0013 東京都中野区弥生町1-24-7</dd>
                    </dl>
                    <dl className="flex items-start pl-2 border-solid">
                        <dt className="w-20">TEL</dt><dd>03-5354-5586</dd>
                    </dl>
                    <dl className="flex items-start pl-2 border-solid">
                        <dt className="w-20">FAX</dt><dd>03-5354-5587</dd>
                    </dl>
                    <dl className="flex items-start pl-2 border-solid">
                        <dt className="w-20">事業内容</dt><dd>開業プロデュース / 運営コンサルティング / ガストロノミーツーリズム事業 / 飲食店経営</dd>
                    </dl>
                    <dl className="flex items-start pl-2 border-solid">
                        <dt className="w-20">代表</dt><dd>重野 和稔</dd>
                    </dl>                    
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "90vw" } }}
                className="bg-white w-full p-3 sm:p-5 md:p-5 relative mt-0 ">

                <div className="container max-w-screen-md mx-auto px-4 py-8 gap-8 sm:gap-16 md:gap-24 flex flex-wrap justify-center">
                    {/* 4番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation delay={700} className="w-64 col-span-2 h-full">
                        <TransitionImage src={Sub4Img} parallaxSlideLength={80} alt="レストラン" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 5番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation delay={750} className=" w-64 col-span-2 h-full">
                        <TransitionImage src={Sub5Img}  parallaxSlideLength={100}  alt="ワイン" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 6番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation delay={750} className=" w-64 col-span-2 h-full">
                        <TransitionImage src={Sub6Img} alt="料理"  parallaxSlideLength={120}  className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>


            </FadeAndSlideScrollTriggerAnimation>


            </section>
            <section className="bg-slate-300 py-16 px-4 w-full relative">
                <FadeAndSlideScrollTriggerAnimation>
                    <div className="container mx-auto text-center">
                        <p className="text-title3 mt-8 mb-8">
                            代表の言葉
                        </p>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed text-center">
                            <span className="block">テキストテキストテキストテキスト</span>
                            <span className="block">テキストテキストテキストテキストテキストテキスト</span>
                            <span className="block">テキストテキストテキストテキストテキスト</span>
                            <span className="block">テキストテキストテキストテキストテキストテキストテキスト</span>
                            <span className="block">テキストテキストテキストテキスト</span>
                        </p>
                    </div>
                </FadeAndSlideScrollTriggerAnimation>
            </section>

        </div>
    );
};

export default ServicesPage;