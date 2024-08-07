'use client'

import React from 'react';
import { FadeAndSlideScrollTriggerAnimation } from '@/components/FadeAndSlideScriollTriggerAnimation';
import { SectionBar } from '@/components/SectionBar';
import { ChildPageHead } from "@/components/ChildPageHeadImage";
import Image from "next/image";
import { TransitionImage } from "@/components/TransitionImage";

import TopImage from "@/assets/top1.jpg";
import CEOImage from "@/assets/top.jpg";

import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            <ChildPageHead src={TopImage} title="About" subTitle="理念" />

            {/* About概要 */}
            <section className="bg-white py-16 px-4 pt-28 w-full relative">
                <div className="absolute top-[-10%] left-1/2 translate-x-[-50%] shadow-[0px -2px 5px rgba[0,0,0,0.5]]">
                    <FadeAndSlideScrollTriggerAnimation>
                        <div className="container mx-auto text-left bg-white p-7">
                            <p className="text-title3 mt-0 mb-8 text-center text-size1">
                                飲食店を通じて日本を、世界を元気にする会社
                            </p>
                            <p className="text-title3 mt-8 mb-0 text-center text-size2">
                                Rush Forward
                            </p>                            
                        </div>
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
                <FadeAndSlideScrollTriggerAnimation>
                    <div className="container mx-auto text-center">
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            <span className="block">私達は街を創る飲食の企画集団です。</span>
                            <span className="block">日本全国・海外を含めて220 店舗以上の飲食店をお手伝いしてきました。</span>
                            <span className="block">そのノウハウを活かし、観光立国JAPANの実現に向けて、日本の食文化・魅力を世界に発信していきます</span>
                        </p>
                    </div>
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

const serviceItems = [
    {
        image: "/img2.jpg",
        title: "マッチング・コンサルティング",
        description: "年齢が近い参加者同士の合コンをセッティング。司会進行、席替え、ゲームなどで和やかな雰囲気を演出し、特に女性が安心できる環境づくりに注力しています。"
    },
    {
        image: "/img.jpg",
        title: "Match婚・イベント開催",
        description: "婚活イベントから地域貢献活動まで、多様な出会いの機会を提供。新しい経験、学び、地域社会との繋がりを深める場として機能します。"
    },
    {
        image: "/option-photo.jpg",
        title: "撮影",
        description: "プロのカメラマンがあなたのお気に入りの場所でプロフィールを撮影します。福山市内(内海以外）は無料で出張。お気に入りの場所を教えてください。"
    },
    {
        image: "/option-makeup.jpg",
        title: "メイク講座",
        description: "メイク初心者向けの個別講座を提供。自信を持ってお洒落を楽しめるよう、丁寧にサポートします。"
    },
    {
        image: "/option-fashion.jpg",
        title: "メンズコーディネーター",
        description: "Match-Bond専属のコーディネーターが、ファッション、ヘアセット、メンズメイク、スキンケアなど、男性の総合的な魅力向上をサポートします。"
    },
    {
        image: "/option-uranai.jpg",
        title: "占いサービス",
        description: "高評価の占い師COCOさんによる占いサービス。10分1,000円からご利用いただけます。"
    }
];

const features = [
    "多様な出会いの機会を提供",
    "安心・安全なサービス提供",
    "総合的な魅力向上サポート"
];

export default ServicesPage;