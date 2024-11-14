
import { TransitionImage2 } from "@/components/TransitionImage2";

import SmallImage1 from "@/assets/small_img1.png";
import SmallImage2 from "@/assets/small_img2.png";
import SmallImage3 from "@/assets/small_img3.png";
import SmallImage4 from "@/assets/small_img4.png";
import { SectionType1 } from "@/components/SectionType1";
import { Section1Title } from "@/components/Section1Title";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
export default function AboutSection() {

    return (
        <SectionType1 innerClassName="!flex-row">
            <div className=" justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full md:w-2/5">
                <Section1Title title="About" subTitle="理念" />

                <SkewScrollTriggerAnimation innerClassName="mt-7 sm:mt-9 md:mt-12 text-size3">
                    <h3 className="text-title4">飲食店を通じて日本を、</h3>
                    <h3 className="mt-3 text-title4">世界を元気にする会社、</h3>
                    <h3 className="mt-3 text-color3 text-title2 font-jost">Rush Forward</h3>
                </SkewScrollTriggerAnimation>

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

            {/* スペース用 */}
            <div className="sm:mt-48 ml-auto w-full md:w-2/5 flex flex-col min-h-96">
            </div>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-28 sm:w-36 left-8 bottom-64  md:left-12 md:bottom-0 xl:-left-12 md:top-full">
                <TransitionImage2 imgClassName="rounded-md" src={SmallImage2} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-24 sm:w-32 right-6  sm:right-1/3 bottom-48 md:right-12 md:bottom-64 lg:top-16" >
                <TransitionImage2 imgClassName="rounded-md" parallaxSlideLength={80} src={SmallImage1} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-24 sm:w-32 md:w-48 left-12 sm:left-1/4 bottom-24 md:left-auto md:right-1/3 md:top-1/3">
                <TransitionImage2 imgClassName="rounded-md" src={SmallImage3} parallaxSlideLength={20} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>

            <FadeAndSlideScrollTriggerAnimation className="!absolute w-28 sm:w-32 md:w-48 right-6 bottom-4 md:right-48 md:top-3/4">
                <TransitionImage2 imgClassName="rounded-md" src={SmallImage4} parallaxSlideLength={40} alt="img" />
            </FadeAndSlideScrollTriggerAnimation>
        </SectionType1>
    );
}
