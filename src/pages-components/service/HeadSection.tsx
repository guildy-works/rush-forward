import { HighlightMarker } from "@/components/HighlightMarker";
import { LinkButton } from "@/components/LinkButton";
import { TransitionImage2 } from "@/components/TransitionImage2";

import SmallImage1 from "@/assets/small_img1.png";
import SmallImage2 from "@/assets/small_img2.png";
import SmallImage3 from "@/assets/small_img3.png";
import SmallImage4 from "@/assets/small_img4.png";
import { SectionType1 } from "@/components/SectionType1";
import { Section1Title } from "@/components/Section1Title";

import Gastro9 from "@/assets/images/gastro/gstro9.jpg"
import Gastro11 from "@/assets/images/gastro/gstro11.webp"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";


export default function HeadSection() {

    return (
        <SectionType1>
            <div className=" justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full md:w-2/5">
                <Section1Title title="Service" subTitle="事業" />

                <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 mt-3 sm:mt-5 md:mt-7 text-size2">
                    <p className="text-color2 text-title4">私達は街を創る飲食の企画集団です。</p>
                </SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 text-size2">
                    <p>
                        日本全国・海外を含めて220 店舗以上の飲食店をお手伝いしてきました。
                    </p>
                </SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 text-size2">
                    <p>そのノウハウを活かし、観光立国JAPANの実現に向けて、 </p>
                </SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 text-size2">
                    <p>日本の食文化・魅力を世界に発信していきます。  </p>
                </SkewScrollTriggerAnimation>

            </div>
        </SectionType1>
    );
}
