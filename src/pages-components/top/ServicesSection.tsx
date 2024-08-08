import { FadeAndSlideScrollTriggerAnimation } from "@/components/FadeAndSlideScriollTriggerAnimation"
import { LinkButton } from "@/components/LinkButton"
import { SkewScrollTriggerAnimation } from "@/components/SkewScrollTriggerAnimation"
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

export const ServicesSection = () => {

    return (
        <>
            <SectionType1>
                <div className=" justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full md:w-3/5">
                    <Section1Title title="Service" subTitle="事業" />

                    <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 mt-3 sm:mt-5 md:mt-7 text-size2">
                        <h3 className="text-color2 text-title4">私達は街を創る飲食の企画集団です。</h3>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation delay={100} className="space-y-2 text-gray-700 text-size2">
                        <p>飲食店を開業される皆様の夢と熱い想いに寄り添い、</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 text-size2">
                        <p>皆様が永くご店舗を経営していただけるよう、 </p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation delay={50} className="space-y-2 text-gray-700 text-size2" >
                        <p>しっかりサポートさせていただきます。</p>
                    </SkewScrollTriggerAnimation>

                    <LinkButton href="/about" title="VIEW More" subTitle="もっとみる" className="mt-5" />

                    {/* 写真エリア */}
                    <div className="flex-1 w-full relative gap-24 flex flex-wrap justify-center items-center pl-0 sm:pr-8">
                        <div className="w-full flex flex-wrap gap-4 sm:gap-6 lg:gap-12">
                            <FadeAndSlideScrollTriggerAnimation className="max-w-36 lg:max-w-48 w-full mt-12" >
                                <TransitionImage className="rounded-xl" parallaxSlideLength={25} src={Gastro2} alt="img" />
                            </FadeAndSlideScrollTriggerAnimation>
                            <FadeAndSlideScrollTriggerAnimation className="max-w-32 lg:max-w-36 w-full  md:ml-0 md:mt-32"  >
                                <TransitionImage className="rounded-xl" parallaxSlideLength={60} src={Gastro12} alt="img" />
                            </FadeAndSlideScrollTriggerAnimation>
                            <FadeAndSlideScrollTriggerAnimation className="max-w-32 lg:max-w-44 w-full mt-3"  >
                                <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro7} alt="img" />
                            </FadeAndSlideScrollTriggerAnimation>
                            <FadeAndSlideScrollTriggerAnimation className="max-w-32 lg:max-w-44 mt-16 w-full"  >
                                <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro11} alt="img" />
                            </FadeAndSlideScrollTriggerAnimation>
                            <FadeAndSlideScrollTriggerAnimation className="max-w-32 lg:max-w-44 mt-24 w-full"  >
                                <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro8} alt="img" />
                            </FadeAndSlideScrollTriggerAnimation>
                            <FadeAndSlideScrollTriggerAnimation className="max-w-32 lg:max-w-44 mt-12 w-full"  >
                                <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro10} alt="img" />
                            </FadeAndSlideScrollTriggerAnimation>
                            <FadeAndSlideScrollTriggerAnimation className="max-w-44 lg:max-w-56 mt-12 w-full"  >
                                <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro1} alt="img" />
                            </FadeAndSlideScrollTriggerAnimation>
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 md:mt-24 ml-auto w-full md:w-2/5 flex flex-wrap">
                    <Service1 />

                </div>
            </SectionType1>


            <Service2 />

            <Service3 />
        </>
    )
}

const Service1 = () => {

    return (
        <article className="flex flex-col items-start w-full gap-3">
            <TransitionImage src={MapImage} alt="img" className="rounded-xl w-full" />

            <SkewScrollTriggerAnimation className="my-3">
                <h2 className="text-title2">開業・運営支援</h2>
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation >
                <p>
                    これから飲食店の開業をお考えですか？<br />
                    飲食店の新規開業は、ワクワクする気持ちと共に、不安、疑問が混在されているものと思います。<br />
                </p>
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation>
                <p>
                    飲食店開業をお考えの方が、まず行うべきことである事業計画などの事前準備から、<br />
                    資金調達の方法、物件の探し方、内外装について、必要な厨房機器や設備と選び方、
                </p>
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation>
                <div>
                    国内・国外で <HighlightMarker> 220店舗</HighlightMarker>以上のコンサルティング経験を活かして、<br />
                    皆様の不安・疑問が解消されますよう、詳しくご説明・ご案内いたします。
                </div>
            </SkewScrollTriggerAnimation>
            <Image src={Image_Flow} alt="img" className="h-36 w-auto" />

            <div className="mt-4 p-3 ml-auto">
                <LinkButton href="/about" title="VIEW More" subTitle="もっとみる" />
            </div>
        </article>
    )
}

const Service2 = () => {
    return (
        <SectionType1 className="mt-64 bg-color8 sm:mt-36 md:mt-48 lg:mt-56 relative" disableLine>
            {/* 旅人イラスト */}
            <FadeAndSlideScrollTriggerAnimation
                transform={{ translate: { y: "100%" } }}
                className="!absolute left-0 -z-10 w-40"
                style={{ bottom: "calc(100% + 76px)" }}>
                <Image src={Traveller} alt="旅人" />
            </FadeAndSlideScrollTriggerAnimation>
            <FadeAndSlideScrollTriggerAnimation
                transform={{ translate: { y: "100%" } }}
                className="!absolute right-0 -z-10 w-40"
                style={{ bottom: "calc(100% + 76px)" }}>
                <Image src={Traveller2} alt="旅人2" />
            </FadeAndSlideScrollTriggerAnimation>


            {/* Top */}
            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full flex-col md:-mt-64 md:flex-row items-center" >
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center mt-auto pb-12">
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <h3 className="text-title1 text-font1">ガストロノミーツーリズム</h3>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <h4 className="text-title4 text-font2"> 地方から世界へ！↔世界から地方へ！</h4>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
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
            <div className="flex flex-col flex-grow justify-center items-center gap-3 sm:gap-5 md:gap-16 mt-12 md:24">
                <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-5">
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            ガストロノミーツーリズム＝その土地の気候や風土が生んだ<br />
                            食材・習慣・伝統・歴史などによって育まれた食を楽しみ、<br />
                            文化に触れる体験を目的とした旅行のことです。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            欧米を中心に普及したスタイルで、<br />
                            世界的に注目度の高い日本の食文化を<br />
                            アピールすることでインバウンドを狙います。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            日本全国・海外で220店舗以上の飲食店をプロデュース・コンサルティングしてきた経験や<br />
                            ノウハウ・コネクションを活かし、<br />
                            生産者から飲食店、ホテル、観光、交通などの各分野を横断して、<br />
                            ガストロノミーツーリズムを行います。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <div className="mt-4 p-3 ml-auto">
                        <LinkButton href="/about" title="VIEW More" subTitle="もっとみる" />
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="w-full flex flex-wrap gap-8 sm:gap-20 p-3 sm:p-5 md:p-8 justify-between">
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full mt-12" >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={25} src={Gastro4} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto md:ml-0 md:mt-32"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={60} src={Gastro5} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro6} alt="img" />
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