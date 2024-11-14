'use client'

import React from 'react';
import Image from 'next/image';
import { ChildPageHead } from "@/components/ChildPageHeadImage";
import { TransitionImage } from "@/components/TransitionImage";
import { SectionType1 } from "@/components/SectionType1"
import { Section1Title } from "@/components/Section1Title"

import { ContactSection } from "@/pages-components/top/ContactSection";
import { ServicesSection } from "@/pages-components/service/ServicesSection";
import HeadSection from "@/pages-components/service/GastroHeadSection";

import TopImage from "@/assets/top1.jpg";
import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";

import Sub1Img from "@/assets/img1.jpg";

import Gastro from "@/assets/images/gastro/gstro.webp"
import Gastro1 from "@/assets/images/gastro/gstro1.webp"
import Gastro2 from "@/assets/images/gastro/gstro2.jpg"
import Gastro3 from "@/assets/images/gastro/gstro3.webp"
import Gastro4 from "@/assets/images/gastro/gstro4.webp"
import Gastro5 from "@/assets/images/gastro/gstro5.jpg"
import Gastro6 from "@/assets/images/gastro/gstro6.jpg"
import Gastro7 from "@/assets/images/gastro/gstro7.webp"
import Gastro8 from "@/assets/images/gastro/gstro8.jpg"
import Gastro9 from "@/assets/images/gastro/gstro9.jpg"
import Gastro10 from "@/assets/images/gastro/gstro10.jpg"
import Gastro11 from "@/assets/images/gastro/gstro11.webp"
import Gastro12 from "@/assets/images/gastro/gstro12.webp"


import MapImage from "@/assets/map.svg"
import { SkewScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation';
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';

const ServicesPage = () => {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <HeadSection />
            <SectionType1 className="bg-color8 sm:mt-36 md:mt-48 lg:mt-56 relative" disableLine>

                <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col <!--md:-mt-64--> md:flex-row" >
                    <div className="gap-8 sm:gap-8 md:gap-12 flex flex-row justify-center mt-auto pb-12 ml-0 ">
                        <div className="text-left">
                            <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                                <p className="text-p">
                                    <span className="text-color2">ガストロノミーツーリズム</span>とは、その土地の気候や風土が生んだ<br />
                                    食材・習慣・伝統・歴史などによって育まれた食を楽しみ、<br />
                                    文化に触れる体験を目的とした旅行のことです。
                                </p>
                                <p className="text-p mt-10">
                                    欧米を中心に普及したスタイルで、<br />
                                    世界的に注目度の高い日本の食文化を<br />
                                    アピールすることでインバウンドを狙います。
                                </p>
                            </SkewScrollTriggerAnimation>
                        </div>
                        <div className="-mt-64">
                            <TransitionImage className="max-w-sm w-full" src={Gastro} alt="ProduceImage" />
                        </div>

                    </div>
                </div>
            </SectionType1>

            <SectionType1 className="bg-white <!--sm:mt-36 md:mt-48 lg:mt-56--> relative" disableLine>
                <div className="w-full text-center mb-28">
                    <SkewScrollTriggerAnimation innerClassName="!bg-white">
                        <p className="text-color2 text-title2 mb-10">豊富なノウハウで実現するガストロノミーツーリズム</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-white">
                        <p className="text-p">
                            日本全国・海外で220店舗以上の飲食店をプロデュース・コンサルティングしてきた経験やノウハウ・コネクションを活かし、<br />
                            生産者から飲食店、ホテル、観光、交通などの各分野を横断して、ガストロノミーツーリズムを行います。
                        </p>
                    </SkewScrollTriggerAnimation>
                </div>
                <div className="flex justify-between w-full">
                    <div className="gap-8 sm:gap-8 md:gap-12 mt-auto pb-12 ml-0">
                        <div>
                            <div className="flex p-5 mb-7">

                                <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">① ガストロノミーツーリズムの企画立案</p>
                                    <p className="text-p">
                                        これまでの飲食店プロデュースでの市場調査やコンセプト開発のノウハウを基に、ガストロノミーツーリズムの成功に欠かせない企画立案を行います。<br />
                                        地域の食材や観光資源を活用し、各都道府県や市町村の観光計画を考慮した企画を作成します。
                                    </p>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">地域リサーチ（食材、観光、資源等）、市場動向調査、各都道府県・市町村の観光計画調査など</p>
                                            <p className="text-p">
                                                地域の魅力を最大限に引き出すために、現地リサーチを徹底し、食材や観光資源、市場動向を調査します。<br />
                                                これにより、訪問者がその地域をより深く体験できるような、魅力的なガストロノミーツーリズムの企画を作成します。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">企画立案、運営計画等、諸々の計画書作成</p>
                                            <p className="text-p">
                                                リサーチ結果を元に、実現可能かつ効果的な運営計画を立案します。<br />
                                                私たちの経験を活かし、観光客のニーズに応えるとともに、地域にとっても持続可能なツーリズムを目指した計画書を作成します。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                </SkewScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">② チーム編成と関係各所との連携</p>
                                    <p className="text-p">
                                        飲食店運営のコンサルティングで培った多くの関係機関との連携力を活かし、<br />
                                        プロジェクトを円滑に進めるためのチーム編成と調整を行います。
                                    </p>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">関係省庁、市町村、公共団体等との連携・調整</p>
                                            <p className="text-p">
                                                プロジェクトの成功には、関係省庁や市町村、公共団体との連携が不可欠です。<br />
                                                私たちは、これまでの経験を活かして円滑なコミュニケーションを行い、計画の実行をスムーズに進めます。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">協力会社・関係各社との折衝・調整</p>
                                            <p className="text-p">
                                                協力会社や関係企業との調整も、飲食店運営の経験を通じて培ったスキルを活用し、柔軟かつ的確に行います。<br />
                                                各社と緊密に連携し、成功に向けた万全の体制を構築します。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">シェフ等の必要な人材の派遣・紹介</p>
                                            <p className="text-p">
                                                ツーリズムの魅力を高めるために必要なシェフやスタッフなど、適切な人材を紹介・派遣し、現場のクオリティを高めます。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                </SkewScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">③ 飲食店・ホテル・ツアーのプロデュース</p>
                                    <p className="text-p">
                                        飲食店プロデュースで培ったノウハウを活かし、ガストロノミーツーリズムにおける飲食店、ホテル、ツアーのプロデュースを行います。<br />
                                        お客様の目標に合わせた企画を立案し、地域の魅力を引き出す最適なソリューションを提供します。
                                    </p>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">コンセプトメイク・メニュー開発</p>
                                            <p className="text-p">
                                                地域特産品を活かしたメニュー開発や、ユニークで魅力的なコンセプトの提案を行います。<br />
                                                これまでの飲食店プロデュース経験を基に、ターゲット顧客に響くコンセプトを作り上げます。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">教育研修</p>
                                            <p className="text-p">
                                                現地スタッフの教育研修を通じて、サービスの質を高め、顧客満足度を向上させます。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">PR 内容</p>
                                            <p className="text-p">
                                                地域の魅力を伝えるためのPR戦略を立案し、ターゲット市場に向けた効果的なメッセージングを行います。<br />
                                                プロデュース経験を活かし、魅力的なブランドストーリーを構築します。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">関係施設のデザイン設計</p>
                                            <p className="text-p">
                                                飲食店の店舗設計の経験を活かし、ホテルやツアーの関連施設のデザイン設計を行います。<br />
                                                空間デザインを通じて、訪問者が地域の魅力を深く感じることができるようなお手伝いをいたします。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">グラフィック関連全般</p>
                                            <p className="text-p">
                                                ロゴやパンフレット、メニューなど、ビジュアルを通じて地域の魅力を発信するためのグラフィックデザインを行います。<br />
                                                視覚的なインパクトで訪問者に深い印象を残します。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">イベント企画・実行</p>
                                            <p className="text-p">
                                                地域の特色を活かしたイベントを企画し、現地での体験を通じて観光客に強いインパクトを与えるような演出を行います。<br />
                                                これにより、リピーターを増やし、地域の観光資源としての価値を高めます。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                    <div className="pl-6 mt-8 w-fit">
                                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                                            <p className="text-color4 text-title4 border-b mb-3">交通機関、PR会社、旅行会社など関係各社の連携体制作り</p>
                                            <p className="text-p">
                                                ガストロノミーツーリズムを成功させるためには、さまざまな関係機関との協力が必要です。<br />
                                                私たちは、これまでの経験を活かして、交通機関、PR会社、旅行会社などとの連携体制を構築し、地域全体での観光価値を最大化します。
                                            </p>
                                        </SkewScrollTriggerAnimation>
                                    </div>
                                </SkewScrollTriggerAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-wrap gap-8 sm:gap-20 p-3 sm:p-5 md:p-8 justify-between">
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full mt-12" >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={25} src={Gastro3} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto md:ml-0 md:mt-32"  >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={60} src={Gastro9} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full"  >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro7} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </SectionType1>

            <ContactSection />
        </div>
    );
};

export default ServicesPage;
