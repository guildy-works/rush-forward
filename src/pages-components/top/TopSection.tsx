import Image from "next/image";

import { SkewAnimation } from "@/components/Animations/SkewAnimation";
import { TransitionImage } from "@/components/TransitionImage";
import { FadeAndSlideScrollTriggerAnimation } from "@/components/FadeAndSlideScriollTriggerAnimation";
import { SkewScrollTriggerAnimation } from "@/components/SkewScrollTriggerAnimation";
import { FadeAndSlideAnimation } from "@/components/Animations/FadeAndSlideAnimation";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import TopImage from "@/assets/top.jpg";
import Top2Image from "@/assets/top1.jpg";
import Top3Image from "@/assets/top2.jpg";

import Sub1Img from "@/assets/img1.jpg";
import Sub2Img from "@/assets/img2.jpg";
import Sub3Img from "@/assets/img3.png";
import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";

export const TopSection = () => {
    return (
        <div className="w-full mx-auto">
            <div className="w-full flex flex-wrap">
                <div className="flex-1 ">


                    <div className="w-full flex justify-center">
                        <div className=" inset-0 m-auto text-center -mt-4">
                            <FadeAndSlideAnimation in className="flex flex-row-reverse items-start justify-center gap-3" transform={{ rotate: "0" }}>
                                <h3 className="text-size2 mt-5 sm:mt-12 text-font2 [writing-mode:vertical-rl]">
                                    国内・国外で220店舗以上の
                                </h3>
                                <h3 className="text-size2 mt-8 sm:mt-16 text-font2 [writing-mode:vertical-rl]">
                                    コンサルティング経験を活かして
                                </h3>
                                <h3 className="text-size2 mt-12 sm:mt-24 text-font2 [writing-mode:vertical-rl]">
                                    繁盛店を創る、飲食の企画集団
                                </h3>
                            </FadeAndSlideAnimation>

                            <SkewScrollTriggerAnimation className="mt-8 sm:mt-16">
                                <h1 className="text-title1 mt-5 font-jost font-light">
                                    Rush Forward
                                </h1>
                            </SkewScrollTriggerAnimation>


                        </div>

                    </div>
                </div>

                <Slides />
            </div>

            <FadeAndSlideScrollTriggerAnimation transform={{ translate: { x: "90vw" } }}
                className="bg-color7 w-full p-6 sm:p-12 md:p-24 relative mt-12 sm:mt-24 md:mt-48">
                <div className="container max-w-screen-md mx-auto px-4 py-8 gap-8 sm:gap-16 md:gap-24 flex flex-wrap justify-center">
                    {/* 1番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation className="w-64 h-full">
                        <TransitionImage src={Sub1Img} parallaxSlideLength={70} alt="がらり" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 2番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation className="w-64 h-full">
                        <TransitionImage src={Sub2Img} alt="料理" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 3番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation className="w-64 col-span-2 h-full">
                        <TransitionImage src={Sub3Img} alt="厨房" parallaxSlideLength={120} className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 4番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation className="w-64 col-span-2 h-full">
                        <TransitionImage src={Sub4Img} parallaxSlideLength={80} alt="レストラン" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 5番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation className=" w-64 col-span-2 h-full">
                        <TransitionImage src={Sub5Img} parallaxSlideLength={100} alt="ワイン" className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>

                    {/* 6番目の画像 */}
                    <FadeAndSlideScrollTriggerAnimation className=" w-64 col-span-2 h-full">
                        <TransitionImage src={Sub6Img} alt="料理" parallaxSlideLength={120} className="h-full object-cover rounded" />
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </FadeAndSlideScrollTriggerAnimation>
        </div>

    )
}

const Slides = () => <FadeAndSlideAnimation in transform={{ rotate: "0", scale: 1.05 }}
    className="w-full md:w-8/12 lg:max-w-5xl h-auto">
    <Splide
        className="w-full h-auto"
        options={{
            rewind: true,
            type: "loop",
            autoplay: true,


        }}
    >
        <SplideSlide>
            <Image src={TopImage} alt="top1" className="w-full" style={{}} />

        </SplideSlide>
        <SplideSlide>
            <Image src={Top2Image} alt="top2" className="w-full" style={{}} />
        </SplideSlide>
    </Splide>
</FadeAndSlideAnimation>