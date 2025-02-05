'use client'

import React from 'react';
import Image from 'next/image';
import { ChildPageHead } from "@/components/ChildPageHeadImage";
import { TransitionImage } from "@/components/TransitionImage";
import { SectionType1 } from "@/components/SectionType1"
import { Section1Title } from "@/components/Section1Title"

import { ContactSection } from "@/pages-components/top/ContactSection";
import { ServicesSection } from "@/pages-components/service/ServicesSection";
import HeadSection from "@/pages-components/service/ProduceHeadSection";

import TopImage from "@/assets/top1.jpg";
import Sub3Img from "@/assets/img3.png";
import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";

import Sub1Img from "@/assets/img1.jpg";

import Gastro4 from "@/assets/images/gastro/gstro4.webp"
import Gastro5 from "@/assets/images/gastro/gstro5.jpg"
import Gastro6 from "@/assets/images/gastro/gstro6.jpg"
import Image_Flow from "@/assets/flow.jpg"


import MapImage from "@/assets/map.svg"
import { SkewScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation';
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';

const ServicesPage = () => {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <HeadSection />

            <SectionType1 className="bg-white  relative" disableLine innerClassName='!flex-row'>

                <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col md:flex-row" >
                    <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0  items-start">
                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                            <p className="text-color2 text-title2">これから飲食店の開業をお考えですか？</p>
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
                            <p className="text-size-p-wide">飲食店の新規開業は、ワクワクする気持ちと共に、不安、疑問が混在されているものと思います。</p>
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="!bg-white">
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

            <SectionType1 className="bg-color8 relative" disableLine>
                <Image src={Image_Flow} alt="img" className="w-auto" />

                <div className="w-full text-center mb-28">


                    <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-color2 text-title2 mb-10 mt-24">開業プロデュースについて</p>
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-title4">
                            私たちは、お客様の夢や目標を実現するために、しっかりと手助けをいたします。<br />
                            お客様の成功を第一に考え、プロジェクトの各段階でサポートを提供します。<br />
                            以下のステップを通じて、お客様のビジョンを具体的な形にするお手伝いをいたします。
                        </p>
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
                <div className="flex justify-between w-full">
                    <div className="gap-8 sm:gap-8 md:gap-12 mt-auto pb-12 ml-0">
                        <div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                                    <p className="text-color3 text-title3 border-b mb-3">① コンセプト企画</p>
                                    <p className="text-title4">
                                        お客様のビジョンを最適な形で実現するために、コンセプト企画の段階から丁寧にサポートします。<br />
                                        ターゲット顧客のニーズや市場の動向を分析し、お客様と共に理想のコンセプトを考え抜きます。<br />
                                        私たちは、お客様が持つ独自のアイデアを引き出し、競争力のあるコンセプトを作り上げるお手伝いをいたします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                                    <p className="text-color3 text-title3 border-b mb-3">② 業態開発</p>
                                    <p className="text-title4">
                                        お客様の店舗に最適な業態を開発するためのサポートを提供します。<br />
                                        サービススタイルや商品ラインナップ、運営フローのすべてをお客様と共に決定し、理想の店舗運営を実現するために尽力します。<br />
                                        私たちは、お客様が抱える課題や不安に対して解決策を提案し、成功への道筋を一緒に作り上げます。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                                    <p className="text-color3 text-title3 border-b mb-3">③ メニュー開発［レシピ作成、調理指導等］</p>
                                    <p className="text-title4">
                                        お客様が提供したい料理や飲み物を最高の形で実現するため、メニュー開発の段階で全面的なサポートを行います。<br />
                                        食材の選定やレシピ作成から、スタッフへの調理指導まで、お客様が理想とするメニューを一緒に作り上げるお手伝いをいたします。<br />
                                        私たちは、メニューの魅力を最大限に引き出し、店舗の強みをお客様と共に創り出します。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                                    <p className="text-color3 text-title3 border-b mb-3">④ 出店戦略［物件探し、マーケット・リサーチ含］</p>
                                    <p className="text-title4">
                                        適切な出店場所を見つけるため、お客様と一緒に出店戦略を立て、サポートします。<br />
                                        物件探しからマーケット・リサーチまで、お客様が抱えるあらゆるニーズに対応し、成功に導くための最適な戦略を提案します。<br />
                                        私たちは、お客様のビジョンを現実にするための手助けを惜しみません。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                                    <p className="text-color3 text-title3 border-b mb-3">⑤ 資金調達［事業計画書作成含］</p>
                                    <p className="text-title4">
                                        資金調達は、店舗の開業に向けて非常に重要なステップです。<br />
                                        お客様が必要とする資金を確保するため、事業計画書の作成から投資家へのアプローチまで、徹底的にサポートします。<br />
                                        私たちは、お客様の資金調達が成功するようにあらゆる角度から手助けし、安心して開業準備を進められるようお手伝いをいたします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                                    <p className="text-color3 text-title3 border-b mb-3">⑥ 店舗設計デザイン［パース含］</p>
                                    <p className="text-title4">
                                        お客様の理想を現実のものとするため、店舗設計デザインの全工程でサポートします。<br />
                                        空間設計やインテリアデザイン、照明まで、お客様の意見を反映しながら、プロフェッショナルな視点から最適な提案を行います。<br />
                                        3Dパースを用いて、完成形をお客様と共に確認しながら、理想の空間を実現するお手伝いをいたします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                                    <p className="text-color3 text-title3 border-b mb-3">⑦ グラフィックデザイン［ロゴ、メニュー、ポップ等］</p>
                                    <p className="text-title4">
                                        お客様のブランドを視覚的に表現するため、ロゴやメニュー、ポップなどのグラフィックデザインを全面的にサポートします。<br />
                                        お客様のビジョンを反映したデザインで、店舗の魅力を引き立てるお手伝いをいたします。<br />
                                        私たちは、デザインの力でお客様の店舗が一目でわかる存在になるよう、全力で手助けします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                                    <p className="text-color3 text-title3 border-b mb-3">⑧ スタッフ教育［接客サービス、帳票関係、労働意識の改善等］</p>
                                    <p className="text-title4">
                                        お客様の店舗が一貫したサービスを提供できるよう、スタッフ教育をサポートします。<br />
                                        接客サービスの向上から、帳票管理、労働意識の改善まで、店舗運営に必要なスキルをお客様と一緒にスタッフへ伝えます。<br />
                                        お客様が求める店舗のビジョンをスタッフ全員で実現するために、私たちは全力で手助けいたします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-wrap gap-8 sm:gap-20 p-3 sm:p-5 md:p-8 justify-between">
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full mt-12" >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={25} src={Sub4Img} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto md:ml-0 md:mt-32"  >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={60} src={Sub5Img} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full"  >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Sub6Img} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </SectionType1>

            <SectionType1 className="bg-white <!--sm:mt-36 md:mt-48 lg:mt-56--> relative" disableLine>
                <div className="w-full text-center mb-28">
                    <SkewScrollTriggerAnimation innerClassName="!bg-white">
                        <p className="text-color2 text-title2 mb-10">運営コンサルティングについて</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-white">
                        <p className="text-title4">
                            私たちは、お客様の店舗運営を強力にサポートし、目標達成に向けたあらゆる課題を共に乗り越えるためのパートナーです。<br />
                            お客様の店舗がより良い方向へ進むために、専門知識と経験を活かしてしっかりと手助けをいたします。
                        </p>
                    </SkewScrollTriggerAnimation>
                </div>
                <div className="flex justify-between w-full">
                    <div className="gap-8 sm:gap-8 md:gap-12 mt-auto pb-12 ml-0">
                        <div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">① 赤字店舗立て直し<br />［集客できるメニュー開発、スタッフ教育、 FLコスト等の見直し、オペレーションの改善等］</p>
                                    <p className="text-title4">
                                        赤字店舗の立て直しには、細やかな分析と戦略的な対応が必要です。<br />
                                        私たちは、お客様と共に現状をしっかりと見直し、集客に強いメニューの開発や、効果的なスタッフ教育、食材費・人件費等の見直しをサポートします。<br />
                                        さらに、オペレーションの改善を通じて、店舗の効率化と収益性向上に向けたお手伝いをいたします。お客様と共に最適な解決策を見つけ、赤字からの脱却を目指します。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">② 業態変更・リニューアルの前面サポート</p>
                                    <p className="text-title4">
                                        業態変更やリニューアルをお考えのお客様に対し、全てのプロセスでサポートを提供します。<br />
                                        新たなコンセプトの開発からメニューの刷新、店舗デザインの見直しまで、あらゆる側面でお客様のビジョンを実現するために協力します。<br />
                                        お客様の課題や希望に応じた的確なアドバイスを行い、スムーズな業態変更をサポートします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">③ 運営管理</p>
                                    <p className="text-title4">
                                        日々の店舗運営を効率よく行うための運営管理サポートを提供します。<br />
                                        お客様の目標に合わせた運営方針の策定や、売上向上のための戦略立案、効果的なコスト管理など、お客様の運営管理を全面的にサポートします。<br />
                                        私たちは、お客様のビジネスが持続的に成長できるよう、専門的な知識と経験を活かしてしっかりと手助けを行います。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">④ 運営委託［入店指導含］</p>
                                    <p className="text-title4">
                                        店舗運営を委託されるお客様に対し、安心して任せていただけるよう、プロフェッショナルな運営委託サービスを提供します。<br />
                                        入店指導を含む運営全般をサポートし、スタッフの育成やオペレーションの最適化など、お客様の負担を軽減しつつ、質の高い運営を実現します。<br />
                                        私たちは、お客様が安心してビジネスを拡大できるよう、全力でお手伝いいたします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">⑤ 人的支援［キッチン、ホール］</p>
                                    <p className="text-title4">
                                        お客様の店舗がスムーズに運営されるよう、キッチンやホールの人的支援を行います。<br />
                                        必要な人材の確保やトレーニング、効率的なシフト管理など、日々の運営において直面する課題を一緒に解決します。<br />
                                        私たちは、お客様が求めるサービス品質を維持しながら、店舗の運営が円滑に進むよう手助けいたします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">⑥ 店舗設計デザイン［パース含］</p>
                                    <p className="text-title4">
                                        お客様の店舗に最適な設計デザインを提供し、リニューアルや改装の際も全力でサポートします。<br />
                                        店舗のコンセプトに合った空間設計やインテリアデザインをお客様と共に考え、3Dパースを用いて具体的なビジョンを共有します。<br />
                                        私たちは、お客様のブランドイメージを最大限に引き立てる店舗作りを手助けいたします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                            <div className="flex p-5 mb-7">
                                <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-white">
                                    <p className="text-color3 text-title3 border-b mb-3">⑦ フランチャイズ・ライセンス本部代行</p>
                                    <p className="text-title4">
                                        フランチャイズやライセンスビジネスを展開するお客様に対し、本部業務の代行サービスを提供します。<br />
                                        マニュアル作成、加盟店サポート、品質管理など、フランチャイズ本部の運営に必要なすべての業務をお手伝いします。<br />
                                        お客様が本業に集中できるよう、運営の負担を軽減し、効率的なビジネス展開をサポートします。
                                    </p>
                                </FadeAndSlideScrollTriggerAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-wrap gap-8 sm:gap-20 p-3 sm:p-5 md:p-8 justify-between">
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full mt-12" >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={25} src={Sub1Img} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto md:ml-0 md:mt-32"  >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={60} src={TopImage} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full"  >
                        <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Sub3Img} alt="img" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </SectionType1>

            <ContactSection />
        </div>
    );
};

export default ServicesPage;
