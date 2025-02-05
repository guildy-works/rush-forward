import { HighlightMarker } from "@/components/HighlightMarker";
import { LinkButton } from "@/components/LinkButton";
import { TransitionImage } from "@/components/TransitionImage";
import Link from "next/link";
import { TransitionImage2 } from "@/components/TransitionImage2";

import SmallImage1 from "@/assets/small_img1.png";
import SmallImage2 from "@/assets/small_img2.png";
import SmallImage3 from "@/assets/small_img3.png";
import SmallImage4 from "@/assets/small_img4.png";
import { SectionType1 } from "@/components/SectionType1";
import { SectionTitleChild } from "@/components/SectionTitleChild";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";

export default function HeadSection() {

    return (
        <SectionType1 innerClassName="!flex-row">
            <div className=" justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full md:w-2/5">
                <SectionTitleChild title="Produce / Consulting" subTitle="事業・運営支援" />

                <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 mt-3 sm:mt-5 md:mt-7 text-size2">
                    <p className="text-color2 text-title4">当社では、開業プロデュース及び運営コンサルティングを行っています。</p>
                </SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 text-size2">
                    <p>
                    「美味しく安心・安全なお料理で、お客様をはじめ関わる総ての人々を
                    </p>
                </SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 text-size2">
                    <p> 笑顔にし、街を楽しく活性化させる」そんなお店を創ることに一途に邁進することをミッションとしています。 </p>
                </SkewScrollTriggerAnimation>

            </div>

            {/* スペース用 */}
            <div className="sm:mt-48 ml-auto w-full md:w-2/5 flex flex-col min-h-96">
            </div>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-28 sm:w-36 left-8 bottom-64  md:left-12 md:bottom-0 xl:-left-12 md:top-full">
                <TransitionImage2 imgClassName="rounded-xl" src={SmallImage2} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-24 sm:w-32 right-6  sm:right-1/3 bottom-48 md:right-12 md:bottom-64 lg:top-16" >
                <TransitionImage2 imgClassName="rounded-xl" parallaxSlideLength={80} src={SmallImage1} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-24 sm:w-32 md:w-48 left-12 sm:left-1/4 bottom-24 md:left-auto md:right-1/3 md:top-1/3">
                <TransitionImage2 imgClassName="rounded-xl" src={SmallImage3} parallaxSlideLength={20} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-28 sm:w-32 md:w-48 right-6 bottom-4 md:right-48 md:top-3/4">
                <TransitionImage2 imgClassName="rounded-xl" src={SmallImage4} parallaxSlideLength={40} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>
        </SectionType1>
    );
}
