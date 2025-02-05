'use client'

import React from 'react';

import { SectionBar } from '@/components/SectionBar';
import { ChildPageHead } from "@/components/ChildPageHeadImage";
import Image from "next/image";
import { TransitionImage } from "@/components/TransitionImage";
import AboutSection from "@/pages-components/about/AboutSection";
import { SectionType1 } from "@/components/SectionType1"

import TopImage from "@/assets/top1.jpg";
import CEOImage from "@/assets/top.jpg";

import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";
import { FadeAndSlideScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation';
import { SkewScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation';
import { AmazonBookSection } from '@/pages-components/top/AmazonBookSection';

export default () => {
    return (
        <div className="min-h-screen">
            <AboutSection />

            <SectionType1 className="bg-color8 sm:mt-36 md:mt-48 lg:mt-56 relative" disableLine>

                <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col <!--md:-mt-64--> md:flex-row" >
                    <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0">
                        <SkewScrollTriggerAnimation skewPanelClass="!bg-color8" innerClassName="text-title2" tag="p">
                            代表挨拶
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation skewPanelClass="!bg-color8" innerClassName="text-p" tag="p">
                            これまで、日本全国や海外で220店舗以上の飲食店をプロデュースする中で、
                            さまざまな出会いや学びを通じて、
                            「食」が持つ大きな力に魅了されてきました。
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation skewPanelClass="!bg-color8" innerClassName="text-p" tag="p">
                            食を通じて人と人がつながり、地域が活気づく様子を目の当たりにするたびに、
                            「もっと食を通じて新しい体験や感動を生み出したい」「地域を元気にするお手伝いがしたい」
                            という想いが自然と深まっていったのです。
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation skewPanelClass="!bg-color8" innerClassName="text-p" tag="p">
                            今後は、私たちの経験とノウハウを活かし、「ガストロノミーツーリズム」に力を入れていきます。
                            日本の魅力を国内外に広め、多くの人に幸せな瞬間を届けることができるよう、
                            挑戦を続けていくつもりです。
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation skewPanelClass="!bg-color8" innerClassName="text-p" tag="p">
                            また、私たちはお互いを尊重し、支え合いながら進んでいける環境を大切にしています。
                            社員一人ひとりが前向きに、
                            楽しく働ける職場であることを心がけています。<br />
                            これからも新しい挑戦を通じて成長し、
                            多くの皆さんと素晴らしい未来を創っていければと思っています。
                        </SkewScrollTriggerAnimation>
                    </div>
                </div>

            </SectionType1>

            <AmazonBookSection />
        </div>
    );
};
