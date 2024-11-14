import { LinkButton } from "@/components/LinkButton"
import { TransitionImage } from "@/components/TransitionImage"



import MapImage from "@/assets/images/map.png"
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
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { RestaurantSection } from "./RestaurantSection"

import RefindJapan from "@/assets/images/gastro/refind_japan.svg"

export const ServicesSection = () => {

    return (
        <>
            <SectionType1 innerClassName="flex-wrap !flex-row">
                <div className=" justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 max-w-full">
                    <Section1Title title="Service" subTitle="事業" />

                    <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 mt-3 sm:mt-5 md:mt-7 text-size2">
                        <h3 className="text-color2 text-title4">私達は街を創る飲食の企画集団です。</h3>
                    </SkewScrollTriggerAnimation>
                    <FadeAndSlideScrollTriggerAnimation delay={100} className="space-y-2 text-gray-700 text-size2">
                        <p>飲食店を開業される皆様の夢と熱い想いに寄り添い、</p>
                    </FadeAndSlideScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 text-size2">
                        <p>皆様が永くご店舗を経営していただけるよう、 </p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation delay={50} className="space-y-2 text-gray-700 text-size2" >
                        <p>しっかりサポートさせていただきます。</p>
                    </SkewScrollTriggerAnimation>

                    <LinkButton href="/services" title="SERVICES" subTitle="もっとみる" outerClass="mt-5 ml-auto mb-12" />
                </div>
                <div className="flex flex-wrap gap-4 md:gap-12 mx-auto">
                    <Service1 />
                    <Service2 />
                </div>

            </SectionType1>

            <RestaurantSection />
        </>
    )
}
const Service1 = () => {

    return (
        <article className="flex flex-col gap-3 bg-color9 p-3 md:p-8 max-w-md rounded-lg">
            <TransitionImage src={MapImage} alt="img" className="rounded-md h-60" />

            <div className="">
                <FadeAndSlideScrollTriggerAnimation className="my-3" tag="h3" innerClassName="text-title2 text-font2" >
                    開業・運営支援
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation >
                    これから飲食店の開業をお考えですか？<br />
                    飲食店開業をお考えの方が、まず行うべきことである事業計画などの事前準備から、<br />
                    資金調達の方法、物件の探し方、内外装について、必要な厨房機器や設備と選び方、
                    国内・国外で <HighlightMarker> 220店舗</HighlightMarker>以上のコンサルティング経験を活かして、<br />
                    皆様の不安・疑問が解消されますよう、詳しくご説明・ご案内いたします。
                </FadeAndSlideScrollTriggerAnimation>

            </div>
            <div className="flex-1" />
            <div className="ml-auto">
                <LinkButton href="/services/produce" title="VIEW More" subTitle="もっとみる" />
            </div>
        </article>
    )
}
const Service2 = () => {

    return (
        <article className="flex flex-col gap-3 bg-color9 p-3 md:p-8 max-w-md rounded-lg">
            <TransitionImage src={Gastro4} alt="img" className="rounded-md h-60" />

            <div className="">
                <FadeAndSlideScrollTriggerAnimation className="my-3" tag="h3" innerClassName="text-title2 text-font2" >
                    ガストロノミーツーリズム
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation >
                    <h4 className="text-title4 text-color3"> 地方から世界へ！↔世界から地方へ！</h4>
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="text-p">
                    ガストロノミーツーリズム＝その土地の気候や風土が生んだ<br />
                    食材・習慣・伝統・歴史などによって育まれた食を楽しみ、<br />
                    文化に触れる体験を目的とした旅行のことです。<br />

                    日本全国・海外で220店舗以上の飲食店をプロデュース・コンサルティングしてきた経験や
                    ノウハウ・コネクションを活かし、<br />
                    生産者から飲食店、ホテル、観光、交通などの各分野を横断して、
                    ガストロノミーツーリズムを行います。
                </FadeAndSlideScrollTriggerAnimation>
            </div>

            <div className="flex-1" />
            <div className="ml-auto">
                <LinkButton href="/services/gastronomy_tourism" title="VIEW More" subTitle="もっとみる" />
            </div>
        </article>
    )
}


export const TopGastroSection = () => {
    return (
        <SectionType1 className=" bg-color8 mt-64 sm:mt-36 md:mt-80 relative" disableLine>
            {/* 旅人イラスト */}
            <FadeAndSlideScrollTriggerAnimation
                transform={{ translate: { y: "100%" } }}
                className="!absolute left-0 -z-10 w-40"
                style={{ bottom: "calc(100% + 76px)" }}>
                <Image src={Traveller} alt="旅人" />
            </FadeAndSlideScrollTriggerAnimation>
            <FadeAndSlideScrollTriggerAnimation
                transform={{ translate: { y: "100%" } }}
                className="!absolute right-0 sm:-right-8 -z-10 w-40"
                style={{ bottom: "calc(100% + 76px)" }}>
                <Image src={Traveller2} alt="旅人2" />
            </FadeAndSlideScrollTriggerAnimation>

            {/* Top */}
            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col md:-mt-64 md:flex-row items-center" >
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12">
                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color8">
                        <h3 className="text-title2 text-font2 font-bold">ガストロノミーツーリズム</h3>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color8">
                        <h4 className="text-size2 font-bold text-color3"> 地方から世界へ！↔世界から地方へ！</h4>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color8">
                        <p className="text-size-p-wide">
                            観光立国として日本を持続的に活性化するため、<br />
                            世界中からフーディーズを集めます！
                        </p>
                    </SkewScrollTriggerAnimation>

                </div>
                <div className="mt-6">
                    <TransitionImage className="max-w-sm w-full" src={Gastro} alt="ガストロノミーツーリズム" />
                </div>
            </div>

            {/* Center */}
            <div className="flex flex-col flex-grow justify-center items-center gap-3 sm:gap-5 md:gap-16 mt-12 md:mt-24">
                <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-5">
                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color8">
                        <p className="text-size-p">
                            ガストロノミーツーリズム＝その土地の気候や風土が生んだ<br />
                            食材・習慣・伝統・歴史などによって育まれた食を楽しみ、<br />
                            文化に触れる体験を目的とした旅行のことです。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color8">
                        <p className="text-size-p">
                            欧米を中心に普及したスタイルで、<br />
                            世界的に注目度の高い日本の食文化を<br />
                            アピールすることでインバウンドを狙います。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation skewPanelClass="!bg-color8">
                        <p className="text-size-p">
                            日本全国・海外で220店舗以上の飲食店をプロデュース・コンサルティングしてきた経験や<br />
                            ノウハウ・コネクションを活かし、<br />
                            生産者から飲食店、ホテル、観光、交通などの各分野を横断して、<br />
                            ガストロノミーツーリズムを行います。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <div className="mt-4 p-3 ml-auto">
                        <LinkButton href="/services/gastronomy_tourism" title="VIEW More" subTitle="もっとみる" />
                    </div>
                </div>
            </div>

            <RefindJapanBanner />

            {/* Right */}
            <div className="w-full flex flex-wrap gap-8 sm:gap-20 p-3 sm:p-5 md:p-8 justify-between">
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full mt-12" >
                    <TransitionImage className="rounded-md" parallaxSlideLength={25} src={Gastro4} scale={{ from: 0.88, to: 1 }} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto md:ml-0 md:mt-32"  >
                    <TransitionImage className="rounded-md" parallaxSlideLength={10} src={Gastro5} scale={{ from: 0.84, to: 1 }} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full"  >
                    <TransitionImage className="rounded-md" parallaxSlideLength={20} src={Gastro6} scale={{ from: 0.9, to: 1 }} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>

            </div>

        </SectionType1>
    )
}

const RefindJapanBanner = () => {

    return (
        <FadeAndSlideScrollTriggerAnimation innerClassName="bg-color7 items-center justify-center grid grid-cols-1 md:grid-cols-2 p-8 gap-8 max-w-3xl mx-auto mt-8">
            <div className="max-w-96 mx-auto">
                <Image src={RefindJapan} alt="Refind Japan" className="w-full" />
            </div>
            <div className="flex flex-col gap-8">
                <div>
                    Refind Japanは、日本の食と伝統文化の魅力を再発見するインバウンド向けの体験型ツアーです。
                    ここでしか体験できない特別な思い出となるよう、厳選されたストーリーをお届けします。
                </div>
                <LinkButton href="https://refind-japan.com/" target="_blank" title="Refind Japan 公式サイト"></LinkButton>
            </div>
        </FadeAndSlideScrollTriggerAnimation>
    )
}