'use client'

import React from 'react';
import { FadeAndSlideScrollTriggerAnimation } from '@/components/FadeAndSlideScriollTriggerAnimation';
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
                        <p className="text-title4">飲食店の新規開業は、ワクワクする気持ちと共に、不安、疑問が混在されているものと思います。</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-title4">
                            飲食店の新規開業は、ワクワクする気持ちと共に、不安、疑問が混在されているものと思います。<br />
                            飲食店開業をお考えの方が、まず行うべきことである事業計画などの事前準備から、<br />
                            資金調達の方法、物件の探し方、内外装について、必要な厨房機器や設備と選び方、<br />
                            国内・国外で 220店舗 以上のコンサルティング経験を活かして、<br />
                            皆様の不安・疑問が解消されますよう、詳しくご説明・ご案内いたします。</p>
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