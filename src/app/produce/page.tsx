'use client'

import React from 'react';
import Image from 'next/image';
import { FadeAndSlideScrollTriggerAnimation } from '@/components/FadeAndSlideScriollTriggerAnimation';
import { ChildPageHead } from "@/components/ChildPageHeadImage";
import { TransitionImage } from "@/components/TransitionImage";
import { SkewScrollTriggerAnimation } from "@/components/SkewScrollTriggerAnimation"
import { SectionType1 } from "@/components/SectionType1"
import { Section1Title } from "@/components/Section1Title"

import { ContactSection } from "@/pages-components/top/ContactSection";
import {ServicesSection} from "@/pages-components/service/ServicesSection";
import HeadSection from "@/pages-components/service/ProduceHeadSection";

import TopImage from "@/assets/top1.jpg";
import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";

import Sub1Img from "@/assets/img1.jpg";

import Gastro4 from "@/assets/images/gastro/gstro4.webp"
import Gastro5 from "@/assets/images/gastro/gstro5.jpg"
import Gastro6 from "@/assets/images/gastro/gstro6.jpg"


import MapImage from "@/assets/map.svg"

const ServicesPage = () => {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <HeadSection />
            <SectionType1 className="bg-white sm:mt-36 md:mt-48 lg:mt-56 relative" disableLine>

            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col <!--md:-mt-64--> md:flex-row" >
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0  items-start">
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-color2 text-title2">これから飲食店の開業をお考えですか？</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">飲食店の新規開業は、ワクワクする気持ちと共に、不安、疑問が混在されているものと思います。</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            飲食店の新規開業は、ワクワクする気持ちと共に、不安、疑問が混在されているものと思います。<br />
                            飲食店開業をお考えの方が、まず行うべきことである事業計画などの事前準備から、<br />
                            資金調達の方法、物件の探し方、内外装について、必要な厨房機器や設備と選び方、<br />
                            国内・国外で 220店舗 以上のコンサルティング経験を活かして、<br />
                            皆様の不安・疑問が解消されますよう、詳しくご説明・ご案内いたします。</p>
                    </SkewScrollTriggerAnimation>
                </div>
                <div className="mt-6">
                    <TransitionImage className="max-w-sm w-full rounded-3xl" src={MapImage} alt="ProduceImage" />
                </div>
            </div>

            </SectionType1>

            <SectionType1 className="bg-white <!--sm:mt-36 md:mt-48 lg:mt-56--> relative" disableLine>

            <div className="flex justify-between w-full">
                <TransitionImage className="max-w-sm w-full h-2/4 rounded-3xl" src={Sub1Img} alt="ProduceImage" />
                <div className="flex flex-col">
                    <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0  items-start">
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                            <p className="text-color2 text-title2">開業プロデュース</p>
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                            <ul className="text-size-p-wide">
                                <li>コンセプト企画</li>
                                <li>業態開発</li>
                                <li>メニュー開発［レシピ作成、調理指導等］</li>
                                <li>出店戦略［物件探し、マーケット・リサーチ含］</li>
                                <li>資金調達［事業計画書作成含］</li>
                                <li>店舗設計デザイン［パース含］</li>
                                <li>グラフィックデザイン［ロゴ、メニュー、ポップ等］</li>
                                <li>スタッフ教育［接客サービス、帳票関係、労働意識の改善等］</li>
                            </ul>
                        </SkewScrollTriggerAnimation>
                    </div>
                    <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0  items-start">
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                            <p className="text-color2 text-title2">運営コンサルティング</p>
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                            <ul className="text-size-p-wide">
                                <li>赤字店舗立て直し［集客できるメニュー開発、スタッフ教育、 FLコスト等の見直し、オペレーションの改善等］</li>
                                <li>業態変更・リニューアルの前面サポート</li>
                                <li>運営管理</li>
                                <li>運営委託［入店指導含］</li>
                                <li>人的支援［キッチン、ホール］</li>
                                <li>店舗設計デザイン［パース含］</li>
                                <li>フランチャイズ・ライセンス本部代行</li>
                            </ul>
                        </SkewScrollTriggerAnimation>
                    </div>
                </div>
            </div>
                <div className="w-full flex flex-wrap gap-8 sm:gap-20 p-3 sm:p-5 md:p-8 justify-between">
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full mt-12" >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={25} src={Gastro4} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto md:ml-0 md:mt-32"  >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={60} src={Gastro5} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full"  >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro6} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </SectionType1>

            <ContactSection />
        </div>
    );
};

export default ServicesPage;
