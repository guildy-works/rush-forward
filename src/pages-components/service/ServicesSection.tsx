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

            <Service3 />
        </>
    )
}

const Service1 = () => {
    return (
        <SectionType1 className="mt-64 bg-color8 sm:mt-36 md:mt-48 lg:mt-56 relative" disableLine>

            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col <!--md:-mt-64--> md:flex-row" >
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0  items-start">
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <h3 className="text-title1 text-font1">開業・運営支援</h3>
                        <h3 className="text-title2 text-font3">Produce / Consulting</h3>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <h4 className="text-title4 text-font2">当社では、開業プロデュース及び運営コンサルティングを行っています。</h4>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            「美味しく安心・安全なお料理で、お客様をはじめ関わる総ての人々を<br />
                            笑顔にし、街を楽しく活性化させる」そんなお店を創ることに一途に邁進することをミッションとしています。
                        </p>
                    </SkewScrollTriggerAnimation>

                </div>
                <div className="mt-6">
                    <TransitionImage className="max-w-sm w-full" src={MapImage} alt="ProduceImage" />
                </div>
            </div>

            {/* Center */}
            <div className="flex flex-col flex-grow justify-center items-center gap-3 sm:gap-5 md:gap-16 mt-12 md:24">
                <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-5">
                    <div className="mt-4 p-3 ml-auto">
                        <LinkButton href="/produce" title="VIEW More" subTitle="もっとみる" />
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
        <SectionType1 className="bg-white sm:mt-36 md:mt-48 lg:mt-56 relative" disableLine>

            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col <!--md:-mt-64--> md:flex-row" >
                <div className="mt-6">
                    <TransitionImage className="max-w-sm w-full" src={Gastro} alt="ProduceImage" />
                </div>
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12 ml-0  items-start">
                    <SkewScrollTriggerAnimation innerClassName="!bg-white">
                        <h3 className="text-title1 text-font1">ガストロノミーツーリズム</h3>
                        <h3 className="text-title2 text-font3">Gastronomy Tourism</h3>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-white">
                        <h4 className="text-title4 text-font2">地方から世界へ！↔世界から地方へ！</h4>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-white">
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


const Service3 = () => {
    return (
        <SectionType1 className="text-left">
            <div className="w-full justify-start flex flex-col items-start gap-8 sm:gap-24 md:gap-32 ">
                <Section1Title title="Restaurant" subTitle="直営店" />

                <RestaurantArticle
                    children1={
                        <>
                            <div className="flex flex-col gap-4 md:gap-8">
                                <SkewScrollTriggerAnimation className="">
                                    <h3 className="text-title3">奄美黒糖焼酎 x 味噌 x 古民家</h3>
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation className="">
                                    <h2 className="text-title1">がらり千駄ヶ谷</h2>
                                </SkewScrollTriggerAnimation>
                            </div>

                            <div className="flex flex-col items-start">
                                <SkewScrollTriggerAnimation className="">
                                    <p className="text-size-p-wide">
                                        奄美群島でしか作ることのできない黒糖焼酎。<br />
                                        全ての蔵の全銘柄を揃えている日本で唯一、いや世界で唯一のお店です。

                                    </p>
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation className="mt-3">
                                    <p className="text-size-p">
                                        また日本の伝統的な発酵調味料である味噌を全国から取り寄せ、<br />
                                        伝統的な和食と融合して更に進化させたお料理を提供しております。
                                    </p>
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation className="mt-3">
                                    <p className="text-size-p">
                                        築60年以上の古民家を改装した懐かしくてモダンな空間で、<br />
                                        ゆったりとした時間をお過ごしいただけます。
                                    </p>
                                </SkewScrollTriggerAnimation>

                                <div className="mt-4 p-3 ml-auto flex flex-col sm:flex-row gap-4 md:gap- w-full sm:w-auto">
                                    <LinkButton className="w-full sm:w-auto" href="https://tabelog.com/tokyo/A1309/A130901/13005444/" target="_blank" title="VIEW More" subTitle="食べログ" />
                                    <LinkButton className="w-full sm:w-auto" href="https://galali-sendagaya.com/" title="VIEW More" subTitle="公式サイト" />
                                </div>
                            </div>
                        </>
                    }
                    children2={
                        <>
                            <FadeAndSlideScrollTriggerAnimation>
                                <h2 className="text-title4 [writing-mode:vertical-rl]">
                                    希少な奄美黒糖焼酎で<br />
                                    新たな感動を。
                                </h2>
                            </FadeAndSlideScrollTriggerAnimation>
                        </>
                    }
                    image={Image1_GarariSendagaya}
                />

                <RestaurantArticle
                    children1={
                        <>
                            <div className="flex flex-col gap-4 md:gap-8">
                                <SkewScrollTriggerAnimation className="">
                                    <h3 className="text-title3">蕎麦 x 居酒屋</h3>
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation className="">
                                    <h2 className="text-title1">青山がらりつくば</h2>
                                </SkewScrollTriggerAnimation>
                            </div>

                            <div className="flex flex-col items-start">
                                <SkewScrollTriggerAnimation className="">
                                    <p className="text-size-p-wide">
                                        楽しむ地産地消のお店 <br />

                                    </p>
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation className="mt-3">
                                    <p className="text-size-p">
                                        青山がらりつくば店はつくば駅隣接のtonarie Q't 3階にある老舗蕎麦居酒屋です。 <br />

                                    </p>
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation className="mt-3">
                                    <p className="text-size-p">
                                        全国各地から集めた日本酒と焼酎の品揃えが豊富で、 <br />
                                        特に茨城県産の日本酒を多く取り扱っています​​​​。
                                    </p>
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation className="mt-3">
                                    <p className="text-size-p">
                                        また、地元茨城県産の旬の食材を、 <br />
                                        素材の美味しさを活かすように職人が丁寧に仕込んだ料理を提供しております。 <br />
                                        地元の方だけでなく、 <br />
                                        外国の方や他県の方にも人気があります。
                                    </p>
                                </SkewScrollTriggerAnimation>

                                <div className="mt-4 p-3 ml-auto flex flex-col sm:flex-row gap-4 md:gap- w-full sm:w-auto">
                                    <LinkButton className="w-full sm:w-auto" href="https://www.hotpepper.jp/strJ000852634/" target="_blank" title="VIEW More" subTitle="ホットペッパー" />
                                    <LinkButton className="w-full sm:w-auto" href="https://galali-tsukuba.com/" title="VIEW More" subTitle="公式サイト" />
                                </div>
                            </div>
                        </>
                    }
                    children2={
                        <>
                            <FadeAndSlideScrollTriggerAnimation>
                                <h2 className="text-title4  [writing-mode:vertical-rl]">
                                    茨城の食材を使った<br />
                                    地産地消の蕎麦居酒屋。
                                </h2>
                            </FadeAndSlideScrollTriggerAnimation>
                        </>
                    }
                    image={Image9_AoyamaGarariTsukuba}
                />
            </div>
        </SectionType1>
    )
}

const RestaurantArticle = ({ image, children1, children2 }: {
    children1?: React.ReactNode,
    children2?: React.ReactNode,
    image: StaticImageData
}) => (
    <div className="w-full flex flex-wrap justify-center">

        <div className="md:w-5/12 flex justify-center items-center sm:px-4">
            {/* 浮かせる余白 */}
            <div className="flex flex-col items-start gap-4 md:gap-8 ">
                {children1}
            </div>
        </div>

        <div className="w-full md:w-7/12 mt-8 sm:px-8 ">
            <ShopImageArticle image={image} >
                {children2}
            </ShopImageArticle>
        </div>
    </div>)

const ShopImageArticle = ({ image, children }: {
    children?: React.ReactNode,
    image: StaticImageData
}) => (
    <article
        className="relative w-full max-w-2xl">
        {/* 装飾 */}
        <div className="bg-color7 absolute bottom-0 left-0 w-3/5 h-2/3"
            style={{ clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0% 100%)" }}></div>

        <div className="flex flex-wrap w-full pb-6 sm:pb-12">
            <div className="flex flex-row-reverse p-6  sm:p-12 lg:p-16">
                {children}
            </div>
            <TransitionImage className="flex-1 " parallaxSlideLength={80} src={image} alt="img" />
        </div>
    </article>
)