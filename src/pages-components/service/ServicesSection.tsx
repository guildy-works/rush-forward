import { LinkButton } from "@/components/LinkButton"
import { TransitionImage } from "@/components/TransitionImage"

import Image1_GarariSendagaya from "@/assets/img1.jpg"
import Image9_AoyamaGarariTsukuba from "@/assets/img9.jpg"
import Image_Flow from "@/assets/flow.jpg"

import MapImage from "@/assets/map.svg"
import { SectionType1 } from "@/components/SectionType1"
import { Section1Title } from "@/components/Section1Title"

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
import { TransitionImage2 } from "@/components/TransitionImage2"
import { StaticImageData } from "next/image"

import Traveller from "@/assets/images/traveller.svg"
import Traveller2 from "@/assets/images/traveller2.svg"

import Image from "next/image"
import { HighlightMarker } from "@/components/HighlightMarker"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation"

export const ServicesSection = () => {

    return (
        <>
            <Service1 />
            <Service2 />
        </>
    )
}

const Service1 = () => {
    return (
        <SectionType1 className="bg-color8 relative" innerClassName="!flex-row" disableLine>

            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col md:flex-row" >
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0  items-start">
                    <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                        <h3 className="text-title1 text-font1">開業・運営支援</h3>
                        <h3 className="text-title2 text-font3">Produce / Consulting</h3>
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                        <h4 className="text-title4 text-font2">当社では、開業プロデュース及び運営コンサルティングを行っています。</h4>
                    </FadeAndSlideScrollTriggerAnimation>

                    <FadeAndSlideScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            「美味しく安心・安全なお料理で、お客様をはじめ関わる総ての人々を<br />
                            笑顔にし、街を楽しく活性化させる」そんなお店を創ることに一途に邁進することをミッションとしています。
                        </p>
                    </FadeAndSlideScrollTriggerAnimation>

                </div>
                <div className="mt-6">
                    <TransitionImage className="max-w-sm w-full" src={MapImage} alt="ProduceImage" />
                </div>
            </div>

            {/* Center */}
            <div className="flex flex-col flex-grow justify-center items-center gap-3 sm:gap-5 md:gap-16 mt-12 md:24">
                <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-5">
                    <div className="mt-4 p-3 ml-auto">
                        <LinkButton href="/services/produce" title="VIEW More" subTitle="もっとみる" />
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="w-full flex flex-wrap gap-8 sm:gap-20 p-3 sm:p-5 md:p-8 justify-between">
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full mt-12" >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={25} src={Image1_GarariSendagaya} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto md:ml-0 md:mt-32"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={60} src={Gastro2} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Image9_AoyamaGarariTsukuba} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>

            </div>

        </SectionType1>
    )
}


const Service2 = () => {
    return (
        <SectionType1 className="bg-color7 relative" disableLine innerClassName="!flex-row">

            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col md:flex-row" >
                <div className="mt-6">
                    <TransitionImage className="max-w-sm w-full" src={Gastro} alt="ProduceImage" />
                </div>
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0  items-start">
                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color7">
                        <h3 className="text-title1 text-font1">ガストロノミーツーリズム</h3>
                        <h3 className="text-title2 text-font3">Gastronomy Tourism</h3>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color7">
                        <h4 className="text-title4 text-font2">地方から世界へ！↔世界から地方へ！</h4>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color7">
                        <p className="text-size-p-wide">
                            観光立国として日本を持続的に活性化するため、<br />
                            世界中からフーディーズを集めます！
                        </p>
                    </SkewScrollTriggerAnimation>

                    <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-5">
                        <div className="mt-4 p-3 ml-auto">
                            <LinkButton href="/services/gastronomy_tourism" title="VIEW More" subTitle="もっとみる" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Right */}
            <div className="w-full flex flex-wrap gap-8 sm:gap-20 p-3 sm:p-5 md:p-8 justify-between">
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full mt-12" >
                    <TransitionImage className="rounded-md" parallaxSlideLength={25} src={Gastro4} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto md:ml-0 md:mt-32"  >
                    <TransitionImage className="rounded-md" parallaxSlideLength={60} src={Gastro5} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full"  >
                    <TransitionImage className="rounded-md" parallaxSlideLength={80} src={Gastro6} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
            </div>

        </SectionType1>
    )
}
