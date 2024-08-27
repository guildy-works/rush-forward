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
import HeadSection from "@/pages-components/service/GastroHeadSection";

import TopImage from "@/assets/top1.jpg";
import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";

import Sub1Img from "@/assets/img1.jpg";

import Gastro from "@/assets/images/gastro/gstro.webp"

import Gastro4 from "@/assets/images/gastro/gstro4.webp"
import Gastro5 from "@/assets/images/gastro/gstro5.jpg"
import Gastro6 from "@/assets/images/gastro/gstro6.jpg"


import MapImage from "@/assets/map.svg"

const ServicesPage = () => {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <HeadSection />
            <SectionType1 className="bg-color8 sm:mt-36 md:mt-48 lg:mt-56 relative" disableLine>

            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col <!--md:-mt-64--> md:flex-row" >
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0 items-start">
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-title4">
                            <span className="text-color2">ガストロノミーツーリズム</span>とは、その土地の気候や風土が生んだ<br />
                            食材・習慣・伝統・歴史などによって育まれた食を楽しみ、<br />
                            文化に触れる体験を目的とした旅行のことです。
                        </p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            欧米を中心に普及したスタイルで、<br />
                            世界的に注目度の高い日本の食文化を<br />
                            アピールすることでインバウンドを狙います。
                        </p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            日本全国・海外で220店舗以上の飲食店をプロデュース・コンサルティングしてきた経験や<br />
                            ノウハウ・コネクションを活かし、<br />
                            生産者から飲食店、ホテル、観光、交通などの各分野を横断して、<br />
                            ガストロノミーツーリズムを行います。
                        </p>
                    </SkewScrollTriggerAnimation>
                </div>
            </div>
            </SectionType1>

            <SectionType1 className="bg-white <!--sm:mt-36 md:mt-48 lg:mt-56--> relative" disableLine>

            <div className="w-full">
                <SkewScrollTriggerAnimation innerClassName="!bg-white">
                    <p className="text-color2 text-title2">日本の食文化を世界に発信するための取り組み</p>
                </SkewScrollTriggerAnimation>
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-row justify-center mt-auto pb-12 ml-0 ">
                    <div className="mt-6">
                        <TransitionImage className="max-w-sm w-full" src={Gastro} alt="ProduceImage" />
                    </div>
                    <SkewScrollTriggerAnimation innerClassName="!bg-white">
                        <ol className="text-size-p-wide pt-10">
                            <li className="mb-5 font-extrabold">
                                1. ガストロノミーツーリズムの企画立案
                                <ul className="ml-4 font-normal">
                                    <li>① 地域リサーチ（食材、観光、資源等）、市場動向調査、各都道府県・市町村の観光計画調査など</li>
                                    <li>② 企画立案、運営計画等、諸々の計画書作成</li>
                                </ul>
                            </li>
                            <li className="mb-5 font-extrabold">
                                2. チーム編成と関係各所との連携
                                <ul className="ml-4 font-normal">
                                    <li>① 関係省庁、市町村、公共団体等との連携・調整</li>
                                    <li>② 協力会社・関係各社との折衝・調整</li>
                                    <li>③ シェフ等の必要な人材の派遣・紹介</li>
                                </ul>
                            </li>
                            <li className="mb-5 font-extrabold">
                                3. 飲食店・ホテル・ツアーのプロデュース
                                <ul className="ml-4 font-normal">
                                    <li>① コンセプトメイク・メニュー開発</li>
                                    <li>② 教育研修</li>
                                    <li>③ PR 内容</li>
                                    <li>④ 関係施設のデザイン設計</li>
                                    <li>⑤ グラフィック関連全般</li>
                                    <li>⑥ イベント企画・実行</li>
                                    <li>⑦ 交通機関、PR 会社、旅行会社など関係各社の連携体制作り</li>
                                </ul>
                            </li>
                        </ol>
                    </SkewScrollTriggerAnimation>
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
