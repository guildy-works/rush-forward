import { HighlightMarker } from "@/components/HighlightMarker";
import { LinkButton } from "@/components/LinkButton";
import { TransitionImage } from "@/components/TransitionImage";
import Link from "next/link";
import Image from "next/image";

import BookImg from "@/assets/book.png";
import { Book } from "@/components/Book";
import CitySvg from "@/assets/city.svg";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { SectionType1 } from "@/components/SectionType1";

export const AmazonBookSection = () => {
    return (

        <SectionType1 className="bg-color7 mt-16 md:mt-24">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-16 md:gap-28">
                <FadeAndSlideScrollTriggerAnimation>
                    <Book>
                        <Image src={BookImg} alt="飲食業界　成功する店　失敗する店" />
                    </Book>
                </FadeAndSlideScrollTriggerAnimation>

                <div className="mt-12  md:items-start flex flex-col items-center">
                    <div className="flex flex-col gap-2 md:gap-3 items-start">
                        <SkewScrollTriggerAnimation innerClassName="text-title3" tag="h2" skewPanelClass="!bg-color7">
                            当社代表 重野和稔の著書
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="text-title3 mt-3" tag="h2" skewPanelClass="!bg-color7">
                            「飲食店 成功する店 失敗する店」
                        </SkewScrollTriggerAnimation>

                        <SkewScrollTriggerAnimation className="mt-4 sm:mt-8 md:mt-12" tag="h3" skewPanelClass="!bg-color7">
                            独立して以来、国内外200店舗以上の飲食店プロデュース、
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-color7">
                            運営管理などをまかされ、
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-color7">
                            死屍累々の飲食業界で8割以上の高確率で繁盛店を作り続けてきた著者が、
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-color7">
                            その経験から学んだ飲食店サバイバル&繁盛店づくりの極意を教えます!
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-color7">
                            飲食業に興味をもっている人や、
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-color7">
                            飲食店を経営している人には必読の1冊です。
                        </SkewScrollTriggerAnimation>
                    </div>

                    <div className="mt-12 md:mt-auto m ml-auto w-full sm:w-auto">
                        <LinkButton
                            target="_blank"
                            href="https://www.amazon.co.jp/%E9%A3%B2%E9%A3%9F%E6%A5%AD%E7%95%8C-%E6%88%90%E5%8A%9F%E3%81%99%E3%82%8B%E5%BA%97-%E5%A4%B1%E6%95%97%E3%81%99%E3%82%8B%E5%BA%97-%E9%87%8D%E9%87%8E-%E5%92%8C%E7%A8%94/dp/4799108727"
                            subTitle="Amazon">
                        </LinkButton>
                    </div>
                </div>
            </div>
        </SectionType1>
    );
}
