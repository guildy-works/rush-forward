'use client'

import React from 'react';
import { FadeAndSlideScrollTriggerAnimation } from '@/components/FadeAndSlideScriollTriggerAnimation';
import { SectionBar } from '@/components/SectionBar';
import { ChildPageHead } from "@/components/ChildPageHeadImage";
import { TransitionImage } from "@/components/TransitionImage";
import { ContactSection } from "@/pages-components/top/ContactSection";

import TopImage from "@/assets/top1.jpg";

import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";

const ServicesPage = () => {
    return (
        <div className="bg-color2 min-h-screen">

            <ChildPageHead src={TopImage} title="Service" subTitle="事業" />

            {/* About概要 */}
            <section className="bg-white py-16 px-4 pt-28 w-full relative">
                <div className="absolute top-[-10%] left-1/2 translate-x-[-50%] shadow-[0px -2px 5px rgba[0,0,0,0.5]]">
                    <FadeAndSlideScrollTriggerAnimation>
                        <div className="container mx-auto text-left bg-white p-7">
                            <p className="text-title3 mt-0 mb-8 text-center text-size1">
                                私達は街を創る飲食の企画集団です。
                            </p>                          
                        </div>
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
                <FadeAndSlideScrollTriggerAnimation>
                    <div className="container mx-auto text-center">
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            <span className="block">飲食店を開業される皆様の夢と熱い想いに寄り添い、</span>
                            <span className="block">皆様が永くご店舗を経営していただけるよう、</span>
                            <span className="block">しっかりサポートさせていただきます。</span>
                        </p>
                    </div>
                </FadeAndSlideScrollTriggerAnimation>

                <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "90vw" } }} className="bg-white w-full p-3 sm:p-5 md:p-5 relative mt-0 ">

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

            {/* サービス一覧 */}
            <section className="py-24 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-color3">提供サービス</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {serviceItems.map((item, index) => (
                            <FadeAndSlideScrollTriggerAnimation key={index}>
                                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                                    <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                                    <p className="text-2xl font-semibold mb-4 text-gray-800">{item.subtitle}</p>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </FadeAndSlideScrollTriggerAnimation>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};

const serviceItems = [
    {
        image: "@/assets/img4.png",
        title: "Producing / Consulting",
        subtitle: "プロデュース・コンサルティング部門",
        description: "運営コンサルティング・開業プロデュースを中心に、様々なサポートを行っております。"
    },
    {
        image: "/img.jpg",
        title: " Gastronomy Tourism",
        subtitle: "ガストロノミーツーリズム部門",
        description: "観光立国として日本を持続的に活性化するため、世界中からフーディーズを集めます！"
    },
    {
        image: "/option-photo.jpg",
        title: "Hotel",
        subtitle: "ホテルプロデュース・再生部門",
        description: "地元の食材や資源を活用し、他の宿泊施設では体験できないような唯一無二の宿泊施設を創ります。"
    },
    {
        image: "/option-makeup.jpg",
        title: "Restaurant",
        subtitle: "飲食店部門",
        description: "紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキスト"
    }
];

const features = [
    "多様な出会いの機会を提供",
    "安心・安全なサービス提供",
    "総合的な魅力向上サポート"
];

export default ServicesPage;