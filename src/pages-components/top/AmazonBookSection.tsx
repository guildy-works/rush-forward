import { HighlightMarker } from "@/components/HighlightMarker";
import { LinkButton } from "@/components/LinkButton";
import { SkewScrollTriggerAnimation } from "@/components/SkewScrollTriggerAnimation";
import { TransitionImage } from "@/components/TransitionImage";
import Link from "next/link";
import Image from "next/image";

import BookImg from "@/assets/book.png";
import { FadeAndSlideScrollTriggerAnimation } from "@/components/FadeAndSlideScriollTriggerAnimation";
import { Book } from "@/components/Book";
import { FadeAndSlideAnimation } from "@/components/Animations/FadeAndSlideAnimation";
import CitySvg from "@/assets/city.svg";

export const AmazonBookSection = () => {
    return (
        <section className="bg-color8 w-full mt-28 sm:mt-36 md:mt-48 lg:mt-56 py-20 sm:py-36 px-4 relative">
            <FadeAndSlideScrollTriggerAnimation
                transform={{ translate: { y: "100%" } }}
                className="!absolute right-0 -z-10"
                style={{ bottom: "calc(100% - 12px)" }}>
                <Image src={CitySvg} alt="街" />
            </FadeAndSlideScrollTriggerAnimation>


            <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
                <FadeAndSlideScrollTriggerAnimation>
                    <Book>
                        <Image src={BookImg} alt="飲食業界　成功する店　失敗する店" />
                    </Book>
                </FadeAndSlideScrollTriggerAnimation>

                <div className="mt-6 md:mt-12 ml-auto w-full md:w-3/5 md:items-start flex flex-col items-start">
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <h2 className="text-title3">当社代表 重野和稔の著書</h2>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <h2 className="text-title3 mt-3">「飲食店 成功する店 失敗する店」</h2>
                    </SkewScrollTriggerAnimation>


                    <article className="flex flex-col gap-2 md:gap-3 items-start">
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8" className="mt-4 sm:mt-8 md:mt-12">
                            <h3>独立して以来、国内外200店舗以上の飲食店プロデュース、</h3>
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                            <h3>運営管理などをまかされ、</h3>
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                            <h3> 死屍累々の飲食業界で8割以上の高確率で繁盛店を作り続けてきた著者が、</h3>
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                            <h3> その経験から学んだ飲食店サバイバル&繁盛店づくりの極意を教えます!</h3>
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                            <h3> 飲食業に興味をもっている人や、</h3>
                        </SkewScrollTriggerAnimation>
                        <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                            <h3> 飲食店を経営している人には必読の1冊です。</h3>
                        </SkewScrollTriggerAnimation>
                    </article>

                    <div className="mt-12 md:mt-auto m ml-auto w-full sm:w-auto">
                        <LinkButton
                            target="_blank"
                            href="https://www.amazon.co.jp/%E9%A3%B2%E9%A3%9F%E6%A5%AD%E7%95%8C-%E6%88%90%E5%8A%9F%E3%81%99%E3%82%8B%E5%BA%97-%E5%A4%B1%E6%95%97%E3%81%99%E3%82%8B%E5%BA%97-%E9%87%8D%E9%87%8E-%E5%92%8C%E7%A8%94/dp/4799108727"
                            subTitle="Amazon">

                        </LinkButton>
                    </div>
                </div>



            </div>
        </section>
    );
}
