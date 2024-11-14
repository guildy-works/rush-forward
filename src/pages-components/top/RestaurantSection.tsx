import { LinkButton } from "@/components/LinkButton"
import { Section1Title } from "@/components/Section1Title"
import { SectionType1 } from "@/components/SectionType1"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation"
import Image1_GarariSendagaya from "@/assets/img1.jpg"
import { StaticImageData } from "next/image"
import { TransitionImage } from "@/components/TransitionImage"

import Image9_AoyamaGarariTsukuba from "@/assets/img9.jpg"

export const RestaurantSection = () => {
    return (
        <SectionType1 className="text-left">
            <div className="w-full justify-start flex flex-col items-start gap-8 sm:gap-24 md:gap-32 ">
                <Section1Title title="Restaurant" subTitle="直営店" />

                <RestaurantArticle
                    className="bg-color9"
                    children1={
                        <>
                            <div className="flex flex-col gap-4 md:gap-8">
                                <SkewScrollTriggerAnimation className="text-title3" tag="h2">
                                    奄美黒糖焼酎 x 味噌 x 古民家
                                </SkewScrollTriggerAnimation >
                                <SkewScrollTriggerAnimation className="text-title1" tag="h2">
                                    がらり千駄ヶ谷
                                </SkewScrollTriggerAnimation>
                            </div>

                            <div className="flex flex-col items-start">
                                <SkewScrollTriggerAnimation className="mt-3 text-size-p" tag="p">
                                    奄美群島でしか作ることのできない黒糖焼酎。<br />
                                    全ての蔵の全銘柄を揃えている日本で唯一、いや世界で唯一のお店です。
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation className="mt-3 text-size-p" tag="p">
                                    また日本の伝統的な発酵調味料である味噌を全国から取り寄せ、<br />
                                    伝統的な和食と融合して更に進化させたお料理を提供しております。
                                </SkewScrollTriggerAnimation>
                                <SkewScrollTriggerAnimation className="mt-3 text-size-p" tag="p">
                                    築60年以上の古民家を改装した懐かしくてモダンな空間で、<br />
                                    ゆったりとした時間をお過ごしいただけます。
                                </SkewScrollTriggerAnimation>

                                <div className="mt-4 p-3 ml-auto flex flex-col sm:flex-row gap-4 md:gap- w-full sm:w-auto">
                                    <LinkButton className="w-full sm:w-auto !bg-color3" href="https://tabelog.com/tokyo/A1309/A130901/13005444/" target="_blank" title="VIEW More" subTitle="食べログ" />
                                    <LinkButton className="w-full sm:w-auto" href="https://rush-forward.jp/galali/sendagaya/" title="VIEW More" target="_blank" subTitle="公式サイト" />
                                </div>
                            </div>
                        </>
                    }
                    children2={
                        <>
                            <FadeAndSlideScrollTriggerAnimation tag="h2" innerClassName="text-title4 [writing-mode:vertical-rl]">
                                    希少な奄美黒糖焼酎で<br />
                                    新たな感動を。
                            </FadeAndSlideScrollTriggerAnimation>
                        </>
                    }
                    image={Image1_GarariSendagaya}
                />

                <RestaurantArticle
                    className="bg-color7"
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
                                    <LinkButton className="w-full sm:w-auto !bg-red-700" href="https://www.hotpepper.jp/strJ000852634/" target="_blank" title="VIEW More" subTitle="ホットペッパー" />
                                    <LinkButton className="w-full sm:w-auto" href="https://rush-forward.jp/galali/tsukuba/" title="VIEW More" target="_blank" subTitle="公式サイト" />
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

const RestaurantArticle = ({ image, children1, children2, className }: {
    children1?: React.ReactNode,
    children2?: React.ReactNode,
    className?: string,
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
            <ShopImageArticle image={image} className={className} >
                {children2}
            </ShopImageArticle>
        </div>
    </div>)

const ShopImageArticle = ({ image, children, className }: {
    children?: React.ReactNode,
    image: StaticImageData,
    className?: string
}) => (
    <article
        className="relative w-full max-w-2xl">
        {/* 装飾 */}
        <div className={className + " absolute bottom-0 left-0 w-3/5 h-2/3"}
            style={{ clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0% 100%)" }}></div>

        <div className="flex flex-wrap w-full pb-6 sm:pb-12">
            <div className="flex flex-row-reverse p-6  sm:p-12 lg:p-16">
                {children}
            </div>
            <TransitionImage className="flex-1 " parallaxSlideLength={80} src={image} alt="img" />
        </div>
    </article>
)