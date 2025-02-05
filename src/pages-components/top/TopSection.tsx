import Image, { StaticImageData } from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import Top2Image from "@/assets/top1.jpg";
import LogoImg from "@/assets/logo-dtl.png";
import gsap, { Power1, Power0 } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FadeAndSlideAnimation } from "@/libs/Animations/FadeAndSlideAnimation";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";

export const TopSection = () => {
    return (
        <>
            <div className="w-full flex flex-wrap">
                <div className="flex-1 ">
                    <div className="w-full flex justify-center">

                        <div className=" inset-0 m-auto text-center">
                            <Image src={LogoImg} alt="Rush Forward" className="w-32 h-24 mx-auto" />

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
                                <h1 className="text-title1 mt-5 font-jost font-light text-color3">
                                    Rush Forward
                                </h1>
                            </SkewScrollTriggerAnimation>


                        </div>

                    </div>
                </div>

                <Slides />
            </div>
        </>
    )
}

const Slides = () => {
    return <div
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
                <KenBurns src={Top2Image} alt="top1" />
            </SplideSlide>
            <SplideSlide>
                <KenBurns src={Top2Image} alt="top1" />
            </SplideSlide>
        </Splide>
    </div>
}

const KenBurns = ({ src, alt }: { src: StaticImageData, alt: string }) => {
    var transitionSpeed = 4;
    var slideDuration = 8;

    // useGSAP(
    //     () => {
    //         gsap.timeline()
    //             .to(".im", {
    //                 repeat: -1,
    //                 opacity: 1,
    //                 duration: transitionSpeed,
    //                 ease: Power0.easeNone
    //             })
    //             .to(".im", { // Randomize the Ken Burns effect for different animation for each img
    //                 duration: slideDuration,
    //                 repeat: -1,
    //                 xPercent: randomIntFromInterval(-10, 10),
    //                 yPercent: randomIntFromInterval(-10, 10),
    //                 scale: randomFloatFromInterval(1, 1.2),
    //                 ease: Power1.easeOut
    //             }, 0);
    //     },
    //     {
    //         scope: ".ken",
    //         dependencies: []
    //     }
    // );

    return <div className="ken">
        <Image src={src} alt={alt} className="im w-full" style={{}} />
    </div>
}

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomFloatFromInterval(min: number, max: number) {
    return (Math.random() * (max - min) + min).toFixed(2);
} 