import { HighlightMarker } from "@/components/HighlightMarker";
import { LinkButton } from "@/components/LinkButton";
import { TransitionImage2 } from "@/components/TransitionImage2";

import SmallImage1 from "@/assets/small_img1.png";
import SmallImage2 from "@/assets/small_img2.png";
import SmallImage3 from "@/assets/small_img3.png";
import SmallImage4 from "@/assets/small_img4.png";
import { SectionType1 } from "@/components/SectionType1";
import { Section1Title } from "@/components/Section1Title";

import Gastro from "@/assets/images/gastro/gstro.webp"
import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";


export default function HeadSection() {

    return (
        <SectionType1>
            <div className=" justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full md:w-2/5">
                <Section1Title title="Company" subTitle="会社概要" />
            </div>

            {/* スペース用 */}
            <div className="sm:mt-48 ml-auto w-full md:w-2/5 flex flex-col min-h-96">
            </div>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-28 sm:w-36 left-8 bottom-64  md:left-12 md:bottom-0 xl:-left-12 md:top-1/2">
                <TransitionImage2 imgClassName="rounded-xl" src={Gastro} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-24 sm:w-32 right-6  sm:right-1/3 bottom-48 md:right-12 md:bottom-64 lg:top-16" >
                <TransitionImage2 imgClassName="rounded-xl" parallaxSlideLength={80} src={SmallImage1} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-24 sm:w-32 md:w-48 left-12 sm:left-1/4 bottom-24 md:left-auto md:right-1/3 md:top-1/4">
                <TransitionImage2 imgClassName="rounded-xl" src={Sub5Img} parallaxSlideLength={20} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-28 sm:w-32 md:w-48 right-6 bottom-4 md:right-48 md:top-2/4">
                <TransitionImage2 imgClassName="rounded-xl" src={Sub6Img} parallaxSlideLength={40} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>
        </SectionType1>
    );
}
