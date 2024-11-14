'use client'

import React from 'react';

import { SectionBar } from '@/components/SectionBar';
import { ChildPageHead } from "@/components/ChildPageHeadImage";
import Image from "next/image";
import { TransitionImage } from "@/components/TransitionImage";
import AboutSection from "@/pages-components/about/AboutSection";
import { SectionType1 } from "@/components/SectionType1"
import { SkewScrollTriggerAnimation } from "@/components/SkewScrollTriggerAnimation"

import TopImage from "@/assets/top1.jpg";
import CEOImage from "@/assets/top.jpg";

import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            <AboutSection/>

            <SectionType1 className="bg-color8 sm:mt-36 md:mt-48 lg:mt-56 relative" disableLine>

            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col <!--md:-mt-64--> md:flex-row" >
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0">
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-color2 text-title2">代表挨拶</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-title4">これまで、日本全国や海外で220店舗以上の飲食店をプロデュースする中で、さまざまな出会いや学びを通じて、「食」が持つ大きな力に魅了されてきました。</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-title4">食を通じて人と人がつながり、地域が活気づく様子を目の当たりにするたびに、「もっと食を通じて新しい体験や感動を生み出したい」「地域を元気にするお手伝いがしたい」という想いが自然と深まっていったのです。</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-title4">
                            今後は、私たちの経験とノウハウを活かし、「ガストロノミーツーリズム」に力を入れていきます。日本の魅力を国内外に広め、多くの人に幸せな瞬間を届けることができるよう、挑戦を続けていくつもりです。
                        </p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-title4">
                            また、私たちはお互いを尊重し、支え合いながら進んでいける環境を大切にしています。社員一人ひとりが前向きに、楽しく働ける職場であることを心がけています。<br />
                            これからも新しい挑戦を通じて成長し、多くの皆さんと素晴らしい未来を創っていければと思っています。
                        </p>
                    </SkewScrollTriggerAnimation>
                </div>
            </div>

            </SectionType1>

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